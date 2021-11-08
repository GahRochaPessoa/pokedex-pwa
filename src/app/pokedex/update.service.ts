import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SwUpdate } from "@angular/service-worker";

@Injectable({
    providedIn: 'root'
})

export class UpdateService {
    constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
        if (!swUpdate.isEnabled) {
            console.log("Service Worker isn't enabled");
        }
        this.checkForUpdate();
    }

    public checkForUpdate(): void {
        this.swUpdate.versionUpdates.subscribe(() => this.promptUser())
    }

    promptUser(): void {
        const snackbar = this.snackbar.open("An update is Avaliable", "Reload", {
            duration: 5000
        });
        snackbar.onAction().subscribe(() => {
            this.swUpdate.activateUpdate()
                .then(() => window.location.reload());
        })
    }
}