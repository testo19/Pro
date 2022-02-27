import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "upgrade-cmp",
  moduleId: module.id,
  templateUrl: "upgrade.component.html",
})
export class UpgradeComponent implements OnInit {
  constructor(private api: ApiService, private modalService: NgbModal) {}
  all: any;
  firstname: any;
  lastname: any;
  idpatient: any;
  historyrestore2: any;

  // ? history
  HistoryRestore: any = [];
  HistoryRestore2: any;
  History: any;

  Name = new FormGroup({
    FirstName: new FormControl(null, Validators.required),
    LastName: new FormControl(null, Validators.required),
    History: new FormControl(null, Validators.required),
  });

  ngOnInit() {
    this.firstname = sessionStorage.getItem("FirstName");
    this.lastname = sessionStorage.getItem("LastName");
    this.idpatient = sessionStorage.getItem("CaseId");
    console.log(this.idpatient);

    this.historyrestore2 = sessionStorage.getItem("History");
    this.GetApi2();
    // console.log(sessionStorage);
  }

  // GetApi() {
  //     let data1 = {
  //       firstname: this.Name.value.FirstName,
  //       lastname: this.Name.value.LastName,
  //       idpatient: this.Name.value.Idpatient,

  //     }
  //     this.api.GetPatients().subscribe((response: any) => {
  //       if (response.length > 0) {
  //         this.all = response;
  //         console.log(response);
  //       }
  //     })

  //   }
  GetApi2() {
    let data2 = {
      idpatient: this.Name.value.Idpatient,
      historyrestore2: this.Name.value.History,
    };
    this.api.GetHealsId(this.idpatient).subscribe((response: any) => {
      if (response.length > 0) {
        this.all = response;
        console.log(response);

        response.forEach((element,index) => {
          let dataH1 = [];
          let dataH2 = [];

          dataH1 = element.historyrestore.filter((item) => {
            if (item.code != null) {
              return item;
            }
          });
          dataH2 = element.historyrestore2.filter((item) => {
            if (item.code != null) {
              return item;
            }
          });
         let date =new Date(element.updatedAt).toLocaleString('en-GB')
          let data = {
            h1: dataH1,
            h2: dataH2,
            dateH:date,
            time:index+1,

            
          };
          this.HistoryRestore.push(data);
        });
        this.HistoryRestore.reverse();
        console.log(this.HistoryRestore);

        // let History = [];
        // History = this.all.historyrestore;

        // let History2 = [];
        // History2 = this.all.historyrestore2;

        // // console.log(History);

        // this.HistoryRestore = History.filter((user) => {
        //   if (user.code != null) {
        //     console.log("A");
        //     return user;
        //   }
        // });
        // this.HistoryRestore2 = History2.filter((user) => {
        //   if (user.code != null) {
        //     console.log("A");
        //     return user;
        //   }
        // });
        // console.log(this.HistoryRestore);
        // console.log(this.HistoryRestore2);
      }
    });
  }
}
