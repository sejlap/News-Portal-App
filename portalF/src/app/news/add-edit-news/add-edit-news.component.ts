import { Component, OnInit,Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.css']
})
export class AddEditNewsComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() news:any;

  NewsId:string;
  NewsTitle:string;
  NewsText:string;
  PhotoFileName:string;
  PhotoFilePath:string;


  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
      this.NewsId=this.news.NewsId;
      this.NewsTitle=this.news.NewsTitle;
      this.NewsText=this.news.NewsText;   
      this.PhotoFileName=this.news.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  }

  addNews(){
    var val = {
                NewsId:this.NewsId,
                NewsTitle:this.NewsTitle,
                NewsText:this.NewsText,
                PhotoFileName:this.PhotoFileName};

    this.service.addNews(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateNews(){
    var val = {NewsId:this.NewsId,
      NewsTitle:this.NewsTitle,
      NewsText:this.NewsText,
      PhotoFileName:this.PhotoFileName};

    this.service.updateNews(val).subscribe(res=>{
    alert(res.toString());
});
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}