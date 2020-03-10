import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() keyword = new EventEmitter();
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  search(keyword) {
    this.keyword.emit(keyword);
  }
}
