import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Driver} from "../../interfaces/driver";

@Component({
  selector: 'app-add-edit-driver',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.css']
})
export class AddEditDriverComponent implements OnInit {
 form: FormGroup;
 constructor(private fb: FormBuilder) {
    this.form =this.fb.group({
      lastname:new FormGroup('',Validators.required ),
      firstname:new FormGroup('',Validators.required ),
      ssd:new FormGroup('',Validators.required ),
      adress:new FormGroup('',Validators.required),
      city:new FormGroup('',Validators.required ),
      phone:new FormGroup('',Validators.required ),
      active:new FormGroup('',Validators.required ),
    })
  }

  ngOnInit(): void {
  }
 addDriver(){

    const driver : Driver={
     lastname: this.form.value.lastname,
      firstname: this.form.value.firstname,
      ssd: this.form.value.ssd,
      adress: this.form.value.adress,
      city: this.form.value.city,
      phone: this.form.value.phone,
      active: this.form.value.active,
    }
    console.log(driver)

  }
}
