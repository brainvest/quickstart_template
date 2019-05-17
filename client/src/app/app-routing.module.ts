import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DSCRIBE_ROUTES} from 'dscribe';
import {AuthCallbackComponent} from './auth/auth-callback/auth-callback.component';
import {AuthGuard} from './auth/auth.guard';
import {AppComponent} from './app.component';

const routes: Routes = [
	{path: 'auth-callback', component: AuthCallbackComponent},
	{path: 'dscribe', component: AppComponent, canActivate: [AuthGuard], children: DSCRIBE_ROUTES},
	{ path: '**', redirectTo: 'dscribe' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
