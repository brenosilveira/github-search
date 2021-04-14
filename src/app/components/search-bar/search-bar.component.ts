import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/user/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [SearchService]
})
export class SearchBarComponent implements OnInit {

  @Input() public state: any

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void { }

  async search(termSearch: string): Promise<any> {
    try {
      const result = await this.searchService.searchUser(termSearch)
      if(this.router.url === '/result'){
        return this.router.navigate(['/result'], { state: result });

      }

      return this.router.navigate(['/result'], { state: result });
    } catch (error) {
      return this.router.navigate(['/not-found']);
    }
  }
}
