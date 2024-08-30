import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  constructor() { }

  welcomeService()
  {
    console.log("Hello custom service");
  }
}
