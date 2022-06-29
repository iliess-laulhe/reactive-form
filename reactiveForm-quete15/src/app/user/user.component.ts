import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

  public users:User[] = []

  userForm: FormGroup = this.fb.group({
  credentials : this.fb.group({
    name: [''],
    mail: [''],
    password: [''],
    street: [''],
    postalCode: [''],
    city: [''],
  })
});
  constructor(private fb: FormBuilder) {}

  
 

 onSubmit():void {
  const newUser = new User(this.userForm.value!.credentials.name, this.userForm.value!.credentials.mail, this.userForm.value!.credentials.password, this.userForm.value!.credentials.street, this.userForm.value!.credentials.postalCode,this.userForm.value!.credentials.city)
   this.users.push(newUser)
   console.log(newUser)
}

}
