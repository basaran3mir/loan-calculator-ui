import { Injectable } from '@angular/core';
import { LoanApp } from '../models/loan-app';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { BankDynamic } from '../models/bank-dynamic';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiurl = "https://localhost:7008/api"
  private url = "Bank";

  constructor(private http: HttpClient) { }

  public getBankById(id: number): Observable<BankDynamic> {
    return this.http.get<BankDynamic>(
      `${this.apiurl}/${this.url}/${id}`);
  }

  public getAllBanks(): Observable<BankDynamic[]> {
    return this.http.get<BankDynamic[]>(`${this.apiurl}/${this.url}`);
  }

}