import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-auth-callback',
	templateUrl: './auth-callback.component.html',
	styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) {
	}

	ngOnInit() {
		this.authService.completeAuthentication().then(() => {
			const returnUrl = sessionStorage.getItem('returnUrl');
			this.router.navigateByUrl(returnUrl);
			sessionStorage.removeItem('returnUrl');
		});
	}

}
