import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './pages/trang-chu/_trangchu.component';
import { GioiThieuComponent } from './pages/gioi-thieu/_gioithieu.component';
import { DuAnPageComponent } from './pages/du-an/_du-an.component';
import { DichVuComponent } from './pages/dich-vu/_dichvu.component';
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
import { AdminComponent } from './admin/admin.component';
import { QuanLyDuAnComponent } from './admin/module-admin/pages/quan-ly-du-an/_quanly-duan.component';

const routes: Routes = [
    {
        path: '', component: TrangChuComponent,
        children: [
            { path: '', component: DuAnListComponent },
            { path: 'grid', component: DuAnGridComponent }]
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
    //{ path: 'gioi-thieu/:id', component: NoiDungGioiThieuComponent },

    {
        path: 'du-an', component: DuAnPageComponent,
        children: [
            { path: '', component: DuAnListComponent },
            { path: 'grid', component: DuAnGridComponent }]
    },
    {
        //doi lai component chi tiet du an
        path: 'chi-tiet-du-an/:id', component: DuAnChiTietComponent
    },
    { path: 'dich-vu', component: DichVuComponent },
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
    { path: 'tim-kiem', component: KetQuaTimKiemComponent },
    // Phần router admin
    {
        path: 'admin', component: AdminComponent
    },
    { path: 'admin/quanlyduan', component: QuanLyDuAnComponent },

];

export const routing = RouterModule.forRoot(routes);
