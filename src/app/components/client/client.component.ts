import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponse } from '../../model/interface/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true, 
  imports: [FormsModule,CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit{
  clientObj: Client = new Client();
  clientList : Client[] = [];

  clientService = inject(ClientService)
ngOnInit(): void {
  this.loadClients();
}

loadClients() {
     this.clientService.getAllClients().subscribe(
      (res: APIResponse)=>{
      console.log('Client List:', res.data);
      this.clientList = res.data.data;
    })
  }

onSaveClient() {
  console.log('Sending client:', this.clientObj); 

  this.clientService.addUpdateClient(this.clientObj).subscribe({
    next: (res: APIResponse) => {
      // console.log('Response from backend:', res);

      if (res.status) {
        this.loadClients();
        this.clientObj = new Client(); 
        alert('Client added successfully');
      } else {
        alert('Error while adding client: ' + res.message);
      }
    },
    error: (err) => {
      console.error('Error adding client:', err); 
      alert('Something went wrong. See console for details.');
    }
  });
}

onDeleteClient(clientId: number){
  console.log('Deleting client with ID:', clientId); 

  this.clientService.deleteClient(clientId).subscribe({
    next:(res: APIResponse) => {
      console.log('Delete response:', res);
      if(res.status){
        this.loadClients();
        alert('client successfully deleted')
      }
      else{
        alert('Error while deleting client: ' + res.message);
      }
    },
    error: (err) => {
      console.error('Error deleting client:', err); // 👈 This is what is being triggered now
      alert('Something went wrong. See console for details.');
    }
  })
}

onEditClient(client: Client){
  this.clientObj = { ...client }; // Create a copy of the client object
}

  
}
