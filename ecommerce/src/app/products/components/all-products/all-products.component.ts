import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = []
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProdouct().subscribe((res: any) => {
      this.products = res;
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
      if(exist) {
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
}
