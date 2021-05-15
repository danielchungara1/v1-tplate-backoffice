import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng//api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) {
  }

  public showSuccess(message: string): void {
    this.clear();
    this.messageService.add({severity: 'success', summary: message, detail: ''});
  }

  public showError(message: string): void {
    this.clear();
    this.messageService.add({severity: 'error', summary: message, detail: ''});
  }

  public clear(): void{
    this.messageService.clear();
  }

}
