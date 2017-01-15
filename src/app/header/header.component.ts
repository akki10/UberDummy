import {Component, OnInit, Optional} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ud-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router){

  }
  onNav(){
    this.router.navigate(['home']);
  }
}
