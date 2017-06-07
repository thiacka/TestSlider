import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{
		path:'',
		component: HomeComponent
	},
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'gallery',
		component: GalleryComponent
	},
	{
		path:'contact',
		component: ContactComponent
	}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);