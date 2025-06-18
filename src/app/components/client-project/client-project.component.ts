import { Component, inject , OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { APIResponse, IEmployee } from '../../model/interface/roles';
import { ClientProjectService } from '../../services/client-project.service';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/class/Client';
import { IClientProject } from '../../model/interface/client';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  employeeList: IEmployee[] = [];
  clientList: Client[] = [];
  clientProjectList: IClientProject[] = []; // Adjust type as needed

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl('')
  })

  clientProjectService= inject(ClientProjectService);
  clientServicve = inject(ClientService);

  ngOnInit(): void{
    this.getAllEmployee();
    this.getAllClient();
    this.getAllClientProject();
  }

  getAllEmployee() {
    this.clientProjectService.getAllEmployee().subscribe({
      next: (res: APIResponse) => {
          this.employeeList = res.data.data;
      }
    })
  }

  getAllClient(){
    this.clientServicve.getAllClients().subscribe({
      next:(res: APIResponse) =>{
        this.clientList = res.data.data;
      }
    })
  }

  getAllClientProject() {
    this.clientProjectService.getAllClientProject().subscribe({
      next:(  res: APIResponse) => {
        this.clientProjectList = res.data.data;
      }
    })
  }

  onSaveClientProject() {
    const formValue = this.projectForm.value;

    console.log('Form Value:', formValue); 

    this.clientProjectService.addUpdateClientProject(formValue).subscribe({
      next: (res: APIResponse) => {

        if(res.status) {
          alert('Client Project added successfully');
        }
        else {
          alert('Error while adding Client Project: ' + res.message);
        }

        this.getAllClientProject(); // Refresh the list after adding/updating
        this.projectForm.reset(); // Reset the form after submission
      }
    })
  }

}
