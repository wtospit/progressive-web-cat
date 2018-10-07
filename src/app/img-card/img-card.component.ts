import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontSize: 40
  };

  constructor() { }

  public src: string;

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + '?size=' + this.image.fontSize + '?ts=' + Date.now();
  }

}

class CatImage {
  message: string;
  api: string;
  fontSize: number;
}