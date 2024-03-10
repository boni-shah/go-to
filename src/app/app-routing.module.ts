import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoToDetailsComponent } from './go-to-details/go-to-details.component';
import { AccessGuard } from './guards/access-guard.guard';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundErrorComponent } from './shared/404.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "list", component: ListComponent },
  { path: "my-links", component: ListComponent, canActivate: [AccessGuard] },
  { path: "favorites", component: ListComponent, canActivate: [AccessGuard] },
  { path: "search", component: ListComponent },
  {
    path: "goto", children: [
      { path: "add", component: GoToDetailsComponent, canActivate: [AccessGuard] },
      { path: "details/:id", component: GoToDetailsComponent },
      { path: '**', redirectTo: '/list' }
    ]
  },
  { path: "log-in", component: LogInComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AccessGuard] },
  { path: "404", component: PageNotFoundErrorComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
