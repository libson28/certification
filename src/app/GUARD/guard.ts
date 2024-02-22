import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const AdminGuard = () => {
    const router = inject(Router);
    const auth = JSON.parse(localStorage.getItem("isAdmin") || "");

    if (!auth) {
        router.navigateByUrl('/');
        return false;
    }

    return true;
}

export const prestataireGuard = () => {
    const router = inject(Router);
    const auth = JSON.parse(localStorage.getItem("isPrestataire") || "");
    if (!auth) {
        router.navigateByUrl('/')
        return false;
    }

    return true;
}

export const clientGuard = () => {
    const router = inject(Router);
    const auth = JSON.parse(localStorage.getItem("isClient") || "");
    if (!auth) {
        router.navigateByUrl('/')
        return false;
    }

    return true;
}
