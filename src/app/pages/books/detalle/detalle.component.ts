import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BookServicesService } from 'src/app/servicios/book/book-services.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
id :any;
Book:any;

  constructor(private bookservice: BookServicesService,private activeRoute:ActivatedRoute) {
    this.id = activeRoute.snapshot.paramMap.get('id');
   

    this.bookservice.GetById(this.id).subscribe((Response) => {
      this.Book = Response;
    });
   }

  ngOnInit(): void {
  }


}
