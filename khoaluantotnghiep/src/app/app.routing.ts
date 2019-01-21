import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './pages/trang-chu/_trangchu.component';
import { GioiThieuComponent } from './pages/gioi-thieu/_gioithieu.component';

const routes: Routes = [
    { path: '', component: TrangChuComponent },
    { path: 'trang-chu', component: TrangChuComponent },
    { path: 'gioi-thieu', component: GioiThieuComponent },



];

export const routing = RouterModule.forRoot(routes);
