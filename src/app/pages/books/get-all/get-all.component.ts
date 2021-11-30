import { Component, OnInit } from '@angular/core';
import { BookServicesService } from 'src/app/servicios/book/book-services.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  Books: any;
  public page: number = 1;

  constructor(private bookservices: BookServicesService) { }

  ngOnInit(): void {
    this.bookservices.GetAll().subscribe(response => {
      this.Books = response;
      console.log(response);
    }, error => {
      alert(console.error);
      
    }
    );
  }

  Borrar(id:any, iControl:any){

    if (window.confirm("Desea Borrar el registo")){
      this.bookservices.Delete(id).subscribe((reponse)=>{
        this.Books.splice(iControl,1);
      }, (error) => {
        alert(console.error);
        
      });
    } 
  }
}
