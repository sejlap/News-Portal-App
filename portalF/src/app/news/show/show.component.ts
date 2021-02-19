import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  NewsList:any=[];

  ModalTitle:string;
  ActivateAddEditNewsComp:boolean=false;
  news:any;
  NewsTitleFilter:string="";
  NewsListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshNewsList();
  }

  addClick(){
    this.news={
      NewsId:0,
      NewsTitle:"",
      NewsText:"",
      PhotoFileName:"anonymus.png"
    }
    this.ModalTitle="Add News";
    this.ActivateAddEditNewsComp=true;
  }

  editClick(item){
    console.log(item);
    this.news=item;
    this.ModalTitle="Edit News";
    this.ActivateAddEditNewsComp=true;
  }

  closeClick(){
    this.ActivateAddEditNewsComp=false;
    this.refreshNewsList();
  }


  refreshNewsList(){
    this.service.getNewsList().subscribe(data=>{
      this.NewsList=data;
      this.NewsListWithoutFilter=data;
    });
  }

  SearchFn(){
    var NewsTitleFilter = this.NewsTitleFilter;

    this.NewsList = this.NewsListWithoutFilter.filter(function (el){
        return el.NewsTitle.toString().toLowerCase().includes(
          NewsTitleFilter.toString().trim().toLowerCase()
        )
    });
  }

 



}
