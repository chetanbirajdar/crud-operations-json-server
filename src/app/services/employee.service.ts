import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map, Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<any> {
    let url = API_URL + 'employee'
    return this.httpClient.get(url).pipe(
      map(res => {
        return res;
      }),
      catchError(x => {
        console.log('This is error', x)
        return x;
      })
    );
  }

  getEmployeeById(empId: number): Observable<any> {
    let url = API_URL + 'employee/' + empId;
    return this.httpClient.get(url).pipe(
      map(res => {
        return res;
      }),
      catchError(x => {
        console.log('This is error', x)
        return x;
      })
    );
  }

  addEmployee(employee: any): Observable<any> {
    let url = API_URL + 'employee'
    return this.httpClient.post(url, employee).pipe(
      map(res => {
        return res;
      }),
      catchError(x => {
        console.log('This is error', x)
        return x;
      })
    );
  }

  updateEmployee(employee: any): Observable<any> {
    let url = API_URL + 'employee/' + employee.id;
    return this.httpClient.put(url, employee).pipe(
      map(res => {
        return res;
      }),
      catchError(x => {
        console.log('This is error', x)
        return x;
      })
    );
  }

  deleteEmployee(empId: number): Observable<any> {
    let url = API_URL + 'employee/' + empId;
    return this.httpClient.delete(url).pipe(
      map(res => {
        return res;
      }),
      catchError(x => {
        console.log('This is error', x)
        return x;
      })
    );
  }

  // component1,comp2 , comp3 ---> service -- > api calls -- > return result/error  --- >
  //  servivr --> handler result --> component


}
