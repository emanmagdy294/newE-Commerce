import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  about: any[] = [];
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) { }
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  ngOnInit(): void {
    this.getAbout()
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
  showAll() {
    this.loading = true;
    this.service.getAllProdouct().subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error.message)
    })
  }
  showLesss() {
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

  getAbout() {
    this.service.getAbout().subscribe((res: any) => {
      this.about = res.data
      console.log(res.data);
      
    },
    (err) => {
      console.log('about', err);

    })
  }
}
