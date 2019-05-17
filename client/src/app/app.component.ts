import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {DscribeCommandCallbackInput, DscribeCommandDisplayPredicate, DscribeFeatureArea, DscribeService, ListComponent} from 'dscribe';
import {environment} from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(public authService: AuthService, private dscribeService: DscribeService) {
		this.setupDscribe();
		this.dscribeService.setServerRoot(environment.apiServerRoot);
	}

	private setupDscribe() {
		const clbck = (x: DscribeCommandCallbackInput<ListComponent>) => x.sourceComponent.refreshData();
		const dispPred = (x: DscribeCommandDisplayPredicate<ListComponent>) => x.component.displayMode === 'grid';
		this.dscribeService.setCommands([{
			name: 'refresh',
			title: 'Refresh',
			iconName: 'refresh',
			featureAreas: DscribeFeatureArea.Filter,
			callback: clbck,
			displayPredicate: dispPred
		}, {
			name: 'cart',
			title: 'add to cart',
			iconName: 'add_shopping_cart',
			featureAreas: DscribeFeatureArea.List,
			badge: {
				text: '2'
			},
			callback: clbck,
			displayPredicate: dispPred
		}, {
			name: 'textCommand',
			title: 'Test Text Command',
			featureAreas: DscribeFeatureArea.List,
			badge: {
				text: '3',
				position: 'below after',
				size: 'large',
				color: 'warn'
			},
			callback: clbck,
			displayPredicate: dispPred
		}]);
	}
}
