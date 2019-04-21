import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { MakeUpDateService } from 'src/app/service/makeupdata.service';

@Component({
    selector: 'makeup-data',
    templateUrl: './makeupdata.component.html',
    styleUrls: ['./makeupdata.component.scss']
})
export class MakeUpDataComponent implements OnInit {
    arrObject: any[] = [
        { id: 1, name: "Đối tác", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 2, name: "Công ty", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 3, name: "Danh mục", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 4, name: "Dự án", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 5, name: "Giới thiệu", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 6, name: "Loại tin tức", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 7, name: "Loại giao dịch", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 8, name: "Menu", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 9, name: "Slider", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 10, name: "Tài khoản", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" },
        { id: 11, name: "Tin tức", itemnew: 0, tongitem: 0, namebutton: "Cập nhật" }];
    constructor(private makeUpDateService: MakeUpDateService) {
        this.arrObject.forEach(element => {
            this.CapNhat(element, false);
        });


    }

    ngOnInit(): void { }

    CapNhat(ob, flag) {
        switch (ob.id) {
            case 1: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getListDoiTac().subscribe(e => {
                    this.makeUpDateService.getListDoiTacLocal().subscribe(elocal => {
                        if (e.body) {
                            let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);

                            if (flag) {
                                ds.arr.forEach(element => {
                                    this.makeUpDateService.themListDoiTacLoCal(element).subscribe(e => {
                                        console.log(e);
                                    });
                                });
                                ob.itemnew = ds.itemnew;
                                ob.tongitem = ds.tongitem;
                            }
                            ob.itemnew = ds.itemnew;
                            ob.tongitem = ds.tongitem;
                        }

                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 2: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getCongTy().subscribe(e => {
                    this.makeUpDateService.getCongTyLoCal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);
                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themCongTyLoCal(element).subscribe(e => {
                                    console.log(e);

                                });
                            });
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;
                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 3: {

                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getDSDanhMuc().subscribe(e => {
                    this.makeUpDateService.getDSDanhMucLocal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);
                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themDanhMucLoCal(element).subscribe(e => {
                                    console.log(e);

                                });
                            });
                        }


                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;
                        console.log(ob.itemnew);

                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 4: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getListDuAn().subscribe(e => {
                    this.makeUpDateService.getListDuAnLocal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);


                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themListDuAnLoCal(element).subscribe(e => {
                                    console.log(e);

                                });
                            });
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;

                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 5: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getDanhSachGioiThieu().subscribe(e => {
                    this.makeUpDateService.getGioiThieuLocal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);


                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themGioiThieuLoCal(element).subscribe(e => {
                                    console.log(e);
                                });
                            });
                            ob.itemnew = ds.itemnew;
                            ob.tongitem = ds.tongitem;
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;

                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 6: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getDsLoaiTinTuc().subscribe(e => {
                    this.makeUpDateService.getLoaiTinTucLocal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);


                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themLoaiTinTucLoCal(element).subscribe(e => {
                                    console.log(e);
                                });
                            });
                            ob.itemnew = ds.itemnew;
                            ob.tongitem = ds.tongitem;
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;

                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 7: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getAllLoaiGiaoDich().subscribe(e => {
                    this.makeUpDateService.getAllLoaiGiaoDichLoCal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);
                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themLoaiGiaoDichLoCal(element).subscribe(e => {
                                    console.log(e);
                                });
                            });
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;
                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 8: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getDsMeNUTheoType().subscribe(e => {
                    this.makeUpDateService.getMeNUTheoTypeLocal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);

                        console.log(e.body)
                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themMeNUTheoTypeLoCal(element).subscribe(e => {
                                    console.log(e);
                                });
                            });
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;
                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 9: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getListSliderTheoTrangThai().subscribe(e => {
                    this.makeUpDateService.getSliderTrangThaiLocal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);


                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themSliderTrangThaiLoCal(element).subscribe(e => {
                                    console.log(e);
                                });
                            });
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;
                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 10: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.layTaiKhoanTheoEmail().subscribe(e => {
                    this.makeUpDateService.layTaiKhoanTheoEmailLoCal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);


                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themTaiKhoanLoCal(element).subscribe(e => {
                                    console.log(e);
                                });
                            });
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;
                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;
            case 11: {
                ob.namebutton = "Cập nhật ...";
                this.makeUpDateService.getDSTinTuc().subscribe(e => {
                    this.makeUpDateService.getTinTucLocal().subscribe(elocal => {
                        let ds = this.makeUpDateService.isMakeUpData(e.body, elocal.body);

                        if (flag) {
                            ds.arr.forEach(element => {
                                this.makeUpDateService.themTinTucLoCal(element).subscribe(e => {
                                    console.log(e);
                                });
                            });
                        }

                        ob.itemnew = ds.itemnew;
                        ob.tongitem = ds.tongitem;
                    });
                });
                ob.namebutton = "Cập nhật";
            }
                break;

        }
    }
}
