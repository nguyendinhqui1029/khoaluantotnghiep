import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../service/config.service';
@Injectable()
export class EmployeeAuthGuard implements CanActivate {
    constructor(private route: Router) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let role = false;
        if (sessionStorage.getItem("role") && Number(sessionStorage.getItem("role")) === ConfigService.LOAI_TAI_KHOAN.EMPLOYEE) {
            role = true;
        } else {
            role = false;
            this.route.navigate(["dang-nhap"]);
        }
        return role;
    }
}