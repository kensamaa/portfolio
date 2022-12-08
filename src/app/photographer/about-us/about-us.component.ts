import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black.png",
                  profile:"photographer"
            };

  page_banner : any = {
        title:"About us",
        profile:"photographer",
  };
            
  page_info : any = {
                title:"What I Do",
                image:"pic1.jpg",
                description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue."
          };

  member : any = {
        image:"",
        logo:"",
        designation:"",
        age:"29",
        dob:"",
        residence:"USA",
        address:"88 SOME STREET, SOME TOW",
        email:"EMAIL@EXAMPLE.COM",
        phone:"+0123 123 456 789",
        skype:"ALEX.SMITH",
        whatsapp:"",
        about_me:"",
        intrests:"",
        name:"",
        study:"",
        highes_degree:"",
        profile:"photographer"
  };
  
          
  services : any = [
                  {
                    title:"Portrait Photographer",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
                  {
                    title:"Engagement photography",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
                  {
                    title:"Commercial photography",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
                  {
                    title:"Personal photography",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
              ];
  fun_facts : any = [
                  {
                    number:"2325",
                    title:"HAPPY CLIENTS",
                  },
                  {
                    number:"7582",
                    title:"WORKING HOURS",
                  },
                  {
                    number:"120",
                    title:"AWARDS WON",
                  },
                  {
                    number:"2000",
                    title:"PROJECTS COMPLETED",
                  },
              ];
  testimonials : any = [
                  {
                    client_name:"Steve Tylor",
                    image:"pic1.jpg",
                    designation:"photographer",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"David Matin",
                    image:"pic3.jpg",
                    designation:"Manager",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"Monica Rodriguez",
                    image:"pic2.jpg",
                    designation:"Client",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"Steve Tylor",
                    image:"pic1.jpg",
                    designation:"photographer",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"David Matin",
                    image:"pic3.jpg",
                    designation:"Manager",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"Monica Rodriguez",
                    image:"pic2.jpg",
                    designation:"Client",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
              ];
  our_clients : any = [
                  {
                    client_title:"",
                    logo:"logo5.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo3.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                   client_title:"",
                    logo:"logo1.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo2.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo6.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo4.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo5.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo6.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo1.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo2.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo6.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo4.jpg",
                    link:"javascript:void(0);",
                  },
              ];
              
  constructor() { }

  ngOnInit(): void {
  }

}
