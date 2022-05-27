import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProdouct().subscribe((res: any) => {
      this.products = res;
      this.products.splice(8);
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error.message)
    })
  }
  showAll(){
    this.loading = true;
    this.service.getAllProdouct().subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error.message)
    })
  }
  showLesss(){
    this.loading = true;
    this.service.getAllProdouct().subscribe((res: any) => {
      this.products = res;
      this.products.splice(4);
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error.message)
    })
  }
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((res: any) => {
      this.categories = res;
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error.message)
    })
  }
  filterCategory(event: any) {
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductCatgory(value)
  }
  getProductCatgory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false;
      this.products = res
    })
  }
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if (exist) {
        alert("product is already added")
      } else {
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
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
