import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoiTacService } from 'src/app/service/doitac.service';
import { HINHANH } from 'src/app/model/hinhanh';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';
import { TinhThanhPhoService } from 'src/app/service/tinhthanhpho.service';
import { DOITAC } from 'src/app/model/doitac';

@Component({
    selector: 'update-doitac',
    templateUrl: './_update-doitac.component.html',
    styleUrls: ['./_update-doitac.component.scss']
})
export class UpdateDoiTacComponent implements OnInit {
    formUpdateDoiTac: FormGroup;
    doitac: any = {};
    madoitac: any = "";
    tinhthanhpho: any = "";
    quanhuyen: any = "";
    loGo: HINHANH;
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_tinhthanhphofromMock: TINHTHANHPHO[] = ds_tinhthanhpho;
    tinhthanhphokhongdau: any = "";
    ds_quan: any[] = [];
    thanhphoduocchon: any[] = [];
    flag = false;
    status = "capnhatdoitac";
    statusUpdate: any = { "status": false, "message": "" };

    constructor(private rout: ActivatedRoute, private fb: FormBuilder, private doiTacService: DoiTacService,
        private tinhThanhphoService: TinhThanhPhoService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateDoiTac = this.fb.group({
            hoTen: ['', [Validators.required]],
            diaChi: ['', [Validators.required]],
            sdt: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
            tinhThanhPho: ['', [Validators.required]],
            quanHuyen: ['', [Validators.required]],
            ngaySinh: ['', [Validators.required]],
            moTa: ['',],
            user: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            pass: ['', [Validators.required]],
            loaiTaiKhoan: [''],
            email: [''],
        });
        this.doiTacService.getDoiTacTheoMaDoiTac(id).subscribe(dt => {
            this.doitac = JSON.stringify(dt);
            let doit = JSON.parse(this.doitac);

            this.madoitac = doit.body.data[0].maDoiTac;
            this.formUpdateDoiTac.controls.hoTen.setValue(doit.body.data[0].hoTen);
            this.formUpdateDoiTac.controls.diaChi.setValue(doit.body.data[0].diaChi);
            this.formUpdateDoiTac.controls.sdt.setValue(doit.body.data[0].sdt);
            this.formUpdateDoiTac.controls.moTa.setValue(doit.body.data[0].moTa);
            this.formUpdateDoiTac.controls.user.setValue(doit.body.data[0].user);
            this.formUpdateDoiTac.controls.pass.setValue(doit.body.data[0].pass);
            this.formUpdateDoiTac.controls.loaiTaiKhoan.setValue(doit.body.data[0].loaiTaiKhoan);
            this.formUpdateDoiTac.controls.email.setValue(doit.body.data[0].email);
            this.formUpdateDoiTac.controls.ngaySinh.setValue(doit.body.data[0].ngaySinh);
            this.tinhthanhpho = doit.body.data[0].tinhThanhPho;
            this.formUpdateDoiTac.controls.tinhThanhPho.setValue(this.tinhthanhpho);
            this.quanhuyen = doit.body.data[0].quanHuyen;
            this.formUpdateDoiTac.controls.quanHuyen.setValue(this.quanhuyen);
            this.loGo = doit.body.data[0].loGo;
            this.ds_tinhthanhphofromMock.forEach(tinh => {
                if (this.tinhthanhpho === tinh.tenTinhThanhPhoCodau) {
                    this.tinhthanhphokhongdau = tinh.tenTinhThanhPhoKhongdau;
                }
            })
            this.ds_quan = this.tinhThanhphoService.layQuanHuyen(this.tinhthanhphokhongdau);

        })
    }
    getDSTinhThanhPho() {
        this.ds_tinhthanhpho = this.tinhThanhphoService.LayDanhSachTP();
    }

    tatcatinhthanhpho: TINHTHANHPHO[] = ds_tinhthanhpho;
    tinhthanhphocungten: TINHTHANHPHO[] = [];
    tinhthanhphocodau: any = "";

    selectTinhThanhPho(e) {
        this.thanhphoduocchon = e.target.value;
        this.tinhthanhphocodau = "";
        this.tinhthanhphocungten = [];
        this.tatcatinhthanhpho.forEach(tinh => {
            if (tinh.tenTinhThanhPhoKhongdau === e.target.value) {
                this.tinhthanhphocungten.push(tinh);
            }
        })
        this.tinhthanhphocodau = this.tinhthanhphocungten[0].tenTinhThanhPhoCodau;
        this.ds_quan = this.tinhThanhphoService.layQuanHuyen(e.target.value);
        this.quanhuyenduocchon = this.ds_quan[0].tenquanhuyencodau;
    }

    quanhuyenduocchon: any = "";
    selectQuanHuyen(e) {
        this.quanhuyenduocchon = "";
        this.tatcatinhthanhpho.forEach(quan => {
            if (quan.quanKhongdau === e.target.value) {
                this.quanhuyenduocchon = quan.quanCodau;
            }
        })
    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd',
                todayHighlight: true,
                minDate: 0,
            });
        });
    }

    ngOnInit(): void {
        this.getDSTinhThanhPho();
        this.flag = true;
    }
    update() {
        //this.submitted = true;

        //formControls
        let hoTen = this.formUpdateDoiTac.controls.hoTen.value;
        let diaChi = this.formUpdateDoiTac.controls.diaChi.value;
        let ngaySinh = this.formUpdateDoiTac.controls.ngaySinh.value;
        let sdt = this.formUpdateDoiTac.controls.sdt.value;
        let quanHuyen;
        let tinhThanhPho;
        if (this.tinhthanhphocodau) {
            tinhThanhPho = this.tinhthanhphocodau;
        }
        else {
            tinhThanhPho = this.formUpdateDoiTac.controls.tinhThanhPho.value;
        }
        if (this.quanhuyenduocchon) {
            quanHuyen = this.quanhuyenduocchon;
        }
        else {
            quanHuyen = this.formUpdateDoiTac.controls.quanHuyen.value;
        }
        let user = this.formUpdateDoiTac.controls.user.value;
        let pass = this.formUpdateDoiTac.controls.pass.value;
        let email = this.formUpdateDoiTac.controls.email.value;
        let moTa = this.formUpdateDoiTac.controls.moTa.value;

        //formControls
        let doitacpdate;
        if (this.loGo) {
            doitacpdate = new DOITAC(this.madoitac, hoTen, diaChi, sdt, tinhThanhPho, quanHuyen, ngaySinh, this.loGo, moTa,
                user, pass, "", email, 1);
        } else {
            this.loGo = new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an");
            doitacpdate = new DOITAC(this.madoitac, hoTen, diaChi, sdt, tinhThanhPho, quanHuyen, ngaySinh, this.loGo, moTa,
                user, pass, "", email, 1);
        }
        if (this.formUpdateDoiTac.invalid) {
            return;
        } else if (this.formUpdateDoiTac.valid) {
            this.doiTacService.updateDoiTac(doitacpdate).subscribe(res => {
                console.log(res);
                this.statusUpdate.status = true;
                this.statusUpdate.message = "Đối Tác đã được Cập Nhật";
            });
        }
    }
}
