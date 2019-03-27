import { Component, OnInit } from "@angular/core";
import { User } from "../models/User";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;
  isPersonalDetailsEditable = true;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser("1");
  }

  personalDetailsEditBtnClick(event) {
    this.isPersonalDetailsEditable = false;
  }
}
