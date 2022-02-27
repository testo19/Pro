import { Component } from "@angular/core";
import { ApiService } from "../../api.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: "icons-cmp",
  moduleId: module.id,
  templateUrl: "icons.component.html",
  styleUrls: ["./icons.component.css"],
})
export class IconsComponent {
  constructor(private api: ApiService, private modalService: NgbModal) {}

  all:any
  firstname:any
  lastname:any
  newdate:any
  idpatient:any
  Name = new FormGroup({
    FirstName: new FormControl(null, Validators.required),
    LastName: new FormControl(null, Validators.required),

  })

  TunTaTooth = new FormControl(false, Validators.requiredTrue);
  TunTaToothList2: any;

  TunTaHappy = new FormControl(false, Validators.requiredTrue);
  TunTaHappyList12: any;
  TunTaHappyList13: any;
  TunTaHappyList14: any;
  TunTaHappyList15: any;
  TunTaHappyList16: any;
  TunTaHappyList17: any;
  TunTaHappyList18: any;
  TunTaHappyList19: any;

  TunTaClearTooth = new FormControl(false, Validators.requiredTrue);
  TunTaClearToothList23: any;
  TunTaClearToothList25: any;
  TunTaClearToothList26: any;

  TunTaPeriodontalTooth = new FormControl(false, Validators.requiredTrue);
  TunTaPeriodontalToothList41: any;
  TunTaPeriodontalToothList42: any;
  TunTaPeriodontalToothList44: any;
  TunTaPeriodontalToothList45: any;
  TunTaPeriodontalToothList46: any;

  TunTaClearRenovate = new FormControl(false, Validators.requiredTrue);
  TunTaClearRenovateList53: any;
  TunTaClearRenovateList54: any;
  TunTaClearRenovateList55: any;

  TunTaHealRootTooth = new FormControl(false, Validators.requiredTrue);
  TunTaHealRootToothList64: any;
  TunTaHealRootToothList65: any;
  TunTaHealRootToothList66: any;
  TunTaHealRootToothList67: any;

  TunTaOralSurgeryTooth = new FormControl(false, Validators.requiredTrue);
  TunTaOralSurgeryToothList73: any;
  TunTaOralSurgeryToothList75: any;
  TunTaOralSurgeryToothList76: any;
  TunTaOralSurgeryToothList77: any;

  TunTaPutToothFirmly = new FormControl(false, Validators.requiredTrue);
  TunTaPutToothFirmlyList86: any;
  TunTaPutToothFirmlyList87: any;
  TunTaPutToothFirmlyList88: any;

  TunTaPartialTooth = new FormControl(false, Validators.requiredTrue);
  TunTaPartialToothList93: any;
  TunTaPartialToothList94: any;
  TunTaPartialToothList95: any;
  TunTaPartialToothList96: any;

  TunTaSideTooth1 = new FormControl(false, Validators.requiredTrue);
  TunTaSideTooth1List11: any;
  TunTaSideTooth1List12: any;
  TunTaSideTooth1List13: any;
  TunTaSideTooth1List14: any;
  TunTaSideTooth1List15: any;
  TunTaSideTooth1List16: any;
  TunTaSideTooth1List17: any;

  TunTaSideTooth2 = new FormControl(false, Validators.requiredTrue);
  TunTaSideTooth2List21: any;
  TunTaSideTooth2List22: any;
  TunTaSideTooth2List23: any;
  TunTaSideTooth2List24: any;
  TunTaSideTooth2List25: any;

  TunTaSideTooth3 = new FormControl(false, Validators.requiredTrue);
  TunTaSideTooth3List31: any;
  TunTaSideTooth3List32: any;
  TunTaSideTooth3List33: any;
  TunTaSideTooth3List34: any;
  TunTaSideTooth3List35: any;
  TunTaSideTooth3List36: any;
  TunTaSideTooth3List37: any;

  TunTaSideTooth4 = new FormControl(false, Validators.requiredTrue);
  TunTaSideTooth4List41: any;
  TunTaSideTooth4List42: any;
  TunTaSideTooth4List43: any;
  TunTaSideTooth4List44: any;

  TunTaSideTooth5 = new FormControl(false, Validators.requiredTrue);
  TunTaSideTooth5List51: any;
  TunTaSideTooth5List52: any;
  TunTaSideTooth5List53: any;

  ListAll = [];
  ListAll2 = [];
  nameList = [];
  nameList2 = [];
  ngOnInit(): void {
    
  // แสดงชื่อ
  this.firstname=sessionStorage.getItem('FirstName' );
  console.log(sessionStorage);
  
    this.lastname=sessionStorage.getItem('LastName' );

    this.idpatient=sessionStorage.getItem('CaseId' );
    
    for (let index = 0; index < 100; index++) {
      const data = {
        head: null,
        code: null,
        name: null,
      };
      this.ListAll.push(data);
      this.nameList.push(data);
    }
    this.setNameList();

    for (let index = 0; index < 60; index++) {
      const data = {
        head: null,
        code: null,
        name: null,
      };
      this.ListAll2.push(data);
      this.nameList2.push(data);
    }
    this.setNameList();
    this.GetApi();
    
     

  }

  setNameList() {
    this.nameList[2] = "02 ตรวจฟันนัดทำต่อ";
    this.nameList[12] = "12 เรื่องหินปูน,แผ่นคราบฟัน,การแปรงฟัน ฯลฯ";
    this.nameList[13] = "13 การจัดฟัน";
    this.nameList[14] = "14 การรักษาโรคปริทันต์";
    this.nameList[15] = "15 การอุดฟัน";
    this.nameList[16] = "16 การรักษาคลองรากฟัน";
    this.nameList[17] = "17 การถอนฟัน/ศัลยกรรมช่องปาก";
    this.nameList[18] = "18 การใส่ฟันติดแน่น";
    this.nameList[19] = "19 การใส่ฟันถิดได้";
    this.nameList[23] = "23 ขูดหินปูน";
    this.nameList[25] = "25 Sealant,เคลือบฟลูออไรด์";
    this.nameList[26] = "26 แก้เสียวฟัน,บรรเทาเจ็บปวด";
    this.nameList[41] = "41 Monitor & Follow Up";
    this.nameList[42] = "42 Re-contour(ตกแต่ง contour ใหม่)";
    this.nameList[44] = "44 Root cleaning(Planing) เกลาราก";
    this.nameList[45] = "45 Curettage ขูดเหงือก";
    this.nameList[46] = "46 Applied med. (ใส่ยาที่เหงือก)";
    this.nameList[53] = "53 อุดฟันผุตื้นๆ";
    this.nameList[54] = "54 อุดฟันผุลึก";
    this.nameList[55] = "55 อุดฟัน 2 caries/ Broken filling";
    this.nameList[64] = "64 Capping(ใส่วัสดุ Capping)";
    this.nameList[65] = "65 Pulpotomy(รักษา Pulp) ในฟันเด็ก";
    this.nameList[66] = "66 RCT/ Pulpectomy";
    this.nameList[67] = "67 อุดชั่วคราว";
    this.nameList[73] = "73 รักษาแผล เอาวัตถุแปลกปลอมออก + ตัดไหม";
    this.nameList[75] = "75 ถอนฟัน";
    this.nameList[76] = "76 ผ่าฝี,ผ่า impact,ศัลยกรรมช่องปากอื่นๆ,ตัดปลายราก";
    this.nameList[77] = "77 ให้ยาก่อนและหลังผ่าตัด, ให้ยาบรรเทาปวด";
    this.nameList[86] = "86 Crown";
    this.nameList[87] = "87 Pin tooth";
    this.nameList[88] = "88 Bridge";
    this.nameList[93] = "93 Partial - TP";
    this.nameList[94] = "94 PD,RPD,RB";
    this.nameList[95] = "95 FD";
    this.nameList[96] = "96 FD with attachment";
    this.nameList2[11] = "1 O";
    this.nameList2[12] = "2 M";
    this.nameList2[13] = "3 D";
    this.nameList2[14] = "4 B";
    this.nameList2[15] = "5 L";
    this.nameList2[16] = "6 G(V)";
    this.nameList2[17] = "7 G(L)";
    this.nameList2[21] = "21 OM";
    this.nameList2[22] = "22 OD";
    this.nameList2[23] = "23 OB";
    this.nameList2[24] = "24 OL";
    this.nameList2[25] = "25 MD";
    this.nameList2[31] = "31 OMD";
    this.nameList2[32] = "32 OMV";
    this.nameList2[33] = "33 OML";
    this.nameList2[34] = "34 ODV";
    this.nameList2[35] = "35 ODL";
    this.nameList2[36] = "36 OVL";
    this.nameList2[37] = "37 IMD";
    this.nameList2[41] = "41 OMDV";
    this.nameList2[42] = "42 OMDL";
    this.nameList2[43] = "43 OMBL";
    this.nameList2[44] = "44 ODVL";
    this.nameList2[51] = "51 OMDVL";
    this.nameList2[52] = "52 OMDVLG";
    this.nameList2[53] = "53 OMDVLGP";
  }
 

  onChangeTunTaTooth() {
    if (this.TunTaTooth.valid == false) {
      this.clearTunTaTooth();
    }
  }

  onChangeTunTaHappy() {
    if (this.TunTaHappy.valid == false) {
      this.clearTunTaHappy();
    }
  }

  onChangeTunTaClearTooth() {
    if (this.TunTaClearTooth.valid == false) {
      this.clearTunTaClearTooth();
    }
  }

  onChangeTunTaPeriodontalTooth() {
    if (this.TunTaPeriodontalTooth.valid == false) {
      this.clearTunTaPeriodontalTooth();
    }
  }

  onChangeTunTaClearRenovate() {
    if (this.TunTaClearRenovate.valid == false) {
      this.clearTunTaClearRenovate();
    }
  }

  onChangeTunTaHealRootTooth() {
    if (this.TunTaHealRootTooth.valid == false) {
      this.clearTunTaHealRootTooth();
    }
  }

  onChangeTunTaOralSurgeryTooth() {
    if (this.TunTaOralSurgeryTooth.valid == false) {
      this.clearTunTaOralSurgeryTooth();
    }
  }

  onChangeTunTaPutToothFirmly() {
    if (this.TunTaPutToothFirmly.valid == false) {
      this.clearTunTaPutToothFirmly();
    }
  }

  onChangeTunTaPartialTooth() {
    if (this.TunTaPartialTooth.valid == false) {
      this.clearTunTaPartialTooth();
    }
  }

  onChangeTunTaSideTooth1() {
    if (this.TunTaSideTooth1.valid == false) {
      this.clearTunTaSideTooth1();
    }
  }

  onChangeTunTaSideTooth2() {
    if (this.TunTaSideTooth2.valid == false) {
      this.clearTunTaSideTooth2();
    }
  }

  onChangeTunTaSideTooth3() {
    if (this.TunTaSideTooth3.valid == false) {
      this.clearTunTaSideTooth3();
    }
  }

  onChangeTunTaSideTooth4() {
    if (this.TunTaSideTooth4.valid == false) {
      this.clearTunTaSideTooth4();
    }
  }

  onChangeTunTaSideTooth5() {
    if (this.TunTaSideTooth5.valid == false) {
      this.clearTunTaSideTooth5();
    }
  }

  clearTunTaTooth() {
    
    this.TunTaToothList2 = false;

  }

  clearTunTaHappy() {
    this.TunTaHappyList12 = false;
    this.TunTaHappyList13 = false;
    this.TunTaHappyList14 = false;
    this.TunTaHappyList15 = false;
    this.TunTaHappyList16 = false;
    this.TunTaHappyList17 = false;
    this.TunTaHappyList18 = false;
    this.TunTaHappyList19 = false;

    this.ListAll[12] = [];
    // console.log(this.ListAll[12]);

  }

  clearTunTaClearTooth() {
    this.TunTaClearToothList23 = false;
    this.TunTaClearToothList25 = false;
    this.TunTaClearToothList26 = false;
    
  }

  clearTunTaPeriodontalTooth() {
    this.TunTaPeriodontalToothList41 = false;
    this.TunTaPeriodontalToothList42 = false;
    this.TunTaPeriodontalToothList44 = false;
    this.TunTaPeriodontalToothList45 = false;
    this.TunTaPeriodontalToothList46 = false;
    
  }

  clearTunTaClearRenovate() {
    this.TunTaClearRenovateList53 = false;
    this.TunTaClearRenovateList54 = false;
    this.TunTaClearRenovateList55 = false;
    
  }

  clearTunTaHealRootTooth() {
    this.TunTaHealRootToothList64 = false;
    this.TunTaHealRootToothList65 = false;
    this.TunTaHealRootToothList66 = false;
    this.TunTaHealRootToothList67 = false;
    
  }

  clearTunTaOralSurgeryTooth() {
    this.TunTaOralSurgeryToothList73 = false;
    this.TunTaOralSurgeryToothList75 = false;
    this.TunTaOralSurgeryToothList75 = false;
    this.TunTaOralSurgeryToothList77 = false;
    
  }

  clearTunTaPutToothFirmly() {
    this.TunTaPutToothFirmlyList86 = false;
    this.TunTaPutToothFirmlyList87 = false;
    this.TunTaPutToothFirmlyList88 = false;
    
  }

  clearTunTaPartialTooth() {
    this.TunTaPartialToothList93 = false;
    this.TunTaPartialToothList94 = false;
    this.TunTaPartialToothList95 = false;
    this.TunTaPartialToothList96 = false;
    
  }

  clearTunTaSideTooth1() {
    this.TunTaSideTooth1List11 = false;
    this.TunTaSideTooth1List12 = false;
    this.TunTaSideTooth1List13 = false;
    this.TunTaSideTooth1List14 = false;
    this.TunTaSideTooth1List15 = false;
    this.TunTaSideTooth1List16 = false;
    this.TunTaSideTooth1List17 = false;
    
  }

  clearTunTaSideTooth2() {
    this.TunTaSideTooth2List21 = false;
    this.TunTaSideTooth2List22 = false;
    this.TunTaSideTooth2List23 = false;
    this.TunTaSideTooth2List24 = false;
    this.TunTaSideTooth2List25 = false;
    
  }

  clearTunTaSideTooth3() {
    this.TunTaSideTooth3List31 = false;
    this.TunTaSideTooth3List32 = false;
    this.TunTaSideTooth3List33 = false;
    this.TunTaSideTooth3List34 = false;
    this.TunTaSideTooth3List35 = false;
    this.TunTaSideTooth3List36 = false;
    this.TunTaSideTooth3List37 = false;
    
  }

  clearTunTaSideTooth4() {
    this.TunTaSideTooth4List41 = false;
    this.TunTaSideTooth4List42 = false;
    this.TunTaSideTooth4List43 = false;
    this.TunTaSideTooth4List44 = false;
    
  }

  clearTunTaSideTooth5() {
    this.TunTaSideTooth5List51 = false;
    this.TunTaSideTooth5List52 = false;
    this.TunTaSideTooth5List53 = false;
    
  }

  onClickListTuntaTooth(code: any) {
    const head = "ตรวจฟัน";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
    // console.log(this.ListAll[2]);
    
  }
  onClickListTunTaHappy(code: any) {
    const head = "ทันตะสุขา";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
    // console.log(this.ListAll[12]);
    
  }

  onClickListTunTaClearTooth(code: any) {
    const head = "ทำความสะอาดฟัน";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
  }

  onClickListTunTaPeriodontalTooth(code: any) {
    const head = "รักษาโรคปริทันต์";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
  }

  onClickListTunTaClearRenovate(code: any) {
    const head = "บูรณะฟัน (อุดฟัน)";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
  }

  onClickListTunTaHealRootTooth(code: any) {
    const head = "บูรณะฟัน (อุดฟัน)";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
  }

  onClickListTunTaOralSurgeryTooth(code: any) {
    const head = "ถอนฟันและศัลยกรรมช่องปาก";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
  }

  onClickListTunTaPutToothFirmly(code: any) {
    const head = "ใส่ติดฟันแน่น";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
  }

  onClickListTunTaPartialTooth(code: any) {
    const head = "ใส่ติดฟันถอดได้";
    this.ListAll[code] = {
      head: head,
      code: code,
      name: this.nameList[code],
    };
  }

  onClickListTunTaSideTooth1(code: any) {
    const head = "Side 1";
    this.ListAll2[code] = {
      head: head,
      code: code,
      name: this.nameList2[code],
    };
  }

  onClickListTunTaSideTooth2(code: any) {
    const head = "Side 2";
    this.ListAll2[code] = {
      head: head,
      code: code,
      name: this.nameList2[code],
    };
  }

  onClickListTunTaSideTooth3(code: any) {
    const head = "Side 3";
    this.ListAll2[code] = {
      head: head,
      code: code,
      name: this.nameList2[code],
    };
  }

  onClickListTunTaSideTooth4(code: any) {
    const head = "Side 4";
    this.ListAll2[code] = {
      head: head,
      code: code,
      name: this.nameList2[code],
    };
  }

  onClickListTunTaSideTooth5(code: any) {
    const head = "Side 5";
    this.ListAll2[code] = {
      head: head,
      code: code,
      name: this.nameList2[code],
    };
  }

  FinalCheck() {
    // 
    
    this.TunTaToothList2 == false ? (this.ListAll[2] = []) : false;

    this.TunTaHappyList12 == false ? (this.ListAll[12] = []) : false;
    this.TunTaHappyList13 == false ? (this.ListAll[13] = []) : false;

    this.TunTaHappyList14 == false ? (this.ListAll[14] = []) : false;
    this.TunTaHappyList15 == false ? (this.ListAll[15] = []) : false;
    this.TunTaHappyList16 == false ? (this.ListAll[16] = []) : false;
    this.TunTaHappyList17 == false ? (this.ListAll[17] = []) : false;
    this.TunTaHappyList18 == false ? (this.ListAll[18] = []) : false;
    this.TunTaHappyList19 == false ? (this.ListAll[19] = []) : false;


    this.TunTaClearToothList23 == false ? (this.ListAll[23] = []) : false;
    this.TunTaClearToothList25 == false ? (this.ListAll[25] = []) : false;
    this.TunTaClearToothList26 == false ? (this.ListAll[26] = []) : false;

    this.TunTaPeriodontalToothList41 == false ? (this.ListAll[41] = []) : false;
    this.TunTaPeriodontalToothList42 == false ? (this.ListAll[42] = []) : false;
    this.TunTaPeriodontalToothList44 == false ? (this.ListAll[44] = []) : false;
    this.TunTaPeriodontalToothList45 == false ? (this.ListAll[45] = []) : false;
    this.TunTaPeriodontalToothList46 == false ? (this.ListAll[46] = []) : false;

    this.TunTaClearRenovateList53 == false ? (this.ListAll[53] = []) : false;
    this.TunTaClearRenovateList54 == false ? (this.ListAll[54] = []) : false;
    this.TunTaClearRenovateList55 == false ? (this.ListAll[55] = []) : false;

    this.TunTaHealRootToothList64 == false ? (this.ListAll[64] = []) : false;
    this.TunTaHealRootToothList65 == false ? (this.ListAll[65] = []) : false;
    this.TunTaHealRootToothList66 == false ? (this.ListAll[66] = []) : false;
    this.TunTaHealRootToothList67 == false ? (this.ListAll[67] = []) : false;

    this.TunTaOralSurgeryToothList73 == false ? (this.ListAll[73] = []) : false;
    this.TunTaOralSurgeryToothList75 == false ? (this.ListAll[75] = []) : false;
    this.TunTaOralSurgeryToothList76 == false ? (this.ListAll[76] = []) : false;
    this.TunTaOralSurgeryToothList77 == false ? (this.ListAll[77] = []) : false;

    this.TunTaPutToothFirmlyList86 == false ? (this.ListAll[86] = []) : false;
    this.TunTaPutToothFirmlyList87 == false ? (this.ListAll[87] = []) : false;
    this.TunTaPutToothFirmlyList88 == false ? (this.ListAll[88] = []) : false;

    this.TunTaPartialToothList93 == false ? (this.ListAll[93] = []) : false;
    this.TunTaPartialToothList94 == false ? (this.ListAll[94] = []) : false;
    this.TunTaPartialToothList95 == false ? (this.ListAll[95] = []) : false;
    this.TunTaPartialToothList96 == false ? (this.ListAll[96] = []) : false;

    this.TunTaSideTooth1List11 == false ? (this.ListAll2[11] = []) : false;
    this.TunTaSideTooth1List12 == false ? (this.ListAll2[12] = []) : false;
    this.TunTaSideTooth1List13 == false ? (this.ListAll2[13] = []) : false;
    this.TunTaSideTooth1List14 == false ? (this.ListAll2[14] = []) : false;
    this.TunTaSideTooth1List15 == false ? (this.ListAll2[15] = []) : false;
    this.TunTaSideTooth1List16 == false ? (this.ListAll2[16] = []) : false;
    this.TunTaSideTooth1List17 == false ? (this.ListAll2[17] = []) : false;

    this.TunTaSideTooth2List21 == false ? (this.ListAll2[21] = []) : false;
    this.TunTaSideTooth2List22 == false ? (this.ListAll2[22] = []) : false;
    this.TunTaSideTooth2List23 == false ? (this.ListAll2[23] = []) : false;
    this.TunTaSideTooth2List24 == false ? (this.ListAll2[24] = []) : false;
    this.TunTaSideTooth2List25 == false ? (this.ListAll2[25] = []) : false;

    this.TunTaSideTooth3List31 == false ? (this.ListAll2[31] = []) : false;
    this.TunTaSideTooth3List32 == false ? (this.ListAll2[32] = []) : false;
    this.TunTaSideTooth3List33 == false ? (this.ListAll2[33] = []) : false;
    this.TunTaSideTooth3List34 == false ? (this.ListAll2[34] = []) : false;
    this.TunTaSideTooth3List35 == false ? (this.ListAll2[35] = []) : false;
    this.TunTaSideTooth3List36 == false ? (this.ListAll2[36] = []) : false;
    this.TunTaSideTooth3List37 == false ? (this.ListAll2[37] = []) : false;

    this.TunTaSideTooth4List41 == false ? (this.ListAll2[41] = []) : false;
    this.TunTaSideTooth4List42 == false ? (this.ListAll2[42] = []) : false;
    this.TunTaSideTooth4List43 == false ? (this.ListAll2[43] = []) : false;
    this.TunTaSideTooth4List43 == false ? (this.ListAll2[43] = []) : false;

    this.TunTaSideTooth5List51 == false ? (this.ListAll2[51] = []) : false;
    this.TunTaSideTooth5List52 == false ? (this.ListAll2[52] = []) : false;
    this.TunTaSideTooth5List53 == false ? (this.ListAll2[53] = []) : false;



    // console.log(this.TunTaHappyList12);
    // console.log(this.ListAll);
  }

  OnClickSubmit(){
    this.FinalCheck()
    console.log(this.ListAll);
    console.log(this.ListAll2);
    this.newdate=new Date()
    const data = {
      
      idpatient: this.idpatient,
      firstname: this.firstname,
      lastname: this.lastname,
      namedoc: null,
      medicine: null,
      historyrestore: this.ListAll,
      historyrestore2: this.ListAll2,
      healdate: this.newdate,

    };
    this.api.InsertHeal(data).subscribe((response: any) => {
      if (response == null) {
        alert("Insert Success");
       location.href = "/#/table2"
      }
    });

    console.log(data);
    
  }
  GetApi() {
    let data1 = {
      firstname: this.Name.value.FirstName,
      lastname: this.Name.value.LastName,
      idpatient: this.Name.value.Idpatient,
      


    }
    this.api.GetPatients().subscribe((response: any) => {
      if (response.length > 0) {
        this.all = response;
        console.log(response);
      }
    })
  }



  


}
