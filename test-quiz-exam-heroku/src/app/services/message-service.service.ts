import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MessageServiceComponent } from '../components/common/message-service/message-service.component';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  message: string = "";

  constructor(
    private snackbar: MatSnackBar
  ) { }

  showAppMessage(message: string, type: string) {
    this.message = message;
    const style = type === 'success' ? 'success-message' : 'error-message';
    this.snackbar.openFromComponent(MessageServiceComponent, {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [style]
    });
  }
}
