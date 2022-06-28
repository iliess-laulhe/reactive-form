import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

  public users:User[] = []

  public name = new FormControl('');
  public mail = new FormControl('');
  public password = new FormControl('');
  public street = new FormControl('');
  public postalCode = new FormControl('');
  public city = new FormControl('');
  constructor() { }
 

 Submit():void {
  const newUser = new User(this.name.value!, this.mail.value!, this.password.value!, this.street.value!, this.postalCode.value!,this.city.value!)
   this.users.push(newUser)
}

}
