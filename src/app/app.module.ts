import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { environment } from "src/environments/environment";

//Own Components
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { SideBarComponent } from "./components/sideBar/side-bar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

import { TablesSkeletonComponent } from "./components/skeletons/tables/tables-skeleton.component";
import { DetailSkeletonComponent } from "./components/skeletons/machineDetail/detail-skeleton.component";
import { PieChartComponent } from "./components/skeletons/pieChart/pieChart.component";
import { LineChartComponent } from "./components/skeletons/lineChart/lineChart.component";
import { TableChartComponent } from "./components/skeletons/tableChart/tableChart.component";

//Pipes
import { ImagePipe } from "./pipes/no-image.pipe";
import { ToastrModule } from "ngx-toastr";

//Extern Modules

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SideBarComponent,
    NavbarComponent,
    FooterComponent,
    ImagePipe,
    TablesSkeletonComponent,
    DetailSkeletonComponent,
    PieChartComponent,
    LineChartComponent,
    TableChartComponent,
  ],
  imports: [AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,RouterModule,
    CommonModule, ToastrModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
