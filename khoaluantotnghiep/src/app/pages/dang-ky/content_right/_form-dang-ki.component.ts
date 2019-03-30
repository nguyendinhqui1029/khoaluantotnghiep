import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './_must-match.validator';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';


@Component({
    selector: 'form-dang-ki',
    templateUrl: './_form-dang-ki.component.html',
    styleUrls: ['./_form-dang-ki.component.scss']
})
export class FormDangKiComponent implements OnInit {
    constructor(private fb: FormBuilder) { }
    dsgioitinh = ["Nam", "Nữ"];
    formDangKy: FormGroup;
    submitted = false;
    formvalid = false;
    flap = false;

    dstinhthanhpho: TINHTHANHPHO[] = ds_tinhthanhpho;
    dstinhtam: any[] = [];
    dsquantam: any[] = [];
    laydanhsachTinhThanhPho() {
        this.dstinhthanhpho.forEach(element => {
            if (this.dstinhtam.length <= 0) {
                this.dstinhtam.push({ "tenkhongdau": element.tenTinhThanhPhoKhongdau, "tencodau": element.tenTinhThanhPhoCodau });
            } else {
                this.dstinhtam.forEach(data => {
                    if (data.tenkhongdau !== element.tenTinhThanhPhoKhongdau) {
                        this.dstinhtam.push({ "tenkhongdau": element.tenTinhThanhPhoKhongdau, "tencodau": element.tenTinhThanhPhoCodau });
                    }
                })
            }
        });
    }
    laydanhsachQuanHuyenTheoTinhThanhPho() {
        this.dstinhtam.forEach(element => {

        })
    }

    ngOnInit(): void {
        this.formDangKy = this.fb.group({
            taikhoan: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pass: ['', [Validators.required]],
            confirmpass: ['', [Validators.required]],
            hoten: ['', [Validators.required]],
            gioitinh: [''],
            ngaysinh: [''],
            sdt: ['', Validators.pattern('^(0|[1-9][0-9]*)$')],
            diachi: [''],
            tinhTP: [''],
            quanHuyen: ['']
        }, {
                validator: MustMatch('pass', 'confirmpass')
            });
        this.laydanhsachTinhThanhPho();
    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd'
            });
            if ($('#popup1')) {
                setTimeout(function () {
                    $('#popup1').close()
                }, 3000);
            }

        });

    }

    get f() { return this.formDangKy.controls; }

    register() {
        this.submitted = true;
        console.log(this.formDangKy);
        if (this.formDangKy.invalid) {
            this.formvalid = false;
            return;
        } else if (this.formDangKy.valid) {
            this.formvalid = true;
        }

    }
    dongpopup() {
        this.flap = true;
        this.submitted = false;
    }
}
