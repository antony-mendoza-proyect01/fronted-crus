import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/driver';
import {DriverService} from "../../services/driver.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  listDriver: Driver[]=[]
loading : boolean= false;
  constructor(private _driverService: DriverService,
              private toastr: ToastrService   ) { }

  ngOnInit(): void {
    this.getListDrivers();
  }
getListDrivers(){
  this.loading= true;

      this._driverService.getListDrivers().subscribe((data:Driver[])=>{
        this.listDriver =data;
        this.loading= false;
      })
}
deleteDrive(id: number){
    this.loading=true;
    this._driverService.deleteDriver(id).subscribe(()=>{
    this.getListDrivers()
      this.toastr.warning('El producto Eliminado con Exito','Producto Eliminado ')
 })
}
}
