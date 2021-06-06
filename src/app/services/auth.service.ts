import { Injectable } from '@angular/core';
import { User } from './../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userdata: any;
  authenticated = false;
  constructor(private httpClient: HttpClient) { }

  public signIn(userData: User): void {
    this.userdata = userData;
    localStorage.setItem('User', JSON.stringify(userData));
  }

  authenticate(credentials, router: Router) {

    this.httpClient.post<Observable<boolean>>('http://192.168.0.107:8080/login', {
      userName: credentials.id,
      password: credentials.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(credentials.id + ':' + credentials.password)
        );
        router.navigate(['/main']);
      } else {
        alert('Faut');
      }
    });

  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('User') !== null;
  }
  public logout(): void {
    localStorage.clear();
  }

  get getUser(): any {
    return this.userdata;
  }
}
