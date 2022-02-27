import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ApiService } from "../../api.service";
@Component({
  selector: "app-table2",
  templateUrl: "./table2.component.html",
  styleUrls: ["./table2.component.css"],
})
export class Table2Component implements OnInit {
  constructor(private api: ApiService, private modalService: NgbModal) {}

  Table = new FormGroup({
    FirstName: new FormControl(null, Validators.required),
    LastName: new FormControl(null, Validators.required),
  });

  User = new FormGroup({
    ID: new FormControl(null, Validators.required),
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

  inputFilter = new FormControl(null);

  // ? Variable API
  all: any;
  dataShow: any;

  ModalEditData: any;

  closeResult = "";
  ModalUser: any;

  ngOnInit(): void {
    this.GetApi();
    // this.Filter();
  }

  GetApi() {
    let data1 = {
      firstname: this.Table.value.FirstName,
      lastname: this.Table.value.LastName,
    };
    this.api.GetPatients().subscribe((response: any) => {
      if (response.length > 0) {
        this.all = response;
        this.dataShow = response;
        console.log(response);
      }
    });
  }

  Link1(item: any) {
    console.log("item", item);
    sessionStorage.setItem("FirstName", item.firstname);
    sessionStorage.setItem("LastName", item.lastname);
    sessionStorage.setItem("CaseId", item._id);
    // let a = sessionStorage.getItem('healId')
    location.href = "/#/icons";
  }
  Link2(item: any) {
    console.log("item", item);
    sessionStorage.setItem("FirstName", item.firstname);
    sessionStorage.setItem("LastName", item.lastname);
    sessionStorage.setItem("CaseId", item._id);
    location.href = "/#/upgrade";
  }

  open(content, item) {
    let bd0 = [],
      age;
    if (item.birthday) {
      let datenow = new Date();
      let y = datenow.getFullYear();
      let num = Number(y);
      let bd = item.birthday;
      let bd2 = bd.toString();
      let y2 = bd2.substring(0, 4);
      let y3 = Number(y2);
      age = num - y3;

      console.log(item.birthday);
      bd0 = item.birthday.split("T");
      console.log("bd0", bd0);
    }

    this.User.patchValue({
      ID: item._id || null,
      FirstName: item.firstname || null,
      LastName: item.lastname || null,
      Gender: item.gender || null,
      Phonenumber: item.phonenumber || null,
      Address: item.address || null,
      Birthday: bd0[0] || null,
      Disease: item.disease || null,
      DrugAllergy: item.drugAllergy || null,
      Age: age || null,
      Annotation: item.annotation || null,
    });
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  toggleEdit() {
    this.User.enable();
  }

  onSaveEdit() {
    const ans = confirm("Do you want to update?");
    if (ans == true) {
      console.log("USER", this.User.value);
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
      this.api.UpdateData(this.ID.value, data1).subscribe((response: any) => {
        if (response) {
          alert(" Success");
          // location.reload();
          this.GetApi();
        }
      });
    }
  }
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

  Delete(item: any) {
    console.log(item._id);
    const ans = confirm("Do you want to Delete?");
    if (ans == true) {
      this.api.DeleteData(item._id).subscribe((response: any) => {
        if (response == null) {
          alert("Delete Success");
          this.GetApi();
        }
      });
    }
  }

  filter() {
    if (this.inputFilter.valid) {
      const data = this.all.filter((name) =>
        name.firstname.includes(this.inputFilter.value)
        ||name.lastname.includes(this.inputFilter.value)
        
      );
      this.dataShow = data; //เป็นค่าที่เรากรอง ผลลัพ
    } else {  
      this.dataShow = this.all 
    }
  }

  // Filter(){
  //   const sentence = 'วันนี้ วันดี ปีใหม่ ท้องฟ้า สดใส ฝนไม่ตก อากาศหนาว';

  //   const word = 'ว';

  //   console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
  //   // expected output: "The word "fox" is in the sentence"

  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  // UpdateData(){
  //   let data1 = {
  //     firstname: this.FirstName.value,
  //     lastname: this.LastName.value,
  //     gender: this.Gender.value,
  //     birthday: this.Birthday.value,
  //     address: this.Address.value,
  //     disease: this.Disease.value,
  //     drugAllergy: this.DrugAllergy.value,
  //     phonenumber: this.Phonenumber.value,
  //     annotation: this.Annotation.value,
  //     age: this.Age.value,
  //   };
  //   this.api.UpdateData(data1).subscribe((response: any) => {
  //     if (response != null) {
  //       alert("Update Success");
  //       this.GetApi();
  //     }
  //   });

  // }

  ///? SetForm
  get Age() {
    return this.User.get("Age");
  }
  get ID() {
    return this.User.get("ID");
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
