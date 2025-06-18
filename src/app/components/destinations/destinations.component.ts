import { Component, inject , OnInit} from '@angular/core';
import { APIResponse, IDestination } from '../../model/interface/roles';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  imports: [CommonModule],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent implements OnInit {

  designations: IDestination[] = [];
  masterService = inject(MasterService)

  // ngOnInit() :  void{
  //   this.masterService.getDestinations().subscribe((result: APIResponse<IDestination>) => {
  //     console.log('Destinations:', result.data);
  //     this.destinations = result.data;
  //   })
  // }

  ngOnInit(): void {
    this.masterService.getDestinations().subscribe((result: APIResponse) => {
      // console.log('Destinations:', result.data);
      this.designations = result.data.data;
    });
  }


}
