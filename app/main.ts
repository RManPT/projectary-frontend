// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

export const API= { 'url': 'http://192.168.1.191:8080' };