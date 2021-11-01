import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/user/search.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [SearchService]
})
export class SearchBarComponent implements OnInit {

  termSearch = new FormControl('', [Validators.required, Validators.minLength(1)])

  constructor( private router: Router) { }

  ngOnInit(): void {

  }

  search() {

    if(this.termSearch.invalid || this.termSearch.value.trim() === '') {
      return;
    }
    this.router.navigate([`/result/${this.termSearch.value}`]);
    this.termSearch.reset()
  }
}
