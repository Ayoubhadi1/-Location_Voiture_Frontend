import { TokenStorageService } from './../services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showAgentBoard = false;
  username: string | undefined;
  currentUser : any;
  isUser: boolean = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.currentUser = this.tokenStorageService.getUser();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAgentBoard = this.roles.includes('ROLE_AGENT');

      this.username = user.username;
    }
    if (this.currentUser) {
      this.isUser = this.currentUser?.roles?.includes('ROLE_USER');
    }

    console.log(this.isUser + " et " + this.isLoggedIn);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
