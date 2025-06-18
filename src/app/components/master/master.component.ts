import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, DestinationsComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponent: string = 'roles';

  checkCurrent( component: string): void {
     this.currentComponent = component;
  }

}
