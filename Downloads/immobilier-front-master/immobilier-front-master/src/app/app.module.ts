import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticlesModule } from './components/articles/articles.module';
 import { TokenInterceptor } from './core/interceptors/auth.interceptor';
import { HeaderComponent } from './core/layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayementComponent } from './components/payement/payement.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
 @NgModule({
  declarations: [
    AppComponent,
    PayementComponent,
    FeedbackComponent
                            
  ],
  imports: [ 
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ArticlesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
