import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; import { HINHANH } from 'src/app/model/hinhanh';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { TINTUC } from 'src/app/model/tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { TRANGTHAITINTUC } from 'src/app/model/trangthaitintuc';
import { ds_trangtintuc } from 'src/app/model/mock_trangthaitintuc';

@Component({
    selector: 'them-tintuc',
    templateUrl: './_them-tintuc.component.html',
    styleUrls: ['./_them-tintuc.component.scss']
})
export class ThemTinTucComponent implements OnInit {
    formthemTinTuc: FormGroup;
    submitted = false;
    statusAdd: any = { "status": false, "message": "" };
    ds_trangthaitintuc: TRANGTHAITINTUC[] = [];
    ds_loaitintuc: LOAITINTUC[] = [];
    tentrangthaiduocchon: any = "";
    ds_mangHinh: HINHANH[] = [];
    constructor(private fb: FormBuilder, private loaiTinTucService: LoaiTinTucService,
        private tinTucService: TinTucService) {
        this.formthemTinTuc = this.fb.group({
            tentintuc: ['', [Validators.required]],
            trangthai: ['', [Validators.required]],
            ngayDang: ['', [Validators.required]],
            loaitintuc: ['', [Validators.required]],
            noidungchitiet: ['', [Validators.required]],
            noidungtomtat: ['', [Validators.required]],
            hinhanh: ['',]
        });

    }
    //get Object theo id
    loaitintuc: any = {};
    getLoaiTinTucTheoMa(maloaitintuc): any {
        this.ds_loaitintuc.forEach(ltt => {
            if (ltt.maloai === maloaitintuc) {
                this.loaitintuc = ltt;
            }
        })
        return this.loaitintuc;
    }
    // end
    getDSTrangThaiTinTuc() {
        this.ds_trangthaitintuc = ds_trangtintuc; //lấy từ mock để show giá trị
        this.formthemTinTuc.controls.trangthai.setValue(this.ds_trangthaitintuc[0].matrangthai); //Lấy giá trị show lên combo đầu tiên
    }

    getDSLoaiTinTuc() {
        this.loaiTinTucService.getDSLoaiTinTuc().subscribe(ltt => {
            this.ds_loaitintuc = ltt.body;
            console.log(this.ds_loaitintuc);
            this.formthemTinTuc.controls.loaitintuc.setValue(this.ds_loaitintuc[0].maloai); //Lấy giá trị show lên combo đầu tiên

        })
    }

    selectTrangThai(e) {
        this.tentrangthaiduocchon = e.target.value;
    }
    ngOnInit(): void {
        let d = new Date();
        let date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

        this.formthemTinTuc.controls.ngayDang.setValue(date);
        this.getDSTrangThaiTinTuc();
        this.getDSLoaiTinTuc();
    }

    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayHighlight: true,
            });
        });
    }

    get f() { return this.formthemTinTuc.controls };

    add() {
        this.submitted = true;
        let tentintuc = this.formthemTinTuc.controls.tentintuc.value;
        let trangthai = this.formthemTinTuc.controls.trangthai.value;
        let ngayDang = this.formthemTinTuc.controls.ngayDang;
        let maloaitintuc = this.formthemTinTuc.controls.loaitintuc.value;
        let noidungchitiet = this.formthemTinTuc.controls.noidungchitiet.value;
        let noidungtomtat = this.formthemTinTuc.controls.noidungtomtat.value;

        console.log(ngayDang.value);

        let loaitintuc;
        let maloai = "TT" + (new Date()).getTime().toString();
        let ObjectLoaiTinTuc = this.getLoaiTinTucTheoMa(maloaitintuc);

        if (this.ds_mangHinh.length > 0) {
            loaitintuc = new TINTUC(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang.value, this.ds_mangHinh,
                ObjectLoaiTinTuc);
        } else if (this.ds_mangHinh.length === 0) {
            let hinhanh = new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an");
            this.ds_mangHinh.push(hinhanh);
            loaitintuc = new TINTUC(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang.value, this.ds_mangHinh,
                ObjectLoaiTinTuc);
        }



        if (this.formthemTinTuc.invalid) {
            return;
        } else if (this.formthemTinTuc.valid) {
            this.tinTucService.themTinTuc(loaitintuc).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Tin Tức đã được thêm thành công!";
                console.log(res);
            });
        }

    }

    changeImage(event) {
        const $ = window["$"];
        let files = $("#mangHinh")[0].files;
        let mahinh;
        $("#mangHinh").value
        for (var i = 0; files.length > i; i++) {
            setTimeout(function () {
            }, 500);
            mahinh = "HA" + (new Date()).getTime().toString();
            this.ds_mangHinh.push(new HINHANH(mahinh, files[i].name, files[i].name));
        }
    }
}
