import { Component } from '@angular/core';
import { DataService } from 'src/app/services/cc-data-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  nameSurname: string = '';

  constructor(private dataService: DataService) { 
    this.nameSurname = dataService.customerNameSurname;
  }

}
