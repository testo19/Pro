import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from "../../api.service";

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {

    constructor(private api: ApiService, private modalService: NgbModal) {

    }


    Table = new FormGroup({
        FirstName: new FormControl(null, Validators.required),
        LastName: new FormControl(null, Validators.required),


    })

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

    })


    // ? Variable API
    all: any;

    closeResult = '';
    ModalUser: any;

    ngOnInit() {
        this.GetApi();

    }

    GetApi() {
        let data1 = {
            firstname: this.Table.value.FirstName,
            lastname: this.Table.value.LastName,


        }
        this.api.GetProduct().subscribe((response: any) => {
            if (response.length > 0) {
                this.all = response;
                console.log(response);

            }
        })
    }

    Link1(item: any) {
        console.log("item", item);
        sessionStorage.setItem('healId', item._id);
        // let a = sessionStorage.getItem('healId')
        location.href = "/#/icons";
    }

    open(content, item) {
        let datenow = new Date()
        let y = datenow.getFullYear()
        let num = Number(y)
        let bd = item.birthday
        let bd2 = bd.toString()
        let y2 = bd2.substring(0, 4);
        let y3 = Number(y2)
        let age = num - y3;

        console.log(item.birthday);
        let bd0 = item.birthday.split("T")
        console.log("bd0",bd0);
        
        
        


        this.User.patchValue({
            FirstName: item.firstname,
            LastName: item.lastname,
            Gender: item.gender,
            Phonenumber: item.phonenumber,
            Address: item.address,
            Birthday: bd0[0],
            Disease: item.disease,
            DrugAllergy: item.drugAllergy,
            Age: age,
            Annotation: item.annotation || null,

        })
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


}
