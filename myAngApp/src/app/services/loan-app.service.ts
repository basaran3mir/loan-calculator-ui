import { Injectable } from '@angular/core';
import { LoanApp } from '../models/loan-app';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanAppService {
  
  private apiurl = "https://localhost:7054/api"
  private url = "LoanApp";

  constructor(private http: HttpClient) { }

  public getAllLoanApps(): Observable<LoanApp[]> {
    return this.http.get<LoanApp[]>(`${this.apiurl}/${this.url}`);
  }

  public GetPopularLoanApps(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiurl}/${this.url}/populars`);
  }

  public addLoanApp(loanApp: LoanApp): Observable<LoanApp> {
    return this.http.post<LoanApp>(
      `${this.apiurl}/${this.url}`,
      loanApp
    );
  }

  public getLoanAppById(id?: number): Observable<LoanApp> {
    return this.http.get<LoanApp>(`${this.apiurl}/${this.url}/${id}`);
  }

  public getLoanAppsByCustomerId(id?: number): Observable<LoanApp[]> {
    return this.http.get<LoanApp[]>(
      `${this.apiurl}/${this.url}/customerid/${id}/all`);
  }

}
