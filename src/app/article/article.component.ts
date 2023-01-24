// import { Component } from '@angular/core';
import { Article } from './article.model';
import { Component, HostBinding ,OnInit,Input} from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass ='row';
  @Input()
  article!: Article;
  //  public article: Article; 

  constructor() {
    //  this.article = new Article(
    //   'Angular',
    //   'http://angular.io',10
    // );
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
      ngOnInit() {
       
  } 
 } 

