export class Users {
public id: number;
public name: string;
public email: string;
public phone: number;


constructor(id: number, name: string, email: string, phone: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}