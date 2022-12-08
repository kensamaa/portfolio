import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './photographer/index/index.component';
import { AboutUsComponent } from './photographer/about-us/about-us.component';
import { ContactUsComponent } from './photographer/contact-us/contact-us.component';
import { PortfolioComponent } from './photographer/portfolio/portfolio.component';
import { ResumeComponent } from './photographer/resume/resume.component';

import { ModalAboutUsComponent } from './modal/modal-about-us/modal-about-us.component';
import { ModalContactUsComponent } from './modal/modal-contact-us/modal-contact-us.component';
import { ModalIndexComponent } from './modal/modal-index/modal-index.component';
import { ModalPortfolioComponent } from './modal/modal-portfolio/modal-portfolio.component';
import { ModalResumeComponent } from './modal/modal-resume/modal-resume.component';
import { SecurityAboutUsComponent } from './security/security-about-us/security-about-us.component';
import { SecurityContactUsComponent } from './security/security-contact-us/security-contact-us.component';
import { SecurityIndexComponent } from './security/security-index/security-index.component';
import { SecurityPortfolioComponent } from './security/security-portfolio/security-portfolio.component';
import { SecurityResumeComponent } from './security/security-resume/security-resume.component';
import { WebDeveloperAboutUsComponent } from './web-developer/web-developer-about-us/web-developer-about-us.component';
import { WebDeveloperContactUsComponent } from './web-developer/web-developer-contact-us/web-developer-contact-us.component';
import { WebDeveloperIndexComponent } from './web-developer/web-developer-index/web-developer-index.component';
import { WebDeveloperPortfolioComponent } from './web-developer/web-developer-portfolio/web-developer-portfolio.component';
import { WebDeveloperResumeComponent } from './web-developer/web-developer-resume/web-developer-resume.component';

import { BlogComponent } from './pages/blog/blog.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: WebDeveloperIndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'index-photographer', component: IndexComponent },
  { path: 'about-us-photographer', component: AboutUsComponent },
  { path: 'contact-us-photographer', component: ContactUsComponent },
  { path: 'portfolio-photographer', component: PortfolioComponent },
  { path: 'resume-photographer', component: ResumeComponent },

  { path: 'about-us-modal', component: ModalAboutUsComponent },
  { path: 'contact-us-modal', component: ModalContactUsComponent },
  { path: 'index-modal', component: ModalIndexComponent },
  { path: 'portfolio-modal', component: ModalPortfolioComponent },
  { path: 'resume-modal', component: ModalResumeComponent },

  { path: 'about-us-security', component: SecurityAboutUsComponent },
  { path: 'contact-us-security', component: SecurityContactUsComponent },
  { path: 'index-security', component: SecurityIndexComponent },
  { path: 'portfolio-security', component: SecurityPortfolioComponent },
  { path: 'resume-security', component: SecurityResumeComponent },

  { path: 'about-us-web-developer', component: WebDeveloperAboutUsComponent },
  {
    path: 'contact-us-web-developer',
    component: WebDeveloperContactUsComponent,
  },
  { path: 'index-web-developer', component: WebDeveloperIndexComponent },
  {
    path: 'portfolio-web-developer',
    component: WebDeveloperPortfolioComponent,
  },
  { path: 'resume-web-developer', component: WebDeveloperResumeComponent },

  { path: 'about-us-web-developer', component: WebDeveloperAboutUsComponent },
  {
    path: 'contact-us-web-developer',
    component: WebDeveloperContactUsComponent,
  },
  { path: 'index-web-developer', component: WebDeveloperIndexComponent },
  {
    path: 'portfolio-web-developer',
    component: WebDeveloperPortfolioComponent,
  },
  { path: 'resume-web-developer', component: WebDeveloperResumeComponent },

  { path: 'blog', component: BlogComponent },
  { path: 'blog-single', component: BlogSingleComponent },

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
