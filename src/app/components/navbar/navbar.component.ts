import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  HostListener,
} from "@angular/core";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { TranslateService } from "@ngx-translate/core";
import { DashboardService } from "src/app/services/dashboard.service";

var misc: any = {
  sidebar_mini_active: true,
};
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private listTitles: any[];
  location: Location;

  user: any;
  userMenu: boolean = false;

  private toggleButton: any;
  public isCollapsed = true;

  darkMode: boolean = true;

  langES: boolean;
  langEN: boolean;
  langPT: boolean;

  isLogged: boolean;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    public toastr: ToastrService,
    private loginService: LoginService,
    private translate: TranslateService,
    private dashboardService: DashboardService
  ) {
    this.location = location;
    translate.setDefaultLang("es");
    translate.use("es");
    this.loginService.loginState$.subscribe((res) => {
      this.isLogged = res;
      if (this.isLogged == true) {
        this.user = this.loginService.getNames();
        if (this.user.length != 0) {
          this.user.push(this.user[1].charAt(0) + this.user[2].charAt(0));
        }
      }
    });
  }

  @HostListener("document:click", ["$event"]) onDocumentClick(event) {
    this.userMenu = false;
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    if (lang == "es") {
      this.langEN = false;
      this.langES = true;
      this.langPT = false;
    }
    if (lang == "en") {
      this.langEN = true;
      this.langES = false;
      this.langPT = false;
    }
    if (lang == "pt") {
      this.langEN = false;
      this.langES = false;
      this.langPT = true;
    }
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    var navbar = document.getElementsByClassName("navbar")[0];
    if (window.innerWidth < 993 && !this.isCollapsed) {
      navbar.classList.add("bg-white");
      navbar.classList.remove("navbar-transparent");
    } else {
      navbar.classList.remove("bg-white");
      navbar.classList.add("navbar-transparent");
    }
  };

  minimizeSidebar() {
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("sidebar-mini")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("sidebar-mini");
      misc.sidebar_mini_active = false;
      this.dashboardService.changeMiniSide(false)
      } else {
      body.classList.add("sidebar-mini");
      misc.sidebar_mini_active = true;
      this.dashboardService.changeMiniSide(true)
    }

    // we simulate the window Resize so the charts will get updated in realtime.
    const simulateWindowResize = setInterval(function () {
      window.dispatchEvent(new Event("resize"));
    }, 180);

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(function () {
      clearInterval(simulateWindowResize);
    }, 1000);
  }
  showSidebarMessage(message) {
    this.toastr.show(
      '<span data-notify="icon" class="tim-icons icon-bell-55"></span>',
      message,
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: "toast-top-right",
      }
    );
  }
  ngOnInit() {
    window.addEventListener("resize", this.updateColor);
    if(localStorage.getItem("colormode")){
      if(localStorage.getItem("colormode")=="white"){
        this.changeDashboardColor('white-content')
      }
      if(localStorage.getItem("colormode")=="black"){
        this.changeDashboardColor('black-content')
      }

    }
    //this.listTitles = ROUTES.filter((listTitle) => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
    });
  }
  ngOnDestroy() {
    window.removeEventListener("resize", this.updateColor);
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    // for (var item = 0; item < this.listTitles.length; item++) {
    //   if (this.listTitles[item].path === titlee) {
    //     return this.listTitles[item].title;
    //   }
    // }
    // return 'Dashboard';
  }
  sidebarOpen() {
    if(this.isLogged == true){
      const toggleButton = this.toggleButton;
      const body = <HTMLElement>document.getElementsByTagName("body")[0];
      const html = document.getElementsByTagName("html")[0];
      if (window.innerWidth < 991) {
        //body.style.position = 'fixed';
      }
  
      setTimeout(function () {
        toggleButton.classList.add("toggled");
      }, 500);
  
      html.classList.add("nav-open");
      var $layer = document.createElement("div");
      $layer.setAttribute("id", "bodyClick");
  
      if (html.getElementsByTagName("body")) {
        document.getElementsByTagName("body")[0].appendChild($layer);
      }
      var $toggle = document.getElementsByClassName("navbar-toggler")[0];
      $layer.onclick = function () {
        //asign a function
        html.classList.remove("nav-open");
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove("toggled");
        }, 400);
        const mainPanel = <HTMLElement>(
          document.getElementsByClassName("main-panel")[0]
        );
  
        if (window.innerWidth < 991) {
          setTimeout(function () {
            mainPanel.style.position = "";
          }, 500);
        }
      }.bind(this);
  
      html.classList.add("nav-open");
      }else{
        return
      }
 
  }
  collapse(){
    if(this.isLogged == true){
    this.isCollapsed = !this.isCollapsed
    }else{
      return
    }
  }
  sidebarClose() {
    if(this.isLogged == true){
    const html = document.getElementsByTagName("html")[0];
    this.toggleButton.classList.remove("toggled");
    const body = <HTMLElement>document.getElementsByTagName("body")[0];

    if (window.innerWidth < 991) {
      setTimeout(function () {
        body.style.position = "";
      }, 500);
    }
    var $layer: any = document.getElementById("bodyClick");
    if ($layer) {
      $layer.remove();
    }
    html.classList.remove("nav-open");
    }else{
      return
    }
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigateByUrl("/login");
  }

  changeDashboardColor(color) {
    var body = document.getElementsByTagName("body")[0];
    if (body && color === "white-content") {
      this.darkMode = false;
      body.classList.add(color);
      if (localStorage.getItem("colormode")){
        if(localStorage.getItem("colormode") == 'black'){
          localStorage.removeItem("colormode")
          localStorage.setItem("colormode", "white")
        }
      }else{
        localStorage.setItem("colormode", "white")
      }
    } else if (body.classList.contains("white-content")) {
      body.classList.remove("white-content");
      this.darkMode = true;
      if (localStorage.getItem("colormode")){
        if(localStorage.getItem("colormode") == 'white'){
          localStorage.removeItem("colormode")
          localStorage.setItem("colormode", "black")
        }
      }else{
        localStorage.setItem("colormode", "black")
      }
    }
  }
}
