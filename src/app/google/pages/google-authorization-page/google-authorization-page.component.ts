import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleTokenService } from '../../google-token.service';

@Component({
  selector: 'app-google-authorization-page',
  templateUrl: './google-authorization-page.component.html',
  styleUrls: ['./google-authorization-page.component.scss'],
})
export class GoogleAuthorizationPageComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(
    private readonly tokenService: GoogleTokenService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const queryString = this.route.snapshot.queryParams;
    if (queryString['error']) {
      this.errorMessage = queryString['error'];
    } else if (queryString['code']) {
      this.tokenService
        .requestAccessToken(queryString['code'])
        .subscribe((result) => {
          if (result) {
            const state = new URLSearchParams(queryString['state']);
            this.router.navigateByUrl(state.get('internal_redirect_uri')!);
          } else {
            this.errorMessage = 'Unknow Error !!!';
          }
        });
    }
  }
}
