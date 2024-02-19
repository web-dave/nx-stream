import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getAll() {
    return this.http.get('/api');
  }
}
