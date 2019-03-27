export class User {
  id: string;
  username: string;
  fname: string;
  lname: string;
  position: string;
  description: string;
  contacts: [string];
  address: {
    no: string;
    street: string;
    city: string;
  };
  email: string;
}
