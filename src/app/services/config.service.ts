import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  //token: any;
  private TOKEN_KEY = 'myToken';

  isSidebarVisible = true;

  serviceDateDaily: any;
  serviceDateMonthly: any;
  serviceDateAnnual: any;

  constructor(private http: HttpClient) {}

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  postRequest(url:any,data: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.getToken()}`
    );
    return this.http.post<any>(url, data , {headers});
  }

  getRequest(url:any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.getToken()}`
    );
    return this.http.get(url, { headers });
  }
}
