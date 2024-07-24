import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promation',
  templateUrl: './promation.component.html',
  styleUrls: ['./promation.component.scss']
})
export class PromationComponent implements OnInit {
  vouchers:any;
  statusOptions:any;
  constructor() { }

  ngOnInit(): void {
    let date =new Date()
    this.vouchers=[
      {
        code:'First',
        cartValue:'500',
        value:'250',
        startAt:new Date(),
        endsAt:date.setDate(date.getDate()+1),
        status:'on'
      },
      {
        code:'CORONO100',
        cartValue:'700',
        value:'100',
        startAt:new Date(),
        endsAt:date.setDate(date.getDate()+2),
        status:'on'
      }
    ];
    this.statusOptions=[
      {
        // label:'Available',
        icon: 'pi pi-unlock',
        value:'on'
      },
      {
        // label:'Unavailable',
        icon:'pi pi-lock',
        value:'off'
      }
    ]
  }

}
