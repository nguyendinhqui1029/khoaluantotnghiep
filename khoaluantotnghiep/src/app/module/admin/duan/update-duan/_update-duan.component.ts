import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DuAnService } from 'src/app/service/duan.service';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { DoiTacService } from 'src/app/service/doitac.service';
import { TinhThanhPhoService } from 'src/app/service/tinhthanhpho.service';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { DOITAC } from 'src/app/model/doitac';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { DANHMUC } from 'src/app/model/danhmuc';

@Component({
    selector: 'update-duan',
    templateUrl: './_update-duan.component.html',
    styleUrls: ['./_update-duan.component.scss']
})
export class UpdateDuAnComponent implements OnInit {
    duan: any[] = [];
    ds_loaigiaodich: LOAIGIAODICH[] = [];
    ds_doitac: DOITAC[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_quan: any[] = [];
    ds_danhmuc: DANHMUC[] = [];

    constructor(private fb: FormBuilder, private duAnService: DuAnService, private loaiGiaodichservice: LoaiGiaoDichService,
        private doiTacservice: DoiTacService, private tinhThanhpho: TinhThanhPhoService) {
        this.duAnService.getThongTin.subscribe(da => {
            this.duan = da;
            console.log(this.duan);
        })
    }

    formupdateDuan: FormGroup;

    ngOnInit(): void {
        this.formupdateDuan = this.fb.group({
            tenDuAn: ['', [Validators.required]],
            noiDungTomTat: ['', [Validators.required]],
            noiDungChiTiet: ['', [Validators.required]],
            ngayDang: ['', [Validators.required]],
            doiTac: ['', [Validators.required]],
            giaTien: ['', [Validators.required]],
            loaiGiaoDich: ['', [Validators.required]],
            danhMuc: ['', [Validators.required]],
            quanHuyen: ['', [Validators.required]],
            tinhThanhPho: ['', [Validators.required]],
            trangThai: ['', [Validators.required]],
            loaiDuAn: ['', [Validators.required]],
        });
        this.getDSDanhMuc();
        this.getDSDoiTac();
        this.getDSTinhThanhPho();
        this.getDSLoaiGiaoDich();

    }
    getDSDanhMuc() {
        this.loaiGiaodichservice.getAllLoaiGiaoDich(0).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
            console.log(this.ds_loaigiaodich);
        })
    }
    getDSDoiTac() {
        this.doiTacservice.getListDoiTac().subscribe(doitac => {
            this.ds_doitac = doitac.body;
        })
    }
    getDSTinhThanhPho() {
        this.ds_tinhthanhpho = this.tinhThanhpho.LayDanhSachTP();
    }


    selectTinhThanhPho(e) {
        this.ds_quan = this.tinhThanhpho.layQuanHuyen(e.target.value);
    }
    getDSLoaiGiaoDich() {
        this.loaiGiaodichservice.getDSTenLoaiDanhMuc(0).subscribe(loaidanhmuc => {
            this.ds_danhmuc = loaidanhmuc.body;
            console.log(this.ds_danhmuc);
        })
    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd'
            });
        });
    }
    get f() { return this.formupdateDuan.controls };

    update() {

    }
}
