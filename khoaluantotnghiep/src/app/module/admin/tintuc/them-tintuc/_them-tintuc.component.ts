import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; import { HINHANH } from 'src/app/model/hinhanh';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { TINTUC } from 'src/app/model/tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { TRANGTHAITINTUC } from 'src/app/model/trangthaitintuc';
import { ConfigService } from 'src/app/service/config.service';
import { UploadImageService } from 'src/app/service/upload-image.service';
import { HttpEventType } from '@angular/common/http';

@Component({
    selector: 'them-tintuc',
    templateUrl: './_them-tintuc.component.html',
    styleUrls: ['./_them-tintuc.component.scss']
})
export class ThemTinTucComponent implements OnInit {


    //submit upload
    fileData: FileList = null;
    //submit upload


    //page upload
    flag = false;
    status = "them";
    //

    formthemTinTuc: FormGroup;
    submitted = false;
    statusAdd: any = { "status": false, "message": "" };
    ds_trangthaitintuc: TRANGTHAITINTUC[] = [];
    ds_loaitintuc: LOAITINTUC[] = [];
    tentrangthaiduocchon: any = "";
    ds_mangHinh: HINHANH[] = [];
    constructor(private fb: FormBuilder, private loaiTinTucService: LoaiTinTucService,
        private tinTucService: TinTucService,
        private UploadHinhService: UploadImageService) {
        this.formthemTinTuc = this.fb.group({
            tentintuc: ['', [Validators.required]],
            ngayDang: ['', [Validators.required]],
            loaitintuc: ['', [Validators.required]],
            noidungchitiet: ['', [Validators.required]],
            noidungtomtat: ['', [Validators.required]],
            hinhanh: ['',]
        });
        this.getDSLoaiTinTuc();
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


    getDSLoaiTinTuc() {
        this.loaiTinTucService.getDSLoaiTinTuc().subscribe(ltt => {
            this.ds_loaitintuc = ltt.body;
            if (ltt.body) {
                this.formthemTinTuc.controls.loaitintuc.setValue(this.ds_loaitintuc[0].maloai); //Lấy giá trị show lên combo đầu tiên
            }
        })
    }

    ngOnInit(): void {
        this.flag = true;
        let d = new Date();
        let date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        this.formthemTinTuc.controls.ngayDang.setValue(date);
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
        let ngayDang = this.formthemTinTuc.controls.ngayDang;
        let maloaitintuc = this.formthemTinTuc.controls.loaitintuc.value;
        let noidungchitiet = this.formthemTinTuc.controls.noidungchitiet.value;
        let noidungtomtat = this.formthemTinTuc.controls.noidungtomtat.value;

        console.log(ngayDang.value);

        let loaitintuc;
        let maloai = "TT" + (new Date()).getTime().toString();
        let ObjectLoaiTinTuc = this.getLoaiTinTucTheoMa(maloaitintuc);
        let trangthai = ConfigService.TRANG_THAI_TIN_TUC.CHODUYET;
        // if (this.ds_mangHinh.length > 0) {
        //     loaitintuc = new TINTUC(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang.value, this.ds_mangHinh,
        //         ObjectLoaiTinTuc);
        // } else if (this.ds_mangHinh.length === 0) {
        //     let hinhanh = new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an");
        //     this.ds_mangHinh.push(hinhanh);
        //     loaitintuc = new TINTUC(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang.value, this.ds_mangHinh,
        //         ObjectLoaiTinTuc);

        // }



        if (this.formthemTinTuc.invalid) {
            return;
        } else if (this.formthemTinTuc.valid) {
            // this.tinTucService.themTinTuc(loaitintuc).subscribe(res => {
            //     this.statusAdd.status = true;
            //     this.statusAdd.message = "Tin Tức đã được thêm thành công!";
            //     console.log(res);
            // });
            this.Submit(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang.value,
                ObjectLoaiTinTuc);
        }

    }

    tintuc: any = {};

    Submit(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang,
        ObjectLoaiTinTuc) {
        this.ds_mangHinh = [];
        this.UploadHinhService.getHinhanh.subscribe(fileData => {
            if (fileData.length > 0) {
                for (let i = 0; i < fileData.length; i++) {
                    const formData = new FormData();
                    formData.append('file', fileData[i]);
                    this.UploadHinhService.UploadImage(formData).subscribe(events => {
                        if (events.type == HttpEventType.UploadProgress) {
                            console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
                        } else if (events.type === HttpEventType.Response) {
                            let mahinh, tenhinh;
                            mahinh = "HA" + (new Date()).getTime().toString();
                            if (events.body.file.lastIndexOf("\\")) {
                                tenhinh = events.body.file.substring(events.body.file.lastIndexOf("\\") + 1);
                            } else if (events.body.file.lastIndexOf("/")) {
                                tenhinh = events.body.file.substring(events.body.file.lastIndexOf("/") + 1);
                            }
                            this.ds_mangHinh.push(new HINHANH(mahinh, tenhinh, tenhinh));
                            if (this.ds_mangHinh.length === fileData.length) {
                                this.tintuc = new TINTUC(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang, this.ds_mangHinh, ObjectLoaiTinTuc);
                                this.tinTucService.themTinTuc(this.tintuc).subscribe(res => {
                                    this.statusAdd.status = true;
                                    this.statusAdd.message = "Tin Tức đã được thêm thành công!";
                                    console.log(res);
                                });
                            }

                        }
                    })

                }

            } else {
                let hinhanh = new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an");
                this.ds_mangHinh.push(hinhanh);
                this.tintuc = new TINTUC(maloai, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang, this.ds_mangHinh, ObjectLoaiTinTuc);
            }


        })


    }
}
