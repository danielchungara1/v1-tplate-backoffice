import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {
  }

  public showSuccess(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000,

    });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Error', {duration: 5000});
  }
}
