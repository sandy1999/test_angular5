import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormService } from './form.service';
import { environment } from '../environments/environment';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: AppComponent },
    ]),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule,
    BrowserAnimationsModule
  ],
  providers: [
    FormService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
