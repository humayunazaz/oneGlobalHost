import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  @Input() title:string;
  ds:number;
  ngOnInit() {
    this.accountService.packageValue.subscribe(
      data => {
        this.ds = data;
      }
    )
  }

}
