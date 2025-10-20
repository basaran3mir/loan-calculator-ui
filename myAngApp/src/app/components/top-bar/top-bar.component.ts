import { Component } from '@angular/core';
import { DataService } from 'src/app/services/cc-data-service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  constructor(private dataService: DataService) { 
    dataService.checkPage()
  }
  cikis() {
    this.dataService.customerID = undefined;
  }
}
