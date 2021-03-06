import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, RouterLink, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../service/config.service';
@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private route: Router) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let role = false;
        if (Number(sessionStorage.getItem("role")) === ConfigService.LOAI_TAI_KHOAN.ADMIN) {
            role = true;
        }
        else {
            role = false;
            this.route.navigate(["dang-nhap"]);
        }
        return role;
    }
}