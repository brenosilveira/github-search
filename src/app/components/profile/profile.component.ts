import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public state!: User

  constructor() { }

  ngOnInit(): void { }
}
