import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:5000/api/orders'; // Убедитесь, что URL совпадает с вашим бэкендом

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
