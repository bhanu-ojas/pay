import { Component, OnInit ,TemplateRef } from '@angular/core';
import { HomeserviceService} from '../homeservice.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataList: any;
  modalRef: BsModalRef;
  userFilter: any = { first_name: '' };
  constructor(private modalService: BsModalService, private homeservice: HomeserviceService) { }
config = {
  class:'modal-dialog-centered modal-lg'
}
  ngOnInit() {
    this.getData();
  }
  getData() {
    interval(10000).pipe(startWith(0),switchMap(() =>
    this.homeservice.getDetails())).subscribe(res => {
      this.dataList= res['data'];
      console.log("BH", this.dataList)
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template ,this.config);
  }
}
