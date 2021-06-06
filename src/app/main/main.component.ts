import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arraylinkIsClicked: any[];
  noResult: string;
  userinfo = {id : '', password: ''};

  constructor(private authService: AuthService, private router: Router) {
    this.noResult = 'Aucun résultat ne correspond à votre recherche';
  }

  ngOnInit(): void {
    this.resetClickedLink();
    this.userinfo = JSON.parse(localStorage.getItem('User'));
  }

  switchComp(nbr: number): void {
    this.resetClickedLink();
    this.arraylinkIsClicked[nbr] = true;
  }

  resetClickedLink(): void {
    this.arraylinkIsClicked = [false, false, false, false, false, false, false, false, false];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }


}
