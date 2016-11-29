import {Component, Input, ElementRef, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'ud-expandable-list-item',
  templateUrl: './expandable-list-item.component.html',
  styles: [`.block {
  overflow: hidden;
  -webkit-animation: height 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: height 1s; /* Firefox < 16 */
  -ms-animation: height 1s; /* Internet Explorer */
  -o-animation: height 1s; /* Opera < 12.1 */
  animation: height 1s;
  background-color: ;
}
@keyframes height {
  from { height:0px; }
  to   { height: 200px; }
}

/* Firefox < 16 */
@-moz-keyframes height {
  from { height:0px; }
  to   { height: 20px; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes height {
  from { height:0px; }
  to   { height: 50px; }
}

/* Internet Explorer */
@-ms-keyframes height {
  from { height:0px; }
  to   { height: 50px; }
}

/* Opera < 12.1 */
@-o-keyframes height {
  from { height:0px; }
  to   { height: 50px; }
}
.outer{
  width:100%;
  text-align:center;
}

.inner{
  display:inline-block;
  *display:inline;/* IE*/
  *zoom:1;/* IE*/
  overflow:hidden;
  text-align:left;
}
td, th {
padding: 10px;
}

  `]
})
export class ExpandableListItemComponent implements AfterViewChecked{

  @Input() tripDetail:any;

  isDone:boolean;

  constructor(private elementRef : ElementRef){
      console.log("new");
      this.isDone = false;
  }

  ngAfterViewChecked(){
    console.log(this.isDone);
    if(!this.isDone) {

      var mapcanvas: any = this.elementRef.nativeElement.getElementsByClassName('fake_map')[0];
      var ctx = mapcanvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        console.log("Done");
      };
      img.src = 'assets/img/map.png';
      this.isDone = true;
    }
  }

}
