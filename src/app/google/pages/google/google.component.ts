import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleTokenService } from '../../google-token.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
})
export class GoogleComponent implements OnInit {
  tokenReady$!: Observable<boolean | null>;
  authorizationLinks$!: Observable<string>;

  constructor(private readonly TokenService: GoogleTokenService) {}

  ngOnInit(): void {
    this.tokenReady$ = this.TokenService.tokenReady$;
    this.authorizationLinks$ = this.TokenService.getAuthorizationLink();
  }
}
