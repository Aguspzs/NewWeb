import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Data } from "src/app/interfaces/login.interface";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginStatus: boolean = false;
  public loginForm: FormGroup;

  public focusTouched4;
  public focusTouched5;

  darkMode: boolean = true;

  constructor(
    public formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    if(localStorage.getItem("colormode")){
      if(localStorage.getItem("colormode")=="white"){
        this.darkMode = false;
      }
      if(localStorage.getItem("colormode")=="black"){
        this.darkMode = true;
      }

    }
  }

  onLogin() {
    if (this.loginForm.invalid) {
      if (
        this.loginForm.controls["password"].value === "" ||
        this.loginForm.controls["user"].value === ""
      ) {
        // this.alert.alertError(
        //   "Campos faltantes",
        //   "Se deben completar todos los campos requeridos."
        // );
      }

      return;
    } else {
      let user: Data = {
        userName: this.loginForm.get("user")?.value,
        password: this.loginForm.get("password")?.value,
        application: "Monitor",
      };
      this.loginService.login(user).subscribe(
        (data) => {
          if (data.ok) {
            if (data.data) {
              this.router.navigateByUrl("/dashboard");
            }
          } else {
            // this.alert.alertError(
            //   "Error",
            //   "Ingrese usuario y/o contraseña válidos"
            // );
          }
        },
        (err) => {
          if (err.status == 500) {
            // this.alert.alertError(
            //   "Error",
            //   "Ingrese usuario y/o contraseña válidos"
            // );
          } else {
            // this.alert.alertError(
            //   "Error de conexión",
            //   "Se produjo un error en la conexion con el servidor"
            // );
          }
        }
      );
    }
  }
}
