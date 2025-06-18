import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../model/interface/roles';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {

  constructor(private http: HttpClient){}

  getAllEmployee() : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL +"GetAllEmployee")
  }

  getAllClientProject(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL +"GetAllClientProjects");
  }

  addUpdateClientProject(clientProject: any): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL +"AddUpdateClientProject", clientProject);
  }
}
