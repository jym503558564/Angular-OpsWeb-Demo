import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { AssetsComponent } from './components/assets/assets.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { PermsComponent } from './components/perms/perms.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { OpsComponent } from './components/ops/ops.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SettingsComponent } from './components/settings/settings.component';
import { XpackComponent } from './components/xpack/xpack.component';
import { AuditsComponent } from './components/audits/audits.component';
import { BashboardComponent } from './components/bashboard/bashboard.component';

//用户管理的子级
import { UserComponent } from './components/users/user/user.component';
import { UserGroupComponent } from './components/users/user-group/user-group.component';

//资产管理的子级
import { AssetComponent } from './components/assets/asset/asset.component';
import { DomainComponent } from './components/assets/domain/domain.component';
import { AdminuserComponent } from './components/assets/adminuser/adminuser.component';
import { SystemuserComponent } from './components/assets/systemuser/systemuser.component';
import { LabelComponent } from './components/assets/label/label.component';
import { CmdfilterComponent } from './components/assets/cmdfilter/cmdfilter.component';
import { PlatformComponent } from './components/assets/platform/platform.component';

//应用管理的子级
import { RemoteappComponent } from './components/applications/remoteapp/remoteapp.component';
import { DatabaseappComponent } from './components/applications/databaseapp/databaseapp.component';

//权限管理的子级
import { AssetpermissionComponent } from './components/perms/assetpermission/assetpermission.component';
import { RemoteapppermissionComponent } from './components/perms/remoteapppermission/remoteapppermission.component';
import { DatabaseapppermissionComponent } from './components/perms/databaseapppermission/databaseapppermission.component';

// 会话管理的子级
import { SessiononlineComponent } from './components/terminal/sessiononline/sessiononline.component';
import { SessionofflineComponent } from './components/terminal/sessionoffline/sessionoffline.component';
import { CommandComponent } from './components/terminal/command/command.component';

//作业中心的子级
import { TaskComponent } from './components/ops/task/task.component';
import { CommandexecutionComponent } from './components/ops/commandexecution/commandexecution.component';

//日志审计的子级
import { LoginlogComponent } from './components/audits/loginlog/loginlog.component';
import { FtplogComponent } from './components/audits/ftplog/ftplog.component';
import { OperatelogComponent } from './components/audits/operatelog/operatelog.component';
import { PasswordchangelogComponent } from './components/audits/passwordchangelog/passwordchangelog.component';
import { CommandexecutionlogComponent } from './components/audits/commandexecutionlog/commandexecutionlog.component';


const routes: Routes = [
  {path: "", component: BashboardComponent},
  {path: "users", component: UsersComponent, children: [
      {path: "user", component: UserComponent},
      {path: "user-group", component: UserGroupComponent},
  ]},
  {path: "assets", component: AssetsComponent,children: [
      {path: "asset", component: AssetComponent},
      {path: "domain", component: DomainComponent},
      {path: "admin-user", component: AdminuserComponent},
      {path: "system-user", component: SystemuserComponent},
      {path: "label", component: LabelComponent},
      {path: "cmd-filter", component: CmdfilterComponent},
      {path: "platform", component: PlatformComponent},
  ]},
  {path: "applications", component: ApplicationsComponent, children: [
      {path: "remote-app", component: RemoteappComponent},
      {path: "database-app", component: DatabaseappComponent},
   ]},
  {path: "perms", component: PermsComponent, children: [
      {path: "asset-permission", component: AssetpermissionComponent},
      {path: "remote-app-permissio", component: RemoteapppermissionComponent},
      {path: "database-app-permission", component: DatabaseapppermissionComponent},
  ]},
  {path: "sessions", component: TerminalComponent, children: [
      {path: "session-online", component: SessiononlineComponent},
      {path: "session-offline", component: SessionofflineComponent},
      {path: "command", component: CommandComponent},
      // {path: "web终断", },
      // {path: "文件管理", },
      // {path: "terminal", },
  ]},
  {path: "ops", component: OpsComponent, children: [
      {path: "task", component: TaskComponent},
      {path: "command-execution", component: CommandexecutionComponent},
  ]},
  {path: "tickets", component: TicketsComponent, children: [
      {path: "asset", component: UserComponent},
      {path: "domain", component: UserGroupComponent},
      // {path: "监控", },
  ]},
  {path: "audits", component: AuditsComponent, children: [
      {path: "login-log", component: LoginlogComponent},
      {path: "ftp-log", component: FtplogComponent},
      {path: "operate-log", component: OperatelogComponent},
      {path: "password-change-log", component: PasswordchangelogComponent},
      {path: "command-execution-log", component: CommandexecutionlogComponent},
  ]},
  {path: "settings", component: SettingsComponent, children: [
      {path: "asset", component: UserComponent},
      {path: "domain", component: UserGroupComponent},
  ]},
  {path: "xpack", component: XpackComponent, children: [
      {path: "asset", component: UserComponent},
      {path: "domain", component: UserGroupComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
