import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-developer-resume',
  templateUrl: './web-developer-resume.component.html',
  styleUrls: ['./web-developer-resume.component.css'],
})
export class WebDeveloperResumeComponent implements OnInit {
  profile: any = {
    logo: 'logo-black-5.png',
    profile: 'web-developer',
  };

  page_banner: any = {
    title: 'Resume',
    profile: 'web-developer',
  };

  member: any = {
    image: 'user-img-9.jpg',
    logo: '',
    designation: '',
    age: '24',
    dob: '05.12.1998',
    residence: 'MAROC',
    address: 'AVE 11, NEW YORK, USA',
    email: ' amineab203@gmail.COM',
    phone: '(+212) 640147304',
    skype: 'amine.ab',
    whatsapp: '(+212) 640147304',
    about_me:
      'Hi! My name is <span class="text-primary">AMIINE ABOUOTHMANE</span>. I am a software engineer, and I\'m very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.',
    intrests: 'GAMING, READING',
    name: 'Amine Abouothmane',
    study: 'EMSI',
    highes_degree: 'software engineer',
    profile: 'developer',
  };

  skills: any = [
    {
      title: 'HTML5',
      score: '70',
    },
    {
      title: 'CSS3',
      score: '90',
    },
    {
      title: 'JavaScript',
      score: '45',
    },
    {
      title: 'UI/UX designer',
      score: '67',
    },
  ];

  education: any = [
    {
      title: 'Fronted Development',
      year: '2019',
      organization_name: 'University of Studies',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
    },
    {
      title: 'Graphic Design',
      year: '2014',
      organization_name: 'University of Studies',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
    },
    {
      title: 'Senior Ui/Ux Designer',
      year: '2012',
      organization_name: 'University of Studies',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
    },
    {
      title: 'Junior Ui/Ux Designer',
      year: '2011',
      organization_name: 'University of Studies',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
    },
  ];
  experience: any = [
    {
      title: 'Fronted Development',
      year: '2019',
      organization_name: 'University of Studies',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
    },
    {
      title: 'Graphic Design',
      year: '2014',
      organization_name: 'University of Studies',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
    },
  ];
  language_known: any = [
    {
      title: 'English',
      score: '80',
    },
    {
      title: 'French',
      score: '70',
    },
    {
      title: 'Arabic',
      score: '100',
    },
  ];

  knowledge: any = [
    'Website hosting',
    'iOS and android apps',
    'Create logo design',
    'Design for print',
    'Modern and mobile-ready',
    'Advertising services include',
    'Graphics and animations',
    'Search engine marketing',
  ];

  constructor() {}

  ngOnInit(): void {}
}
