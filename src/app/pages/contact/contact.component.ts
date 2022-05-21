import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';
import { Contact } from '../../interface/shared.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contact: Contact | undefined;

  constructor(private fservices: FirebaseDataService) { 
    fservices.getContact()
    .subscribe((data)=>{
      this.contact = data;
    })
  }

  ngOnInit(): void {
  }

}
