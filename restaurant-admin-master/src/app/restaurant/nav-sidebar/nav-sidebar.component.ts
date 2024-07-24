import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {
  items: MenuItem[];
  @Input() display: boolean;
  @Output() closeDisplay = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      items: [{
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/'],
        routerLinkActiveOptions: { exact: true },
        styleClass: "active",
        command: () => {
          this.closeDisplay.emit(false);
        }
      },
      {
        label: 'Orders',
        icon: 'pi pi-shopping-cart',
        routerLink: ['/orders'],
        command: () => {
          this.closeDisplay.emit(false);
        }
      },
      {
        label: 'Promation',
        icon: 'pi pi-money-bill',
        routerLink: ['/promo'],
        command: () => {
          this.closeDisplay.emit(false);
        }
      },
      {
        label: 'Item',
        icon: 'pi pi-tag',
        routerLink: ['/manage-item'],
        command: () => {
          this.closeDisplay.emit(false);
        }
      },
      {
        label: 'Setting',
        icon: 'pi pi-cog'
      }
      ]
    }
    ];
  }
  update() {
    // this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    // this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }
  onHide($event) {
    this.closeDisplay.emit(false)
  }
}
