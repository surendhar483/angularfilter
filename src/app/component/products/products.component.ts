import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
   constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      
      this.productList = res.products;
      console.log(this.productList)

      this.filterCategory = res.products;

      this.productList.forEach((a:any) => {
       
        if(a.category
          ==="makeupKit" || a.category
          ==="men's clothing"){
          a.category
          ="Vegetable"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
 
  
  
  }

