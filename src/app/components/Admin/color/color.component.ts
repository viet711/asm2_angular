import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [MessageService, ConfirmationService],

})
export class ColorComponent  {

}
