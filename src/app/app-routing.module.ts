import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "home",
    component: DashboardComponent,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
