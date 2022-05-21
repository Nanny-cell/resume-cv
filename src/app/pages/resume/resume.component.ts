import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';
import { Resume } from '../../interface/shared.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styles: [
  ]
})
export class ResumeComponent implements OnInit {

  resume! : Resume[];

  constructor(private fservices: FirebaseDataService) {
    fservices.getResume()
    .subscribe((data)=>{
      this.resume = data;
    })
   }

  ngOnInit(): void {
  }

}
