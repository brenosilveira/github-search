import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';
import { User } from '../../shared/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ SearchService ]
})
export class ProfileComponent implements OnInit {

  public user: any

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getUser()
      .then(( user: any ) => {
        this.user = user
        console.log(user)
      })
      .catch(( error: any) => {
        console.log(error)
      })
  }

}
