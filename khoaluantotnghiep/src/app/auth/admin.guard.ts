import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../service/config.service';
@Injectable()
export class AdminAuthGuard implements CanActivate {
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let role = false;
        if (sessionStorage.getItem("role") && Number(sessionStorage.getItem("role")) === ConfigService.LOAI_TAI_KHOAN.ADMIN) {
            role = true;
        }
        return role;
    }
}