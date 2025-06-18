import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/class/Client';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/interface/roles';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<APIResponse> {
    return this.http.get<APIResponse> (
      environment.API_URL +"GetAllClients");
  }

  addUpdateClient(client: Client): Observable<APIResponse> {

      return this.http.post<APIResponse>(
        environment.API_URL +'AddUpdateClient',
        client
      );
  }
  
  deleteClient(clientId: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(
      environment.API_URL +
      `/DeleteClientByClientId?clientId=${clientId}`
    );
  }
}
