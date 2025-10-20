import { Injectable } from '@angular/core';
import { LoanApp } from '../models/loan-app';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiurl = "https://localhost:7008/api"
  private url = "Customer";

  constructor(private http: HttpClient) { }

  public getCustomerByEmail(email: string): Observable<Customer> {
    return this.http.get<Customer>(
      `${this.apiurl}/${this.url}/${email}`);
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      `${this.apiurl}/${this.url}`,
      customer
    );
  }

  public getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(
      `${this.apiurl}/${this.url}/${id}`);
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiurl}/${this.url}`);
  }

}