import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login = false;
  public userForm : FormGroup;
  constructor( private form: FormBuilder, private serivce : Service){
    this.userForm = form.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })
  }


onSubmit(data){
  console.log(data.value);
  this.serivce.setup(data.value).subscribe(resData => console.log(resData));
}

loginfun(){
  this.login = !this.login;
}

onlogin(data){
  this.serivce.login(data.value).subscribe(resData => {
    console.log(resData);
    if(resData.success == false){
      alert("User Does not Exist");
    }
    else{
      alert("Successfully Logged In");
    }


  });
}

}
