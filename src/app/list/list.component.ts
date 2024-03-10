import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListSource } from '../models/enums';
import { IGoTo } from '../models/igo-to';
import { URLs } from '../data/url-list';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listSource = ListSource;
  pageSource: ListSource = ListSource.AllItems;
  calledFrom: string = "All Lists";
  results: IGoTo[] = [];

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(params => {
      let _calledFrom = params[0].path;
      this.calledFrom = _calledFrom;
      this.pageSource = this.getSourceForPage(_calledFrom);
      this.results = URLs;
    });
  }

  private getSourceForPage(calledFrom: string) {
    switch (calledFrom) {
      case 'search': return ListSource.Search;
      case 'my-links': return ListSource.MyLinks;
      case 'favorites': return ListSource.Favorites;
      case 'list':
      default: return ListSource.AllItems;
    }
  }

}
