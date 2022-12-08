import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-modal-contact-us',
  templateUrl: './modal-contact-us.component.html',
  styleUrls: ['./modal-contact-us.component.css']
})
export class ModalContactUsComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black-3.png",
                  profile:"modal"
            };

  page_banner : any = {
        title:"Contact Us",
        profile:"modal",
  };

  constructor() { }

    ngOnInit(): void {
      (function ($) {
        setTimeout(function(){
            if(jQuery('.dezPlaceAni').length) {
            
              $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus',function(){
                $(this).parents('.form-group, .news-box').addClass('focused');
              });
              
              $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur',function(){
                var inputValue = $(this).val();
                if ( inputValue == "" ) {
                $(this).removeClass('filled');
                $(this).parents('.form-group, .news-box').removeClass('focused');  
                } else {
                $(this).addClass('filled');
                }
              })
            }
        }, 500);
      })(jQuery);
    
    }

}
