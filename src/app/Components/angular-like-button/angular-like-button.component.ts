import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-like-button',
  templateUrl: './angular-like-button.component.html',
  styleUrls: ['./angular-like-button.component.css']
})
export class AngularLikeButtonComponent implements OnInit {

  likeValue: number = 100;
  isLiked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  processLikeButtonClick(): void{
    if(this.isLiked == false){
       this.isLiked = true;
       this.likeValue++;
    }else{
      this.isLiked = false;
      this.likeValue--;
    }
  }

}
