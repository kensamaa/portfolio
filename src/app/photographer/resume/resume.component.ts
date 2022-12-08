import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black.png",
                  profile:"photographer"
            };

  page_banner : any = {
        title:"Resume",
        profile:"photographer",
  };
  
  member : any = {
        image:"user-img.jpg",
        logo:"",
        designation:"",
        age:"29",
        dob:"01.07.1990",
        residence:"USA",
        address:"AVE 11, NEW YORK, USA",
        email:"INFO@EXAMPLE.COM",
        phone:"(+01) 123 456 7890",
        skype:"ALEX.SMITH",
        whatsapp:"",
        about_me:"Hi! My name is <span class='text-primary'>Thomas Grady</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.",
        intrests:"PLAYSTATION, READING",
        name:"Thomas Grady",
        study:"UNIVERSITY OF CHICAGO",
        highes_degree:"MASTER",
        profile:"photographer"
  };
  
  skills : any = [
                  {
                    title:"Creativity",
                    score:"60",
                  },
                  {
                    title:"photography",
                    score:"45",
                  },
                  {
                    title:"editing",
                    score:"75",
                  },
                  {
                    title:"Team working",
                    score:"95",
                  },

              ];
  
  education : any = [
                  {
                    title:"Fronted Development",
                    year:"2019",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
                  {
                    title:"Graphic Design",
                    year:"2014",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
                  {
                    title:"Senior Ui/Ux Designer",
                    year:"2012",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
                  {
                    title:"Junior Ui/Ux Designer",
                    year:"2011",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
              ];
  experience : any = [
                  {
                    title:"Fronted Development",
                    year:"2019",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
                  {
                    title:"Graphic Design",
                    year:"2014",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
              ];
  language_known : any = [
                  {
                    title:"English",
                    score:"60",
                  },
                  {
                    title:"French",
                    score:"45",
                  },
                  {
                    title:"German",
                    score:"75",
                  },
                  {
                    title:"Italian",
                    score:"95",
                  },

              ];
  
  knowledge: any = [
              "Website hosting",
              "iOS and android apps",
              "Create logo design",
              "Design for print",
              "Modern and mobile-ready",
              "Advertising services include",
              "Graphics and animations",
              "Search engine marketing",
              ]


  constructor() { }

  ngOnInit(): void {
  }

  


}