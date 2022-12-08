import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './elements/header/header1/header1.component';
import { PageBannerComponent } from './elements/banner/page-banner/page-banner.component';
import { SocialBarComponent } from './elements/social-bar/social-bar.component';
import { MyServicesComponent } from './elements/my-services/my-services.component';
import { FunFactCounterComponent } from './elements/fun-fact-counter/fun-fact-counter.component';
import { TestimonialComponent } from './elements/testimonial/testimonial.component';
import { OurClientComponent } from './elements/our-client/our-client.component';
import { TimelineComponent } from './elements/timeline/timeline.component';
import { CircleComponent } from './elements/progress-bar/circle/circle.component';
import { LineComponent } from './elements/progress-bar/line/line.component';
import { TagsComponent } from './elements/tags/tags.component';
import { IconBoxComponent } from './elements/icon-box/icon-box.component';
import { LoadingComponent } from './elements/loading/loading.component';
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
import { UserCardComponent } from './elements/user-card/user-card.component';
import { CopywriteComponent } from './elements/copywrite/copywrite.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    PageBannerComponent,
    SocialBarComponent,
    MyServicesComponent,
    FunFactCounterComponent,
    TestimonialComponent,
    OurClientComponent,
    TimelineComponent,
    CircleComponent,
    LineComponent,
    TagsComponent,
    IconBoxComponent,
    IndexComponent,
    AboutUsComponent,
    ContactUsComponent,
    PortfolioComponent,
    ResumeComponent,
    LoadingComponent,
    ModalAboutUsComponent,
    ModalContactUsComponent,
    ModalIndexComponent,
    ModalPortfolioComponent,
    ModalResumeComponent,
    SecurityAboutUsComponent,
    SecurityContactUsComponent,
    SecurityIndexComponent,
    SecurityPortfolioComponent,
    SecurityResumeComponent,
    WebDeveloperAboutUsComponent,
    WebDeveloperContactUsComponent,
    WebDeveloperIndexComponent,
    WebDeveloperPortfolioComponent,
    WebDeveloperResumeComponent,
    BlogComponent,
    BlogSingleComponent,
    UserCardComponent,
    CopywriteComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
