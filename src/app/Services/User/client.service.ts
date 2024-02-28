import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientInfoSubject = new BehaviorSubject<any>(null);
  clientInfo$ = this.clientInfoSubject.asObservable();

  setClientInfo(info: any) {
    this.clientInfoSubject.next(info);
  }
}
