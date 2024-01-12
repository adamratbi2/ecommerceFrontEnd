import {Component, EventEmitter, Output} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText : string | undefined;


  constructor(private productService:ProductService) {
  }

  @Output()
  textChanged = new EventEmitter<string>();

  onTextChange() {
    this.textChanged.emit(this.searchText);
  }
}
