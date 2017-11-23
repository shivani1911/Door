import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'signup', component: SignupFormComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
