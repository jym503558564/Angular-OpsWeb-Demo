import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarleft',
  templateUrl: './navbarleft.component.html',
  styleUrls: ['./navbarleft.component.css']
})
export class NavbarleftComponent implements OnInit {
  public navbar_list:any[] = [
    { id: "index",
      name: "仪表盘",
      link: "",
      open: false,
      left_icon:"dashboard",
      second_level:[
      ]
    },
    { id: "users",
      name: "用户管理",
      // link: "/users",
      open: false,
      left_icon:"group",
      second_level:[
        {id: "user", name: "用户列表", link:"/users/user"},
        {id: "user-group", name: "用户组", link:"/users/user-group"}
        ]
    },
    { id: "assets",
      name: "资产管理",
      // link: "/assets",
      open: false,
      left_icon:"computer",
      second_level:[
        {id: "asset", name: "资产列表", link:"/assets/asset/"},
        {id: "domain", name: "网域列表", link:"/assets/domain/"},
        {id: "admin-user", name: "管理用户", link:"/assets/admin-user/"},
        {id: "system-user", name: "系统用户", link:"/assets/system-user/"},
        {id: "label", name: "标签管理", link:"/assets/label/"},
        {id: "cmd-filter", name: "命令过滤", link:"/assets/cmd-filter/"},
        {id: "platform", name: "平台列表", link:"/assets/platform/"},
        ]
    },
    { id: "applications",
      name: "应用管理",
      // link: "/applications",
      open: false,
      left_icon: "view_comfy",
      second_level:[
        {id: "remote-app", name: "远程应用", link:"/applications/remote-app/"},
        {id: "database-app", name: "数据库应用", link:"/applications/database-app/"}
      ]
    },
    { id: "perms",
      name: "权限管理",
      // link: "/perms",
      open: false,
      left_icon: "edit",
      second_level:[
        {id: "asset-permission", name: "资产授权", link:"/perms/asset-permission/"},
        {id: "remote-app-permission", name: "远程应用", link:"/perms/remote-app-permission/"},
        {id: "database-app-permission", name: "数据库应用", link:"/perms/database-app-permission/"}
      ]
    },
    { id: "terminal",
      name: "会话管理",
      // link: "/sessions",
      open: false,
      left_icon: "cast_connected",
      second_level:[
        {id: "session-online", name: "在线会话", link:"/terminal/session-online/"},
        {id: "session-offline", name: "历史会话", link:"/terminal/session-offline/"},
        {id: "command", name: "命令记录", link:""},
        {id: "web-terminal", name: "web终端", link:"/terminal/command/"},
        {id: "file-manage", name: "文件管理", link:""},
        {id: "terminal", name: "终端管理", link:"/terminal/command/"},
      ]
    },
    { id: "ops",
      name: "作业中心",
      // link: "/ops",
      open: false,
      left_icon: "local_cafe",
      second_level:[
        {id: "task", name: "任务列表", link:"/ops/task/"},
        {id: "command-execution", name: "批量命令", link:"/ops/command-execution/create/"},
        {id: "database-app-permission", name: "任务监控", link:"/flower/"}
      ]
    },
    { id: "tickets",
      name: "工单管理",
      link: "/tickets",
      open: false,
      left_icon: "check",
      second_level:[
      ]
    },
    { id: "audits",
      name: "日志审计",
      // link: "/audits",
      open: false,
      left_icon: "access_time",
      second_level:[
        {id: "login-log", name: "登录日志", link:"/audits/login-log/"},
        {id: "ftp-log", name: "FTP日志", link:"/audits/ftp-log/"},
        {id: "operate-log", name: "操作日志", link:"/audits/operate-log/"},
        {id: "password-change-log", name: "改密日志", link:"//audits/password-change-log/"},
        {id: "command-execution-log", name: "批量命令", link:"/audits/command-execution-log/"},
      ]
    },
    { id: "settings",
      name: "系统设置",
      link: "/settings",
      open: false,
      left_icon: "settings_applications",
      second_level:[
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
    document.body.style.margin="0";
    document.body.style.color="#a7b1c2";
  }

  isOpenSecond(itemid){
    //打开或关闭二级菜单
    this.navbar_list.map(function (item) {
        if(item.id===itemid){
          item.open = !item.open
        }else{
          item.open = false
        }
        return item
    })
  }

}
