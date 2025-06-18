import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, IRole, IDestination } from '../model/interface/roles';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {

  }

  getDestinations(): Observable<APIResponse > {
    return this.http.get<APIResponse >(environment.API_URL +'GetAllDestination')   
  }


  getRoles(): Observable<APIResponse > {
    return this.http.get<APIResponse >(environment.API_URL +'GetAllRoles')   
  }
}
