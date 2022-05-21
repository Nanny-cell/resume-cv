import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About, Contact, Resume, Shared } from '../interface/shared.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  private apiURL: string = 'https://resume-cv-78755-default-rtdb.firebaseio.com/data'

  constructor(private http: HttpClient) { }

  getAbout(): Observable<About>{
    const url = `${ this.apiURL }/about.json`
    return this.http.get<About>(url);
  }

  getContact(): Observable<Contact>{
    const url = `${ this.apiURL }/contact.json`
    return this.http.get<Contact>(url);

  }

  getResume(): Observable<Resume[]>{
    const url = `${ this.apiURL }/resume.json`
    return this.http.get<Resume[]>(url);
  }

  getShared(): Observable<Shared>{
    const url = `${ this.apiURL }/shared.json`
    return this.http.get<Shared>(url);
  }
}
