import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '@core/localStorage/local-storage.service';
import {UserModel} from '../../models/UserModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserModel;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.user = this.localStorageService.getUser();
  }

}
