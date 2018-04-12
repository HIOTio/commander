import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CollapseModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StatusComponent} from './status/status.component';
import {ControlComponent} from './control/control.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ToggleComponent} from './controls/toggle/toggle.component';
import {SettingsComponent} from './settings/settings.component';
import { GaugeModule } from 'angular-gauge';
import {CommandService} from './command.service';
import {SettingsService} from './settings.service';
import {OnOffSwitchComponent} from './controls/on-off-switch/on-off-switch.component';
import { GroupComponent } from './control/group/group.component';
import { CommandComponent } from './control/command/command.component';
import { StatusService } from './status.service';
import { GaugeComponent } from './statuses/gauge/gauge.component';
import { ChartComponent } from './statuses/chart/chart.component';

const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'control', component: ControlComponent},
  {path: 'status', component: StatusComponent},
  {path: 'settings', component: SettingsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ControlComponent,
    DashboardComponent,
    ToggleComponent,
    SettingsComponent,
    OnOffSwitchComponent,
    GroupComponent,
    CommandComponent,
    GaugeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    GaugeModule.forRoot(),
    RouterModule.forRoot(routes),
    CollapseModule.forRoot()
  ],
  providers: [CommandService, SettingsService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule {}
