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
    // fontSize: 20
  };

  button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  }

  constructor() { }

  public src: string;

  ngOnInit() {
    this.src = this.image.api + this.image.message;

    if (!navigator.onLine) {
      this.button.text = 'Offline Mode';
      this.button.disabled = true;
    }
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + /* '?size=' + this.image.fontSize + */ '?ts=' + Date.now();
  }
}

class Button {
  text: string;
  disabled: boolean;
  color: string;
}
class CatImage {
  message: string;
  api: string;
  // fontSize: number;
}