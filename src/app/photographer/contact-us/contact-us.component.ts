import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black.png",
                  profile:"photographer"
            };

  page_banner : any = {
        title:"Contact Us",
        profile:"photographer",
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
