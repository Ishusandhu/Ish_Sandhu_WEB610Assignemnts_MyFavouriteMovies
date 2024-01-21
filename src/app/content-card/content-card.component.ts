import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
imports:[],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent{
 Movies:ContentList=new ContentList();
  constructor(){
    this.Movies.add({
      id:1,
      title:'The Shawshank Redemption',
      description:"dfdfdfdsf",
      creator:"dfsgg",
      imgUrl:"https://image.tmdb.org/t/p/original/y3ULnBxPeEsUmgK2hSvFkzkIpYF.jpg"
    })
    this.Movies.add({
       id:2,
      title:'',
       description:"dfdfdfdsf",
       creator:"dfsgg",
       imgUrl:""
     }),
     this.Movies.add({
      id:3,
     title:'The Shwshank Redemption',
      description:"dfdfdfdsf",
      creator:"dfsgg",
      imgUrl:""
    }) 
   }
    

}
