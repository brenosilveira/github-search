import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/user/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public state: any

  constructor(private router: Router, private route: ActivatedRoute, private searchService: SearchService) {
    this.route.params.subscribe(() => {
      this.refresh()
    })
    // if (!this.state) {
    //   this.router.navigateByUrl('/');
    // }
  }

  ngOnInit(): void {
    this.refresh()
  }
  refresh() {
    this.state = this.route.snapshot.data.state
    // this.searchService.searchUser(this.route.snapshot.params.name)
    //   .then((res) => {
    //     this.state = res
    //   })
    //   .catch(error => {
    //     console.error(error)
    //     this.router.navigate(['not-found'])
    //   })
  }

}

