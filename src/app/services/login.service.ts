import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { LoginResponse, User } from "../interfaces/login.interface";
import { environment } from "src/environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
const jwt = new JwtHelperService();
@Injectable({
  providedIn: "root",
})
export class LoginService {
  token = "";
  private decodedToken;
  user: User;
  private loginState = new BehaviorSubject<boolean>(false)
  public loginState$ = this.loginState.asObservable();


  constructor(private http: HttpClient) {
    this.getToken()
  }

  login(user: User): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.BASE_URL}/api/v1/auth/login`, user)
      .pipe(
        map((res) => {
          this.saveToken(res.data);
          this.loginState.next(true);
          return res;
        })
      );
  }

  tokenExpired() {
    let tokenTimeMax = parseInt(this.token.split("-")[1]) + 3600000;
    let date = new Date();
    if (date.getTime() > tokenTimeMax) {
      this.logOut();
    }
  }

  logOut() {
    this.loginState.next(false);
    if (localStorage.getItem("tokenDB")) {
      localStorage.removeItem("tokenDB");
      this.token = "";
    }
    if (localStorage.getItem("username")) {
      localStorage.removeItem("username");
    }
    if (localStorage.getItem("name")) {
      localStorage.removeItem("name");
    }
    if (localStorage.getItem("lastName")) {
      localStorage.removeItem("lastName");
    }
  }
  
  getNames() {
    if (localStorage.getItem("username") && localStorage.getItem("name")) {
      return [localStorage.getItem("username"), localStorage.getItem("name"), localStorage.getItem("lastName") ]
    }else{
      return []
    }
  }

  getToken():any {
    if (localStorage.getItem("tokenDB")) {
      this.loginState.next(true);
      this.token = localStorage.getItem("tokenDB");
      return true
    } else {
      this.loginState.next(false);
      this.token = "";
      return false
    }
  }

  private saveToken(token: string) {
    this.decodedToken = jwt.decodeToken(token)
    this.token = token;
    localStorage.setItem("tokenDB", token);
    localStorage.setItem("username",  this.decodedToken.user.userName );
    localStorage.setItem("name", this.decodedToken.user.firstName );
    localStorage.setItem("lastName", this.decodedToken.user.lastName);
   
  }

}
