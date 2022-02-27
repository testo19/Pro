import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ApiService } from "../../api.service";

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit {
  constructor(private api: ApiService) {}

  User = new FormGroup({
    FirstName: new FormControl(null, Validators.required),
    LastName: new FormControl(null, Validators.required),
    Gender: new FormControl(null, Validators.required),
    Phonenumber: new FormControl(null, Validators.required),
    Address: new FormControl(null, Validators.required),
    Birthday: new FormControl(null, Validators.required),
    Disease: new FormControl(null, Validators.required),
    DrugAllergy: new FormControl(null, Validators.required),
    Age: new FormControl(null),
    Annotation: new FormControl(null),
  });

  

  // ? Variable API
  all: any;

  // ? Variable html
  Name: any;
  Category: any;
  Price: any;
  id: any;
  // // ? Variable patient
  // firstname: any;
  // lastname: any;
  // gender: any;
  // birthday: any;
  // address: any;
  // disease: any;
  // drugAllergy: any;
  // phonenumber: any;
  // annotation: any;

  // // ! Form Control
  // FormUser = new FormGroup({
  //     FirstName: new FormControl(null,Validators.required),
  //     LastName: new FormControl(null,Validators.required),
  // })

  ngOnInit() {
    this.GetApi();
    this.test();
  }

  test() {
    this.api.GetPatients().subscribe((data: any) => {
      console.log(data);
    });
  }

  // ?Age
  Agedateday() {
    let bd0 = [],
      age;
    if (this.Birthday.value) {
      // * get datenow
      let datenow = new Date(); 

      // * get yearNow
      let yearNow = datenow.getFullYear();
      let yearNowNum = Number(yearNow);

      let birthday = this.Birthday.value;
      let birthdayToString = birthday.toString();
      let birthdayToString2 = birthdayToString.substring(0, 4);
      let birthdayNow = Number(birthdayToString2);
      age = yearNowNum - birthdayNow;

      console.log(age);
      this.Age.setValue(age)
    }
  }

  // ? Api

  GetApi() {
    let data1 = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      gender: this.Gender.value,
      birthday: this.Birthday.value, ///ตัวแปร this.
      address: this.Address.value,
      disease: this.Disease.value,
      drugAllergy: this.DrugAllergy.value,
      phonenumber: this.Phonenumber.value,
      annotation: this.Annotation.value,
      age: this.Age.value,
    };

    this.api.GetPatients().subscribe((response: any) => {
      if (response.length > 0) {
        this.all = response;
        console.log(response);
      }
    });
  }

  Insert() {
    let data1 = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      gender: this.Gender.value,
      birthday: this.Birthday.value,
      address: this.Address.value,
      disease: this.Disease.value,
      drugAllergy: this.DrugAllergy.value,
      phonenumber: this.Phonenumber.value,
      annotation: this.Annotation.value,
      age: this.Age.value,
    };
    this.api.InsertData(data1).subscribe((response: any) => {
      if (response == null) {
        alert("Insert Success");
        location.reload();
      }
    });
  }

  Update() {
    let data1 = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      gender: this.Gender.value,
      birthday: this.Birthday.value,
      address: this.Address.value,
      disease: this.Disease.value,
      drugAllergy: this.DrugAllergy.value,
      phonenumber: this.Phonenumber.value,
      annotation: this.Annotation.value,
      age: this.Age.value,
    };
    console.log(data1);

    this.api.UpdateData(this.id, data1).subscribe((response: any) => {
      if (response != null) {
        alert("Update Success");
        this.GetApi();
      }
    });
  }

  // * Event
  TestEdit(item: any) {
    console.log(item);
    this.Name = item.firstname;
    this.Category = item.category;
    this.Price = item.price;
    this.id = item._id;
  }

 


  ///? SetForm
  get Age(){ return this.User.get('Age')} 
  get FirstName(){ return this.User.get('FirstName')} 
  get LastName(){ return this.User.get('LastName')} 
  get Gender(){ return this.User.get('Gender')} 
  get Phonenumber(){ return this.User.get('Phonenumber')} 
  get Address(){ return this.User.get('Address')} 
  get Birthday(){ return this.User.get('Birthday')} 
  get Disease(){ return this.User.get('Disease')} 
  get DrugAllergy(){ return this.User.get('DrugAllergy')} 
  get Annotation(){ return this.User.get('Annotation')} 
  


 

}


