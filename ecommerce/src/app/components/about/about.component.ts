import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // owl carsoul
  imgCollection: Array<object> = [
    {
      image: 'assets/images/c1.webp',
      thumbImage: 'assets/images/c1.webp',
      alt: 'lorem ipsum',
      title: 'lorem ipsum'
    }, {
      image: 'assets/images/c2.webp',
      thumbImage: 'assets/images/c2.webp',
      title: 'T-Shirt',
      alt: 'T-Shirt'
    }, {
      image: 'assets/images/c3.webp',
      thumbImage: 'assets/images/c3.webp',
      title: 'Lorem, ipsum',
      alt: 'Lorem, ipsum'
    }, {
      image: 'assets/images/c4.webp',
      thumbImage: 'assets/images/c4.webp',
      title: 'Ipsum Simply',
      alt: 'Ipsum Simply'
    }, {
      image: 'assets/images/c4.jpg',
      thumbImage: 'assets/images/c4.jpg',
      title: 'lorem',
      alt: 'lorem'
    }, {
      image: 'assets/images/c6.jpg',
      thumbImage: 'assets/images/c6.jpg',
      title: 'dolor sit',
      alt: 'dolor sit'
    }
    , {
      image: '../assets/images/c3.webp',
      thumbImage: '../assets/images/c3.webp',
      title: 'consectetur adipisicing',
      alt: 'consectetur adipisicing'
    }
  ];
}
