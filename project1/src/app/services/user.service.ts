import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User = {
    id: "1",
    username: "kanishka",
    fname: "Kanishka",
    lname: "Wijesekara",
    position: "Software Engineer",
    description: "Lorem Ipsum dollar sit amet sjans dfj sdnn ksiweu bcn",
    contacts: ["0768036385"],
    address: {
      no: "35 A/1",
      street: "First Lane",
      city: "Boralesgamuwa"
    },
    email: "123kanishka@gmail.com"
  };

  constructor() {}

  getUser(id: string): User {
    return this.user;
  }

  updateUser(user: User): User {
    this.user = user;
    return user;
  }
}
