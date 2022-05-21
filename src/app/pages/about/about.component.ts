import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';
import { About, Data, Shared } from '../../interface/shared.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  about: About | undefined;
 

  constructor(private fservices: FirebaseDataService) { 
    fservices.getAbout()
    .subscribe((data)=>{
      this.about = data;
    })
  }

  ngOnInit(): void {
  }


}
