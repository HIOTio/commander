import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusComponent } from './view/status/status.component';
import { ControlComponent } from './control/control.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleLightComponent } from './toggle-light/toggle-light.component';
import { SettingsComponent } from './settings/settings.component';
import { CommandService } from './command.service';

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'control', component: ControlComponent },
    { path: 'status', component: StatusComponent },
    { path: 'settings', component: SettingsComponent }];

@NgModule({
    declarations: [
        AppComponent,
        StatusComponent,
        ControlComponent,
        DashboardComponent,
        ToggleLightComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(routes),
        CollapseModule.forRoot()
    ],
    providers: [CommandService],
    bootstrap: [AppComponent]
})
export class AppModule { }
