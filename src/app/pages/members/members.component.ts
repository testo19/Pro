import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ApiService } from "app/api.service";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.css"],
})
export class MembersComponent implements OnInit {
  constructor(private api: ApiService, private modalService: NgbModal) {}
  closeResult = "";

  Table = new FormGroup({
    FirstName: new FormControl(null, Validators.required),
    LastName: new FormControl(null, Validators.required),
  });

  Member = new FormGroup({
   
    ID: new FormControl(null),
    FirstName: new FormControl(null, Validators.required),
    LastName: new FormControl(null, Validators.required),
    Username: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required),
    Code: new FormControl(null, Validators.required),
    Note: new FormControl(null),
    Statusmember: new FormControl(null, Validators.required),
  });
  dataShow: any;
  all:any;
  ngOnInit(): void {
    this.GetApi();
    
  }

  Insert(){

  let data1 = {
    
    firstname: this.FirstName.value,
      lastname: this.LastName.value,
      username: this.Username.value,
      password: this.Password.value,
      code: this.Code.value,
      note: this.Note.value,
      statusmember: this.Statusmember.value,

  };
  this.api.InsertMembersData(data1).subscribe((response: any) => {
    if (response == null) {
      alert("Insert Success");
      // location.reload();
      this.GetApi();
    }
  });

  }

  GetApi() {
    let data1 = {
      firstname: this.Table.value.FirstName,
      lastname: this.Table.value.LastName,
    };
    this.api.GetMembersData().subscribe((response: any) => {
      if (response.length > 0) {
        this.all = response;
        this.dataShow = response;
        console.log(response);
      }
    });
  }

  open(content) {
    this.Member.reset()
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title2" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  OpenMemberData(content,item){

    this.Member.patchValue({
      ID: item._id || null,
      FirstName: item.firstname || null,
      LastName: item.lastname || null,
      Username: item.username || null,
      Password: item.password || null,
      Code: item.code || null,
      Note: item.note || null,
      Statusmember: item.statusmember || null,

    });
    

    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title3" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

  }

  Update(){
    let data1 = {

      firstname: this.FirstName.value,
        lastname: this.LastName.value,
        username: this.Username.value,
        password: this.Password.value,
        code: this.Code.value,
        note: this.Note.value,
        statusmember: this.Statusmember.value,
  
    };
    this.api.UpdateMembersData(this.ID.value,data1).subscribe((response: any) => {
      
        alert("Update Success");
        // location.reload();
        this.GetApi();
    });

  }
  
  Delete(item: any) {
    console.log(item._id);
    const ans = confirm("Do you want to Delete?");
    if (ans == true) {
      this.api.DeleteMemberData(item._id).subscribe((response: any) => {
        if (response == null) {
          alert("Delete Success");
          this.GetApi();
        }
      });
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  //? Set Memberform
  get ID() {
    return this.Member.get("ID");
  }
  
  get FirstName() {
    return this.Member.get("FirstName");
  }
  get LastName() {
    return this.Member.get("LastName");
  }
  get Username() {
    return this.Member.get("Username");
  }
  get Password() {
    return this.Member.get("Password");
  }
  get Code() {
    return this.Member.get("Code");
  }
  get Note() {
    return this.Member.get("Note");
  }
  get Statusmember() {
    return this.Member.get("Statusmember");
  }
}
