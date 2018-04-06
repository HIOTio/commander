import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusComponent } from './status/status.component';
import { ControlComponent } from './control/control.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleLightComponent } from './toggle-light/toggle-light.component';
import { SettingsComponent } from './settings/settings.component';
import { CommandService } from './command.service';
import { SettingsService } from './settings.service';
import { OnOffSwitchComponent } from './controls/on-off-switch/on-off-switch.component';

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
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
        SettingsComponent,
        OnOffSwitchComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(routes),
        CollapseModule.forRoot()
    ],
    providers: [CommandService, SettingsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
