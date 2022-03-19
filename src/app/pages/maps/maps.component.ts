import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "app/api.service";

@Component({
  moduleId: module.id,
  selector: "maps-cmp",
  templateUrl: "maps.component.html",
})
export class MapsComponent implements OnInit {
  constructor(private api: ApiService) {}

  Name = new FormGroup({
    id: new FormControl(null, Validators.required),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    meetdateperson: new FormControl(null, Validators.required),
    namedoctor: new FormControl(null, Validators.required),
    pastsportid: new FormControl(null, Validators.required),
  });
  Table = new FormGroup({
    firstname: new FormControl(null, Validators.required),
  });

  all: any;
  dataShow: any;
  doctorall: any = [];
  patients: any;
  meetdatedata: any;
  IO: any;

  //   numDayMonthNow: number;

  Schedules: any = [];
  ngOnInit() {
    this.GetApi();
    this.GetApi1();

    if (sessionStorage.getItem("CaseId")) {
      this.api
        .GetPatientsId(sessionStorage.getItem("CaseId"))
        .subscribe((response: any) => {
          this.patients = response;
          console.log(this.patients);

          this.Name.setValue({
            firstname: this.patients.firstname,
            lastname: this.patients.lastname,
            id: this.patients._id,
            pastsportid: this.patients.pastsportid,
            meetdateperson: "",
            namedoctor: "",
          });

          // this.setSchedule();
          // this.setSchedule2();
          this.onSetDate();
        });
    }
  }

  async onSetDate() {
    try {
      const resultMapData = await this.setSchedule2();
      this.Schedules = await this.setGroupDay(resultMapData, this.meetdatedata);
      // this.Schedules = resultMapData;
      console.log(resultMapData);
    } catch (error) {}
  }

  setSchedule2() {
    return new Promise((resolve, reject) => {
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      const numDayMonthNow = this.daysInMonth(month, year);
      let tempData: any = [];
      for (let index = 0; index < numDayMonthNow; index++) {
        const temp = `${year}-${month}-${index + 1}`;
        const date: any = new Date(temp);
        // console.log(date);
        tempData.push({
          date: date,
        });
        // console.log(this.Schedules);
      }
      resolve(tempData);
    });
  }
  setGroupDay(resultMapData: any, meets: any) {
    return new Promise((resolve, reject) => {
      const temp: any = resultMapData.map((item: any, index: any) => {
        const tempFilter: any = meets.filter((meet: any) => {
          const tempItem = new Date(item.date);
          const schedulesDay: any = new Date(tempItem).getTime();
          const tempMeet: any = new Date(meet.meetdateperson).setHours(
            0,
            0,
            0,
            0
          );
          // console.log(index+1,new Date(tempMeet).toLocaleString());
          if (schedulesDay === tempMeet) {
            return meet;
          }
          return false;
        });
        // console.log(tempFilter);
        return {
          date: item.date,
          data: tempFilter,
        };
      });
      console.log(temp);
      resolve(temp);
    });
  }

  setSchedule() {
    // console.log(this.daysInMonth(2, 2022));
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const numDayMonthNow = this.daysInMonth(month, year);

    for (let index = 0; index < numDayMonthNow; index++) {
      const temp = {
        date: new Date(`${year}/${month}/${index + 1}`).toDateString(),
      };
      temp["class"] = this.setClass(temp.date);

      // console.log(temp);
      this.Schedules.push(temp);
      // console.log(temp.date);

      console.log(index + 1);

      for (
        let position1 = 0;
        position1 < this.meetdatedata.length;
        position1++
      ) {
        const daydate = [];
        daydate.push(this.meetdatedata[position1].meetdateperson[8]);
        daydate.push(this.meetdatedata[position1].meetdateperson[9]);

        const monthdate = [];
        monthdate.push(this.meetdatedata[position1].meetdateperson[5]);
        monthdate.push(this.meetdatedata[position1].meetdateperson[6]);
        // console.log(daydate.join(''));
        // console.log(daydate);

        const days = parseInt(daydate.join(""));
        const months = parseInt(monthdate.join(""));
        if (index + 1 == days && month == months) {
          console.log(this.meetdatedata[position1].firstname);

          const asd = this.meetdatedata[position1].firstname;

          this.IO = asd;
        }
      }
    }

    // console.log(this.meetdatedata.length);

    // console.log(month);
  }

  setClass(date) {
    const day = date.slice(0, 3);
    return `color-${day}`;
  }
  GetApi() {
    this.api.GetMembersData().subscribe((response: any) => {
      if (response.length > 0) {
        this.doctorall = response;
      }
    });
  }
  GetApi1() {
    this.api.GetMeetdate().subscribe((response: any) => {
      if (response.length > 0) {
        this.meetdatedata = response;
        console.log(this.meetdatedata);
      }
    });
  }

  Insert() {
    //  this.NameControl.meetdateperson.setValue(new Date(this.NameControl.meetdateperson.value))
    console.log(this.Name.value);
    this.api.InsertMeetdate(this.Name.value).subscribe((response: any) => {
      if (response == null) {
        alert("success");
        location.reload();
      }
    });
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  ///? SetForm

  get NameControl() {
    return this.Name.controls;
  }
}
