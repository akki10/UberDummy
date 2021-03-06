import './polyfills.ts';
import 'hammerjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
