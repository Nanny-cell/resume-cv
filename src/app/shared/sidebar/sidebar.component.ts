import { Component, OnInit } from '@angular/core';
import { Shared } from 'src/app/interface/shared.interface';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .navlink {
        background: #9c27b0;
      }

      .navlink,li,a {
        color: white
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

shared: Shared | undefined 

  constructor(private fservices: FirebaseDataService) { 
    fservices.getShared()
    .subscribe((respuesta) => {
      console.log(respuesta);
      this.shared =respuesta;
    })
  }

  ngOnInit(): void {
  }

}
