import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TRANGTHAITINTUC } from 'src/app/model/trangthaitintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { ds_trangtintuc } from 'src/app/model/mock_trangthaitintuc';
import { HINHANH } from 'src/app/model/hinhanh';
import { TINTUC } from 'src/app/model/tintuc';
import { HttpEventType } from '@angular/common/http';
import { UploadImageService } from 'src/app/service/upload-image.service';

@Component({
    selector: 'update-tintuc',
    templateUrl: './_update-tintuc.component.html',
    styleUrls: ['./_update-tintuc.component.scss']
})
export class UpdateTinTucComponent implements OnInit {
    statusUpdate: any = { "status": false, "message": "" };
    formUpdateTinTuc: FormGroup;
    tintuc: any = {};
    matintuc: any = "";
    ds_trangthaitintuc: TRANGTHAITINTUC[] = [];
    loaitintuc: any = "";
    ds_loaitintuc: LOAITINTUC[] = [];
    submitted = false;
    ds_mangHinh: HINHANH[] = [];

    status = "sua";
    flag = false;
    constructor(private rout: ActivatedRoute, private fb: FormBuilder, private tintucService: TinTucService,
        private LoaiTinTucService: LoaiTinTucService, private UploadHinhService: UploadImageService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateTinTuc = this.fb.group({
            tentintuc: ['', [Validators.required]],
            trangthai: ['', [Validators.required]],
            ngayDang: ['', [Validators.required]],
            loaitintuc: ['', [Validators.required]],
            noidungchitiet: ['', [Validators.required]],
            noidungtomtat: ['', [Validators.required]],
            hinhanh: ['',]
        });
        this.tintucService.getTinTuctheoMaLoai(id).subscribe(tt => {
            this.tintuc = JSON.stringify(tt);
            let doit = JSON.parse(this.tintuc);

            if (doit.body.data[0]) {
                this.matintuc = doit.body.data[0].matintuc;
                this.formUpdateTinTuc.controls.tentintuc.setValue(doit.body.data[0].tentintuc);
                this.formUpdateTinTuc.controls.trangthai.setValue(doit.body.data[0].trangthai);
                this.formUpdateTinTuc.controls.noidungtomtat.setValue(doit.body.data[0].noidungtomtat);
                this.formUpdateTinTuc.controls.noidungchitiet.setValue(doit.body.data[0].noidungchitiet);
                this.formUpdateTinTuc.controls.ngayDang.setValue(doit.body.data[0].ngaydang.substr(0, 10));
                this.loaitintuc = doit.body.data[0].loaitintuc.maloai;
                this.formUpdateTinTuc.controls.loaitintuc.setValue(this.loaitintuc);
                this.ds_mangHinh = doit.body.data[0].hinhanh;
            }

        });
    }
    //get Object theo id
    loaitintucchon: any = {};
    getLoaiTinTucTheoMa(maloaitintuc): any {
        this.ds_loaitintuc.forEach(ltt => {
            if (ltt.maloai === maloaitintuc) {
                this.loaitintucchon = ltt;
            }
        })
        return this.loaitintucchon;
    }
    // end
    getDSTrangThaiTinTuc() {
        this.ds_trangthaitintuc = ds_trangtintuc; //lấy từ mock để show giá trị
    }

    getDSLoaiTinTuc() {
        this.LoaiTinTucService.getDSLoaiTinTuc().subscribe(ltt => {
            this.ds_loaitintuc = ltt.body;

        })
    }
    ngOnInit(): void {
        this.flag = true;
        this.getDSLoaiTinTuc();
        this.getDSTrangThaiTinTuc();
    }
    update() {
        this.submitted = true;
        let tentintuc = this.formUpdateTinTuc.controls.tentintuc.value;
        let trangthai = this.formUpdateTinTuc.controls.trangthai.value;
        let noidungtomtat = this.formUpdateTinTuc.controls.noidungtomtat.value;
        let noidungchitiet = this.formUpdateTinTuc.controls.noidungchitiet.value;
        let ngayDang = this.formUpdateTinTuc.controls.ngayDang.value;
        let loaitintuc = this.formUpdateTinTuc.controls.loaitintuc.value;
        let ObjectLoaiTinTuc = this.getLoaiTinTucTheoMa(loaitintuc);
        this.Submit(this.matintuc, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang,
            ObjectLoaiTinTuc);
    }
    get f() { return this.formUpdateTinTuc.controls };

    Submit(matintuc, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang,
        ObjectLoaiTinTuc) {
        let tintucupdate;
        this.UploadHinhService.getHinhanh.subscribe(fileData => {
            if (fileData.length > 0) {
                let mangHinh: any[] = [];
                for (let i = 0; i < fileData.length; i++) {
                    const formData = new FormData();
                    formData.append('file', fileData[i]);
                    this.UploadHinhService.UploadImage(formData).subscribe(events => {
                        if (events.type == HttpEventType.UploadProgress) {
                            console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
                        } else if (events.type === HttpEventType.Response) {
                            let mahinh, tenhinh;
                            mahinh = "HA" + (new Date()).getTime().toString();
                            tenhinh = events.body.file.substring(events.body.file.lastIndexOf("/") + 1);
                            console.log(tenhinh);
                            mangHinh.push(new HINHANH(mahinh, tenhinh, tenhinh));

                            if (mangHinh.length > 0) {
                                tintucupdate = new TINTUC(matintuc, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngayDang, mangHinh,
                                    ObjectLoaiTinTuc);
                                this.ds_mangHinh.forEach(ah => {
                                    this.UploadHinhService.DeleteImage(ah.tenhinh).subscribe(events => {
                                        if (events.type == HttpEventType.UploadProgress) {
                                            console.log('delete progress: ', Math.round(events.loaded / events.total * 100) + '%');
                                        }
                                    })
                                })
                            }

                            if (this.formUpdateTinTuc.invalid) {
                                return;
                            } else if (this.formUpdateTinTuc.valid) {
                                this.tintucService.updateTinTuc(tintucupdate).subscribe(res => {
                                    this.statusUpdate.status = true;
                                    this.statusUpdate.message = "Cập nhật tin tức thành công";
                                });
                            }

                        }
                    })

                }

            }
        })


    }
    // changeImage(event) {
    //     const $ = window["$"];
    //     let files = $("#mangHinh")[0].files;
    //     let mahinh;
    //     $("#mangHinh").value
    //     for (var i = 0; files.length > i; i++) {
    //         setTimeout(function () {
    //         }, 500);
    //         mahinh = "HA" + (new Date()).getTime().toString();
    //         this.ds_mangHinh.push(new HINHANH(mahinh, files[i].name, files[i].name));
    //     }
    // }
}
