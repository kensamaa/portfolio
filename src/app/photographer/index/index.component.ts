import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  
  profile : any = {
                  logo:"logo.png",
                  profile:"photographer"
            };
            
   member : any = {
        image:"",
        logo:"pic1.jpg",
        designation:"photographer",
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
        profile:"photographer"
  };

  constructor() { }
  

  ngOnInit(): void {
  }

}
