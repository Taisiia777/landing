import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OverviewCard } from '../restaurentModel';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit, OnChanges {
  @Input() card: OverviewCard;
  backColor: string//= 'linear-gradient(256deg, #65afc4 0%, #88c0d0 100%)';
  subTitleColor:string;
  countbgcolor:string;
  constructor() {
  }

  ngOnChanges() {
    this.backColor = this.card.bgColor ? this.card.bgColor : 'linear-gradient(256deg, #65afc4 0%, #88c0d0 100%)';
    this.subTitleColor = this.card.secColor ? this.card.secColor : '#dcf2f9';
    this.countbgcolor = this.card.tertColor ? this.card.tertColor : '#ebcb8b';
  }

  ngOnInit(): void {

    // this.changeTheme();
  }



  bgColor() {
    console.log(this.card.bgColor)
    return this.card.bgColor;//|| 'linear-gradient(256deg, #65afc4 0%, #88c0d0 100%)';
  }
}
