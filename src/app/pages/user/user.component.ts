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
    Pastsportid: new FormControl(null, Validators.required),
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
  no:any
  
  // // ? Variable patient
  

  ngOnInit() {
    this.GetApi();
    
    this.Getfile();
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
      this.Age.setValue(age);
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
      pastsportid: this.Pastsportid.value,
      disease: this.Disease.value,
      drugAllergy: this.DrugAllergy.value,
      phonenumber: this.Phonenumber.value,
      annotation: this.Annotation.value,
      age: this.Age.value,
    };

    this.api.GetPatients().subscribe((response: any) => {
      
        this.all = response;
        console.log(response);

        if(this.all.length > 0){
    
          let lastNH = this.all.pop();
          
          
          let NH = lastNH.no

          const word = NH.split('-');
          
          const Numberword = Number(word[1]) 
         let NewNumber = Numberword + 1
          let NewNumberNH = "NH-" + NewNumber
      
          this.no = NewNumberNH
          
          
         
          

        }else{ 
          this.no = "NH-1"
          console.log(this.no);
          



        



      
      
      
        }
     
    });


  
  }

  Insert() {
    let data1 = {
      no: this.no,
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      gender: this.Gender.value,
      birthday: this.Birthday.value,
      address: this.Address.value,
      pastsportid: this.Pastsportid.value,
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

  Getfile() {
    fetch("../../../assets/SIAM-ID/Data.txt")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        const resultSplit: any = data.split("\r\n");
        const users = resultSplit.filter((person: any) => person != "");
        const lastUserScan: any = users[users.length - 1];
        const lastUserScanSplit = lastUserScan.split(",");
        console.log(lastUserScanSplit);
        this.User.patchValue({
          FirstName: lastUserScanSplit[0],
          LastName: lastUserScanSplit[1],
          Gender: lastUserScanSplit[2],
          Birthday: this.setFormatBirthDay(lastUserScanSplit[3]),
          Age: lastUserScanSplit[4].substring(0, 2),
          Address: lastUserScanSplit[5],
          Pastsportid: lastUserScanSplit[6],
        });
      });
  }

  setFormatBirthDay(bdDate: any) {
    const newDate: any = new Date(bdDate);

    const year = newDate.getFullYear();
    let mm: any = (newDate.getMonth() + 1).toString();
    let day: any = (newDate.getDate()).toString();
    if (day.length === 1) day = "0" + day;
    if (mm.length === 1) mm = "0" + mm;
    console.log(`${year}-${mm}-${day}`);
    
    return `${year}-${mm}-${day}`;
  }

  Update() {
    let data1 = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      gender: this.Gender.value,
      birthday: this.Birthday.value,
      address: this.Address.value,
      pastsportid: this.Pastsportid.value,
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
  get Age() {
    return this.User.get("Age");
  }
  get FirstName() {
    return this.User.get("FirstName");
  }
  get LastName() {
    return this.User.get("LastName");
  }
  get Gender() {
    return this.User.get("Gender");
  }
  get Phonenumber() {
    return this.User.get("Phonenumber");
  }
  get Pastsportid() {
    return this.User.get("Pastsportid");
  }
  get Address() {
    return this.User.get("Address");
  }
  get Birthday() {
    return this.User.get("Birthday");
  }
  get Disease() {
    return this.User.get("Disease");
  }
  get DrugAllergy() {
    return this.User.get("DrugAllergy");
  }
  get Annotation() {
    return this.User.get("Annotation");
  }
}
