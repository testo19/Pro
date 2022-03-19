import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  
  Url = "http://localhost:4000";

  constructor(private http: HttpClient) { }
  GetFileText():Observable<any>{
  return this.http.get(this.Url +'C:/Users/Mos/Desktop/demobot/SIAM-ID/Data')
}
  GetProduct(): Observable<any> {
    return this.http.get<any>(this.Url + "/products")
  }
  GetPatients(): Observable<any> {
    return this.http.get<any>(this.Url + "/patients")
  }
  GetPatientsId(id:any): Observable<any> {
    return this.http.get<any>(this.Url + "/patients/" +id)
  }
  GetHeals(): Observable<any> {
    return this.http.get<any>(this.Url + "/heals")
  }
  GetMembersData(): Observable<any> {
    return this.http.get<any>(this.Url + "/members")
  }
  GetHealsId(id:any): Observable<any> {
    return this.http.get<any>(this.Url + "/healsByPatient/" +id)
  }
  GetMeetdateId(id:any): Observable<any> {
    return this.http.get<any>(this.Url + "/meetdatesByPatient/" +id)
  }
  GetMeetdate(): Observable<any> {
    return this.http.get<any>(this.Url + "/meetdates/" )
  }
  


  InsertData(data1: any): Observable<any> {
    return this.http.post<any>(this.Url + "/patients", data1)
  }

  InsertHeal(data1: any): Observable<any> {
    return this.http.post<any>(this.Url + "/heals", data1)
  }
  InsertMembersData(data1: any): Observable<any> {
    return this.http.post<any>(this.Url + "/members", data1)
  }
  InsertMeetdate(data1: any): Observable<any> {
    return this.http.post<any>(this.Url + "/meetdates", data1)
  }

  UpdateData(id: any, data1: any): Observable<any> {
    return this.http.put<any>(this.Url + "/patients/" + id, data1)
  }


  Updateheals(id: any,data1: any): Observable<any> {
    return this.http.put<any>(this.Url + "/heals/"+ id, data1)
  }
  UpdateMembersData(id: any,data1: any): Observable<any> {
    return this.http.put<any>(this.Url + "/members/"+ id, data1)
  }
  UpdateMeetdate(id: any,data1: any): Observable<any> {
    return this.http.put<any>(this.Url + "/meetdates/"+ id, data1)
  }


  // UpdateData(id: any, data1: any): Observable<any> {
  //   return this.http.put<any>(this.Url + "/patients/" + id, data1)
  // }

  upload(data1: any): Observable<any> {
    return this.http.post<File>(this.Url + "/file", data1)
  }

  DeleteData(id: any): Observable<any> {
    return this.http.delete<any>(this.Url + "/patients/" + id)
  }
  DeleteMemberData(id: any): Observable<any> {
    return this.http.delete<any>(this.Url + "/members/" + id)
  }
  DeleteMeetdate(id: any): Observable<any> {
    return this.http.delete<any>(this.Url + "/meetdates/" + id)
  }

  

 

  
}
