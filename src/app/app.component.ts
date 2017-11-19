import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnInit {
  title = 'app';

  testForm: FormGroup;

  result:any;
  constructor(private _form:FormService){}

  ngOnInit(){
    this.testForm = new FormGroup({
      name:new FormControl('',{
        validators:[
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('[a-zA-Z ]*')
        ],
        updateOn:'blur'
      })
    })
    this._form.getData().subscribe(res=>{
      this.result = res;
    });
  }
  get name(){
    return this.testForm.get('name');
  }

  myEvent(){
    if (this.testForm.valid) {
      let formvalue  = this.testForm.value;
      let submitteduser =  this._form.submitForm(formvalue);
      console.log(submitteduser);
    }else
    window.alert('there are some errors in your form please check them and then submit');
  }

}
