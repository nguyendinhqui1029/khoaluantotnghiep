import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './pages/trang-chu/_trangchu.component';
import { GioiThieuComponent } from './pages/gioi-thieu/_gioithieu.component';
import { DuAnPageComponent } from './pages/du-an-component/_du-an.component';
import { DichVuComponent } from './pages/dich-vu/_dichvu.component';
import { TinTucComponent } from './pages/tin-tuc/_tintuc_component';
import { SanGiaoDichComponent } from './pages/san-giao-dich/_sangiaodich.component';
import { ThuVienAnhPageComponent } from './pages/thu-vien-anh-component/_thu-vien-anh.component';
import { LienHeComponent } from './pages/lien-he/_lienhe.component';
import { DangNhapComponent } from './pages/dang-nhap/_dang-nhap.component';
import { DangKyComponent } from './pages/dang-ky/_dang-ky.component';
import { GioHangComponent } from './pages/gio-hang/_giohang.component';

const routes: Routes = [
    { path: '', component: TrangChuComponent },
    { path: 'trang-chu', component: TrangChuComponent },
    { path: 'gioi-thieu', component: GioiThieuComponent },
    { path: 'du-an', component: DuAnPageComponent },
    { path: 'dich-vu', component: DichVuComponent },
    { path: 'tin-tuc', component: TinTucComponent },
    { path: 'san-giao-dich', component: SanGiaoDichComponent },
    { path: 'thu-vien-anh', component: ThuVienAnhPageComponent },
    { path: 'lien-he', component: LienHeComponent },
    { path: 'dang-nhap', component: DangNhapComponent },
    { path: 'dang-ky', component: DangKyComponent },
    { path: 'gio-hang', component: GioHangComponent },

];

export const routing = RouterModule.forRoot(routes);
