import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;

  constructor() { }

  ngOnInit() {
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    let img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 150, 150, 100, 100);
    }

    img.src = './../../../assets/pizzas/pepperoni-pizza.png';

  }

}
