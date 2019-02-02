import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'form-dang-nhap',
    templateUrl: './_form-dang-nhap.component.html',
    styleUrls: ['./_form-dang-nhap.component.scss']
})
export class FormDangNhapComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void { }
    //xử lí đăng nhập
    dangnhap() {
        this.router.navigate(['/admin']);
    }
}
