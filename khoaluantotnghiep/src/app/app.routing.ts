import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './pages/trang-chu/_trangchu.component';
import { GioiThieuComponent } from './pages/gioi-thieu/_gioithieu.component';
import { DuAnPageComponent } from './pages/du-an/_du-an.component';
import { HuongDanComponent } from './pages/huong-dan/_huongdan.component';
import { TinTucComponent } from './pages/tin-tuc/_tintuc_component';
import { SanGiaoDichComponent } from './pages/san-giao-dich/_sangiaodich.component';
import { ThuVienAnhPageComponent } from './pages/thu-vien-anh/_thu-vien-anh.component';
import { LienHeComponent } from './pages/lien-he/_lienhe.component';
import { DangNhapComponent } from './pages/dang-nhap/_dang-nhap.component';
import { DangKyComponent } from './pages/dang-ky/_dang-ky.component';
import { GioHangComponent } from './pages/gio-hang/_giohang.component';
import { DuAnListComponent } from './module/du-an/du-an-list/_duanlist.component';
import { DuAnGridComponent } from './module/du-an/du-an-grid/_duangrid.component';
import { SanGiaoDichListComponent } from './module/san-giao-dich/san-giao-dich-list/_san-giao-dich-list.component';
import { SanGiaoDichGridComponent } from './module/san-giao-dich/san-giao-dich-grid/_san-giao-dich-grid.component';
import { SanGiaoDichChiTietComponent } from './pages/san-giao-dich-chi-tiet/_sangiaodichchitiet.component';
import { LayLaiMatKhauComponent } from './pages/lay-lai-mat-khau/_laylaimatkhau.component';
import { KetQuaTimKiemComponent } from './pages/ket-qua-tim-kiem/_ketquatimkiem.component';
import { TinTucChiTietComponent } from './pages/tin-tuc-chi-tiet/_tintucchitiet.component';
import { DuAnChiTietComponent } from './pages/du-an-chi-tiet/_du-an-chi-tiet.component';
import { AdminComponent } from './pages/admin/_admin.component';
import { XoaDuAnComponent } from './module/admin/duan/xoa-duan/_xoa-duan.component';
import { ThemDuAnComponent } from './module/admin/duan/them-duan/_them-duan.component';
import { ThemDanhMucComponent } from './module/admin/danhmuc/them-danhmuc/_them-danhmuc.component';
import { XoaDanhMucComponent } from './module/admin/danhmuc/xoa-danhmuc/_xoa-danhmuc.component';
import { ThemDoiTacComponent } from './module/admin/doitac/them-doitac/_them-doitac.component';
import { XoaDoiTacComponent } from './module/admin/doitac/xoa-doitac/_xoa-doitac.component';
import { ThemGioiThieuComponent } from './module/admin/gioithieu/them-gioithieu/_them-gioithieu.component';
import { XoaGioiThieuComponent } from './module/admin/gioithieu/xoa-gioithieu/_xoa-gioithieu.component';
import { ThemLoaiGiaoDichComponent } from './module/admin/loaigiaodich/them-loaigiaodich/_them-loaigiaodich.component';
import { XoaLoaiGiaoDichComponent } from './module/admin/loaigiaodich/xoa-loaigiaodich/_xoa-loaigiaodich.component';
import { ThemLoaiTinTucComponent } from './module/admin/loaitintuc/them-loaitintuc/_them-loaitintuc.component';
import { XoaLoaiTinTucComponent } from './module/admin/loaitintuc/xoa-loaitintuc/_xoa-loaitintuc.component';
import { ThemMenuComponent } from './module/admin/menu/them-menu/_them-menu.component';
import { XoaMenuComponent } from './module/admin/menu/xoa-menu/_xoa-menu.component';
import { ThemTaiKhoanComponent } from './module/admin/taikhoan/them-taikhoan/_them-taikhoan.component';
import { XoaTaiKhoanComponent } from './module/admin/taikhoan/xoa-taikhoan/_xoa-taikhoan.component';
import { ThemTinTucComponent } from './module/admin/tintuc/them-tintuc/_them-tintuc.component';
import { XoaTinTucComponent } from './module/admin/tintuc/xoa-tintuc/_xoa-tintuc.component';
import { AdminAuthGuard } from './auth/admin.guard';
import { CustomerAuthGuard } from './auth/customer.guard';
import { EmployeeAuthGuard } from './auth/employee.guard';
import { SubPageComponent } from './pages/sub-page/sub_page.component';
import { UpdateDuAnComponent } from './module/admin/duan/update-duan/_update-duan.component';
import { MakeUpDataComponent } from './module/admin/make_up_data_local/makeupdata.component';
import { UpdateDoiTacComponent } from './module/admin/doitac/update-doitac/_update-doitac.component';
import { UpdateDanhMucComponent } from './module/admin/danhmuc/update-danhmuc/_update-danhmuc.component';
import { UpdateGioiThieuComponent } from './module/admin/gioithieu/update-gioithieu/_update-gioithieu.component';
import { UpdateLoaiGiaoDichComponent } from './module/admin/loaigiaodich/update-loaigiaodich/_update-loaigiaodich.component';
import { UpdateLoaiTinTucComponent } from './module/admin/loaitintuc/update-loaitintuc/_update-loaitintuc.component';


const routes: Routes = [
    {
        path: '', component: SubPageComponent,
        children: [{
            path: '', component: SanGiaoDichComponent,
            children: [
                { path: '', component: SanGiaoDichListComponent },
                { path: 'grid', component: SanGiaoDichGridComponent }]
        },
        {
            path: 'trang-chu', component: TrangChuComponent,
            children: [
                { path: '', component: DuAnListComponent },
                { path: 'grid', component: DuAnGridComponent }]
        },
        {
            path: 'gioi-thieu', component: GioiThieuComponent
        },
        {
            path: 'du-an', component: DuAnPageComponent,
            children: [
                { path: '', component: DuAnListComponent },
                { path: 'grid', component: DuAnGridComponent }]
        },
        {
            path: 'chi-tiet-du-an/:id', component: DuAnChiTietComponent
        },
        { path: 'huong-dan', component: HuongDanComponent },
        { path: 'tin-tuc', component: TinTucComponent },
        { path: 'tin-tuc-chi-tiet/:id', component: TinTucChiTietComponent },
        {
            path: 'san-giao-dich', component: SanGiaoDichComponent,
            children: [
                { path: '', component: SanGiaoDichListComponent },
                { path: 'grid', component: SanGiaoDichGridComponent }]
        },
        { path: 'san-giao-dich-chi-tiet/:id', component: SanGiaoDichChiTietComponent },
        { path: 'thu-vien-anh', component: ThuVienAnhPageComponent },
        { path: 'lien-he', component: LienHeComponent },
        { path: 'dang-nhap', component: DangNhapComponent },
        { path: 'dang-ky', component: DangKyComponent },
        { path: 'gio-hang', component: GioHangComponent },
        { path: 'quen-mat-khau', component: LayLaiMatKhauComponent },
        { path: 'tim-kiem', component: KetQuaTimKiemComponent }

        ]
    },
    //routing admin
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: '', component: XoaDuAnComponent },
            { path: 'them-duan', component: ThemDuAnComponent },
            { path: 'xoa-duan', component: XoaDuAnComponent },
            { path: 'update-duan/:id', component: UpdateDuAnComponent },
            { path: 'them-danhmuc', component: ThemDanhMucComponent },
            { path: 'xoa-danhmuc', component: XoaDanhMucComponent },
            { path: 'update-danhmuc/:id', component: UpdateDanhMucComponent },
            { path: 'them-doitac', component: ThemDoiTacComponent },
            { path: 'xoa-doitac', component: XoaDoiTacComponent },
            { path: 'update-doitac/:id', component: UpdateDoiTacComponent },
            { path: 'them-gioithieu', component: ThemGioiThieuComponent },
            { path: 'xoa-gioithieu', component: XoaGioiThieuComponent },
            { path: 'update-gioithieu/:id', component: UpdateGioiThieuComponent },
            { path: 'them-loaigiaodich', component: ThemLoaiGiaoDichComponent },
            { path: 'xoa-loaigiaodich', component: XoaLoaiGiaoDichComponent },
            { path: 'update-loaigiaodich/:id', component: UpdateLoaiGiaoDichComponent },
            { path: 'them-loaitintuc', component: ThemLoaiTinTucComponent },
            { path: 'xoa-loaitintuc', component: XoaLoaiTinTucComponent },
            { path: 'update-loaitintuc/:id', component: UpdateLoaiTinTucComponent },
            { path: 'them-menu', component: ThemMenuComponent },
            { path: 'xoa-menu', component: XoaMenuComponent },
            { path: 'them-taikhoan', component: ThemTaiKhoanComponent },
            { path: 'xoa-taikhoan', component: XoaTaiKhoanComponent },
            { path: 'them-tintuc', component: ThemTinTucComponent },
            { path: 'xoa-tintuc', component: XoaTinTucComponent },
            { path: 'make-up-data', component: MakeUpDataComponent }

        ],
        canActivate: [AdminAuthGuard]
    },
    {
        path: 'employee', component: AdminComponent,
        children: [
            { path: '', component: XoaDuAnComponent },
            { path: 'them-duan', component: ThemDuAnComponent },
            { path: 'them-danhmuc', component: ThemDanhMucComponent },
            { path: 'them-doitac', component: ThemDoiTacComponent },
            { path: 'them-gioithieu', component: ThemGioiThieuComponent },
            { path: 'them-loaigiaodich', component: ThemLoaiGiaoDichComponent },
            { path: 'them-loaitintuc', component: ThemLoaiTinTucComponent },
            { path: 'them-menu', component: ThemMenuComponent },
            { path: 'them-tintuc', component: ThemTinTucComponent }
        ],
        canActivate: [EmployeeAuthGuard],

    },
    {
        path: 'customer', component: AdminComponent,
        children: [
            { path: '', component: XoaDuAnComponent },
            { path: 'them-duan', component: ThemDuAnComponent },
            { path: 'xoa-duan', component: XoaDuAnComponent },
            { path: 'them-tintuc', component: ThemTinTucComponent },
            { path: 'xoa-tintuc', component: XoaTinTucComponent }
        ],
        canActivate: [CustomerAuthGuard]
    }
];

export const routing = RouterModule.forRoot(routes);
