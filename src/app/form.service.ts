import { Injectable , OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, } from 'angularfire2/database';
import 'rxjs/add/operator/map';

const newLocal: any = 'url';

@Injectable()
export class FormService  implements OnInit {
  results:string[];
  users$:any
  constructor(private _http:HttpClient , private af:AngularFireDatabase) {
   }
   ngOnInit(){
     this.users$=this.af.database.app.storage('https://basicdemo-c6d18.firebaseio.com/users');
   }
   getData(){
     return this._http.get('http://jsonplaceholder.typicode.com/posts')
     .map(response => response);
   }

   submitForm(data){
     return this.af.list('users').push(data).key;
   }
}
