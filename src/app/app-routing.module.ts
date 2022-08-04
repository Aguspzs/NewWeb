import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { TerminalDetailComponent } from "./pages/terminalDetail/terminal-detail.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CounterComponent } from "./pages/counter/counter.component";
import { ConfigurationComponent } from "./pages/configuration/configuration.component";
import { ValidateTokenGuard } from "./guards/validate-token.guard";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    pathMatch: "full",
    canActivate: [ValidateTokenGuard],
  },
  {
    path: "detail/:id",
    component: TerminalDetailComponent,
    canActivate: [ValidateTokenGuard],
  },
  {
    path: "meters",
    component: CounterComponent,
    pathMatch: "full",
    canActivate: [ValidateTokenGuard],
  },
  {
    path: "configuration",
    component: ConfigurationComponent,
    pathMatch: "full",
    canActivate: [ValidateTokenGuard],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
