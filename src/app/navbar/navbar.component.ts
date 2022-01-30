import { AuthService } from './../services/auth.service';
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
  profilImage: any;
  isUser: boolean = false;
  postResponse: any;

  constructor(private tokenStorageService: TokenStorageService , private authService : AuthService) { }

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
    if (this.currentUser && this.isLoggedIn) {
      this.isUser = this.currentUser?.roles?.includes('ROLE_USER');
      let id:number = this.currentUser.id;
      this.authService.viewImageProfil(id).subscribe(
        res => {
          this.postResponse = res;
          this.profilImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );  
    }

    console.log(this.isUser + " et " + this.isLoggedIn);
    console.log(this.currentUser);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
