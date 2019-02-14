import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  constructor(private newsService:NewsService) { }
  article;
  ngOnInit() {
    this.article=this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);

  }

}
