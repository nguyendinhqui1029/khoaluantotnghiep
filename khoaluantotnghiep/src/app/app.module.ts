import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrangChuComponent } from './pages/trang-chu/_trangchu.component';
import { FooterComponent } from './module/footer/_footer.component';
import { HeaderComponent } from './module/header/_header.component';
import { SliderComponent } from './module/slider/_slider.component';
import { SearchComponent } from './module/search/_search.component';
import { routing } from './app.routing';
import { GioiThieuComponent } from './pages/gioi-thieu/_gioithieu.component';
import { PannerTopComponent } from './module/panner-top/_panner-top.component';
import { DoiTacComponent } from './module/doi-tac/_doitac.component';
import { DuAnMoiComponent } from './module/du-an-moi/_du-an-moi.component';
import { DuAnComponent } from './module/du-an/_duan.component';
import { ThuVienAnhComponent } from './module/thuc-vien-anh/_thuvienanh.component';


@NgModule({
  declarations: [
    AppComponent, TrangChuComponent, FooterComponent,
    HeaderComponent, SliderComponent, SearchComponent,
    GioiThieuComponent, PannerTopComponent, DoiTacComponent,
    DuAnMoiComponent, DuAnComponent, ThuVienAnhComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
