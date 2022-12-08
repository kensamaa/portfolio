import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-security-index',
  templateUrl: './security-index.component.html',
  styleUrls: ['./security-index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecurityIndexComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-4.png",
                  profile:"security"
            };
            
   member : any = {
        image:"",
        logo:"pic5.jpg",
        designation:"security officer",
        age:"29",
        dob:"",
        residence:"",
        address:"",
        email:"",
        phone:"",
        skype:"",
        whatsapp:"",
        about_me:"",
        intrests:"",
        name:"Thomas Grady",
        study:"",
        highes_degree:"",
        profile:"security"
  };


  constructor() { }

  ngOnInit(): void {
  }

}
