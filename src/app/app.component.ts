import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokemon';
  // mouseMove = false;
  // constructor(private el: ElementRef) {}

  // get tooltip() {
  //   return this.el.nativeElement.querySelector('.sites-circle');
  // }

  // enter() {
  //   this.tooltip.classList.add('show');
  // }
  // mouseStopped() {
  //   this.mouseMove = false;

  //   // this.tooltip.classList.add('onMove');
  //   // the actual function that is called
  //   // console.log('mousemove: ' + this.mouseMove);
  // }
  // move(e: { pageX: number; pageY: number }) {
  //   this.mouseMove = true;
  //   // console.log('mousemove: ' + this.mouseMove);

  //   //  this.tooltip.classList.add('onMove');

  //   var timer;
  //   clearTimeout(timer);
  //   timer = setTimeout(this.mouseStopped, 300);

  //   const tooltipStyle = this.tooltip.style;

  //   tooltipStyle.left = e.pageX + 'px';
  //   tooltipStyle.top = e.pageY + 'px';
  // }

  // leave() {
  //   this.tooltip.classList.remove('show');
  // }
}
