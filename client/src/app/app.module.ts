import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthCallbackComponent} from './auth/auth-callback/auth-callback.component';
import {DscribeModule} from 'dscribe';

@NgModule({
	declarations: [
		AppComponent,
		AuthCallbackComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DscribeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
