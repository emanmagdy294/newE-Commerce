import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:any[]=[]
  constructor( private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getAllProdouct().subscribe((res:any) => {
     this.products=res
     console.log(res)
    } , error => {
      console.log(error.message)
    }
    )
  }
}
