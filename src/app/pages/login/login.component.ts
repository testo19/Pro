import { Component, OnInit } from "@angular/core";
import { ApiService } from "app/api.service";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private api: ApiService) {}

  Members:any;
  MemberUsername = new FormGroup({
    Username: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required),
  });


  ngOnInit(): void {
    this.Getapi();
  }

  Login() {
    
const found = this.Members.find(element => {
  if(element.username==this.Username.value&&element.password==this.Password.value){
    return element
    
  }
  console.log(element.username);
  console.log(element.password);
  

})
if(found==undefined){
  alert("ไม่พบผู้ใช้");
}else{
  alert("Login สำเร็จ");
  console.log(found);
    sessionStorage.setItem("Login", "true");
    location.href = "/#/dashboard";

}
sessionStorage.setItem('NameLogin', found.username);


  }


  Getapi(){
    this.api.GetMembersData().subscribe((response: any) => {
      console.log(response);
      this.Members = response;
    });
 
  }
    //? Set Membername
   
    get Username() {
      return this.MemberUsername.get("Username");
    }
    get Password() {
      return this.MemberUsername.get("Password");
    }

}


