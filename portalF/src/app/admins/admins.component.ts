import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  same: boolean=false
  @Input() 
  AdminsList:any=[];
  AdminsId:string;
  AdminsUsername:string;
  AdminsPassword:string;
  AdminsUsernameFilter: string;
  AdminsPasswordFilter: string;
  AdminsListWithoutFilter:any=[];

  @Output() newItemEvent = new EventEmitter<boolean>();



  ngOnInit(): void {
    this.refreshAdminsList();
  }

  refreshAdminsList(){
    this.service.getAdmList().subscribe(data=>{
      this.AdminsList=data;
      this.AdminsListWithoutFilter=data;
    });
  }

  SubmitFn(){
    var  AdminsUsernameFilter = this.AdminsUsernameFilter;
    var  AdminsPasswordFilter = this.AdminsPasswordFilter;

    this.AdminsList.forEach((x) => { 
      if(x.AdminsUsername==AdminsUsernameFilter && x.AdminsPassword==AdminsPasswordFilter) 
       { 
         alert("You are logged as an admin. Now you can edit or add news"); 
         this.newItemEvent.emit(true);
       }
      else {
        return 0;
      }
  }) 
  }
}

