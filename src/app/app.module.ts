//Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
//App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { GoToDetailsComponent } from './go-to-details/go-to-details.component';
import { ProfileComponent } from './profile/profile.component';
import { GoToDetailPanelComponent } from './go-to-detail-panel/go-to-detail-panel.component';
import { FeaturedPanelsComponent } from './featured-panels/featured-panels.component';
import { ListSnapshotComponent } from './list-snapshot/list-snapshot.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormatMinutesPipe } from './pipes/format-minutes.pipe';
import { FormatHoursPipe } from './pipes/format-hours.pipe';
//State
import { StoreModule } from '@ngrx/store';
import { SidenavReducer } from './state/side-nav.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListComponent,
    HomeComponent,
    LogInComponent,
    GoToDetailsComponent,
    ProfileComponent,
    GoToDetailPanelComponent,
    FeaturedPanelsComponent,
    ListSnapshotComponent,
    SideNavComponent,
    FormatMinutesPipe,
    FormatHoursPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ sidenav: SidenavReducer }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
