import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carsoul',
  templateUrl: './owl-carsoul.component.html',
  styleUrls: ['./owl-carsoul.component.scss']
})
export class OwlCarsoulComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // owl carsoul
  imgCollection: Array<object> = [
    {
      image: '../../../../assets/images/image1.webp',
      thumbImage: '../../../../assets/images/image1.webp',
      alt: 'lorem ipsum',
      title: 'lorem ipsum'
    }, {
      image: '../../../../assets/images/image2.webp',
      thumbImage: '../../../../assets/images/image2.webp',
      title: 'T-Shirt',
      alt: 'T-Shirt'
    }, {
      image: '../../../../assets/images/image3.webp',
      thumbImage: '../../../../assets/images/image3.webp',
      title: 'Lorem, ipsum',
      alt: 'Lorem, ipsum'
    }, {
      image: '../../../../assets/images/image4.webp',
      thumbImage: '../../../../assets/images/image4.webp',
      title: 'Ipsum Simply',
      alt: 'Ipsum Simply'
    }, {
      image: '../../../../assets/images/image5.webp',
      thumbImage: '../../../../assets/images/image5.webp',
      title: 'lorem',
      alt: 'lorem'
    }, {
      image: '../../../../assets/images/image6.webp',
      thumbImage: '../../../../assets/images/image6.webp',
      title: 'dolor sit',
      alt: 'dolor sit'
    }
    , {
      image: '../../../../assets/images/image7.webp',
      thumbImage: '../../../../assets/images/image7.webp',
      title: 'consectetur adipisicing',
      alt: 'consectetur adipisicing'
    }
  ];
}
