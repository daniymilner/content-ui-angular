import { Component, OnInit } from '@angular/core';
import { IContentService } from '../../interfaces/icontent-service';
import { Observable } from 'rxjs/Observable';
import { ActiveContentService } from '../../services/active-content.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.styl'],
})
export class ListPageComponent implements OnInit {
  private service: IContentService;

  list$: Observable<any>;
  list: Array<any> = [];

  constructor(private activeService: ActiveContentService) {
  }

  ngOnInit() {
    this.service = this.activeService.getActiveService();
    //this.list$ = this.service
    //  .getList(this.service.getServiceKey())
    //  .pipe(
    //    map(res => res.data.list),
    //  );
    this.service
      .getList(this.service.getServiceKey())
      .subscribe((res) => {
        this.list = res.data.list;
        console.log(this.list);
      })
  }
}
