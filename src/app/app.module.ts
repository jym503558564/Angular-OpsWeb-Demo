import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule,JsonpModule } from '@angular/http';
import {HttpClientModule, HttpClientJsonpModule} from "@angular/common/http";

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AssetsComponent } from './components/assets/assets.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { PermsComponent } from './components/perms/perms.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SettingsComponent } from './components/settings/settings.component';
import { XpackComponent } from './components/xpack/xpack.component';
import { AuditsComponent } from './components/audits/audits.component';
import { BashboardComponent } from './components/bashboard/bashboard.component';
import { NavbarleftComponent } from './components/common/navbarleft/navbarleft.component';
import { OpsComponent } from './components/ops/ops.component';
import { NavbartopComponent } from './components/common/navbartop/navbartop.component';

import { UserComponent } from './components/users/user/user.component';
import { UserGroupComponent } from './components/users/user-group/user-group.component';

import { AssetComponent } from './components/assets/asset/asset.component';
import { DomainComponent } from './components/assets/domain/domain.component';
import { AdminuserComponent } from './components/assets/adminuser/adminuser.component';
import { SystemuserComponent } from './components/assets/systemuser/systemuser.component';
import { LabelComponent } from './components/assets/label/label.component';
import { CmdfilterComponent } from './components/assets/cmdfilter/cmdfilter.component';
import { PlatformComponent } from './components/assets/platform/platform.component';

import { RemoteappComponent } from './components/applications/remoteapp/remoteapp.component';
import { DatabaseappComponent } from './components/applications/databaseapp/databaseapp.component';

import { AssetpermissionComponent } from './components/perms/assetpermission/assetpermission.component';
import { RemoteapppermissionComponent } from './components/perms/remoteapppermission/remoteapppermission.component';
import { DatabaseapppermissionComponent } from './components/perms/databaseapppermission/databaseapppermission.component';

import { SessiononlineComponent } from './components/terminal/sessiononline/sessiononline.component';
import { SessionofflineComponent } from './components/terminal/sessionoffline/sessionoffline.component';
import { CommandComponent } from './components/terminal/command/command.component';

import { TaskComponent } from './components/ops/task/task.component';
import { CommandexecutionComponent } from './components/ops/commandexecution/commandexecution.component';

import { LoginlogComponent } from './components/audits/loginlog/loginlog.component';
import { FtplogComponent } from './components/audits/ftplog/ftplog.component';
import { OperatelogComponent } from './components/audits/operatelog/operatelog.component';
import { PasswordchangelogComponent } from './components/audits/passwordchangelog/passwordchangelog.component';
import { CommandexecutionlogComponent } from './components/audits/commandexecutionlog/commandexecutionlog.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AssetsComponent,
    ApplicationsComponent,
    PermsComponent,
    TerminalComponent,
    TicketsComponent,
    SettingsComponent,
    XpackComponent,
    AuditsComponent,
    BashboardComponent,
    NavbarleftComponent,
    OpsComponent,
    NavbartopComponent,
    UserComponent,
    UserGroupComponent,
    AssetComponent,
    DomainComponent,
    AdminuserComponent,
    SystemuserComponent,
    LabelComponent,
    CmdfilterComponent,
    PlatformComponent,
    RemoteappComponent,
    DatabaseappComponent,
    AssetpermissionComponent,
    RemoteapppermissionComponent,
    DatabaseapppermissionComponent,
    SessiononlineComponent,
    SessionofflineComponent,
    CommandComponent,
    TaskComponent,
    CommandexecutionComponent,
    LoginlogComponent,
    FtplogComponent,
    OperatelogComponent,
    PasswordchangelogComponent,
    CommandexecutionlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    HttpClientJsonpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
