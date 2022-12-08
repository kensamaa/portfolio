import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-modal-index',
  templateUrl: './modal-index.component.html',
  styleUrls: ['./modal-index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalIndexComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-3.png",
                  profile:"modal"
            };
            
   member : any = {
        image:"",
        logo:"pic3.jpg",
        designation:"brand MODEL",
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
        name:"ELLA GRADY",
        study:"",
        highes_degree:"",
        profile:"modal"
  };


  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      
      /* setTimeout(function(){ */
        jQuery("#kenburn").slippry({
           transition: 'kenburns',
           useCSS: false,
           speed: 3000,
           pause: 3000,
           auto: true,
           kenZoom: 105,
           preload: 'visible',
           autoHover: false
        });
      /* }, 500);   */
        
        
    })(jQuery);
  
  }

}
