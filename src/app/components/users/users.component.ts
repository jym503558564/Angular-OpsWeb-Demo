import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userList:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // let searchUrl = "http://a.itying.com/api/productlist";
    // this.http.jsonp<any>(searchUrl, "callback").subscribe(
    //   (data) => {
    //     console.log(data);
    //     return this.userList = data.result
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )

  }
}
