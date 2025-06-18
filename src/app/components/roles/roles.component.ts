import { HttpClient  } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { IRole } from '../../model/interface/roles';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  masterService = inject(MasterService);
  roles: IRole[] = [];

ngOnInit(): void {
  this.masterService.getRoles().subscribe((result: any) => {
    console.log('Roles:', result.data);
    this.roles = result.data.data;
  })
}
  
// getAllRoles(): void {
//   this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((result: any) => {
//     this.roles = result.data;
//   })
// }
}
