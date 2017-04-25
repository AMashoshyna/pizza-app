import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  private running: boolean;
  private ctx: any;
  private img: any;
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(myCanvas: ElementRef) {
  }

  rotate() {
    if (!this.running) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    this.ctx.rotate(Math.PI / 180);
    this.ctx.translate(-this.canvasWidth / 2, -this.canvasHeight / 2);
    this.ctx.drawImage(this.img, this.canvasWidth / 2 - this.img.width / 2,
      this.canvasHeight / 2 - this.img.height / 2);
    requestAnimationFrame(() => this.rotate());

  }

  ngOnInit() {
    this.running = true;
    this.ctx = CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
    this.img = new Image();
    this.canvasWidth = this.canvasRef.nativeElement.width;
    this.canvasHeight = this.canvasRef.nativeElement.height;
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.canvasWidth / 2 - this.img.width / 2,
        this.canvasHeight / 2 - this.img.height / 2);
    }
    this.img.src = './../../../assets/pizzas/pepperoni-pizza.png';
    this.rotate();

  }
  ngOnDestroy() {
    this.running = false;
  }

}
