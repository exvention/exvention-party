import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<any[]> {
    return this.httpClient.get<any[]>('assets/policies.json')
  }
}
