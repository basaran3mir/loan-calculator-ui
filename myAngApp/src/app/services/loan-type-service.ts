import { Injectable } from '@angular/core';
import { LoanApp } from '../models/loan-app';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { LoanTypeDynamic } from '../models/loan-type-dynamic';

@Injectable({
  providedIn: 'root'
})
export class LoanTypeService {

  private apiurl = "https://localhost:7054/api"
  private url = "LoanType";

  constructor(private http: HttpClient) { }

  public getAllLoanTypes(): Observable<LoanTypeDynamic[]> {
    return this.http.get<LoanTypeDynamic[]>(`${this.apiurl}/${this.url}`);
  }

}