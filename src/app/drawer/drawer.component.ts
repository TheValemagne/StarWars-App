import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  breakPoint = 900;

  ngOnInit(): void {
  }

  public toggleDrawer(): void {
    this.drawer.mode = (window.innerWidth < this.breakPoint) ? 'over' : 'side';
    this.drawer.toggle();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 900 && this.drawer.opened) {
      this.drawer.mode = 'over';
    } else if (this.drawer.opened) {
      this.drawer.mode = 'side';
    }
  }

  onClick() {
    if (this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }

}
