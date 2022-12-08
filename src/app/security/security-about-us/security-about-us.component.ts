import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-about-us',
  templateUrl: './security-about-us.component.html',
  styleUrls: ['./security-about-us.component.css']
})
export class SecurityAboutUsComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black-4.png",
                  profile:"security"
            };

  page_banner : any = {
        title:"About us",
        profile:"security",
  };
            
  page_info : any = {
                title:"What I Do",
                image:"pic5.jpg",
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
        name:"Thomas Grady",
        study:"UNIVERSITY OF CHICAGO",
        highes_degree:"MASTER",
        profile:"security"
  };
  
          
  services : any = [
                  {
                    title:"CCTV Design House",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
                  {
                    title:"Fire Alarm Systems",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
                  {
                    title:"Home Automation",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
                  {
                    title:"Surveillance Cam kit",
                    description:"Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam.",
                  },
              ];
  fun_facts : any = [
                  {
                    number:"2325",
                    title:"HAPPY CLIENTS",
                  },
                  {
                    number:"758",
                    title:"WORKING HOURS",
                  },
                  {
                    number:"12",
                    title:"AWARDS WON",
                  },
                  {
                    number:"18",
                    title:"EXPERIENCE",
                  },
              ];
  testimonials : any = [
                  {
                    client_name:"Steve Tylor",
                    image:"pic1.jpg",
                    designation:"Security Guard",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"David Matin",
                    image:"pic3.jpg",
                    designation:"Security Guard",
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
                    designation:"Security Guard",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"David Matin",
                    image:"pic3.jpg",
                    designation:"Security Guard",
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
