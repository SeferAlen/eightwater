import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { animate, style } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})

export class AppComponent {

  defaultLanguage: string;
  languageList = [   
  { code: 'bs', label: 'Bosnian' }, 
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutch' },
  { code: 'ar', label: 'Arabian' }
  ]

  constructor(private translate: TranslateService) {

        this.defaultLanguage = localStorage.getItem("lang");
        if (this.defaultLanguage == null) {
          localStorage.setItem("lang", "en");
          translate.setDefaultLang('en');
        } else {
          translate.setDefaultLang(this.defaultLanguage);
        }
        
    }

    useLanguage(language: string) {
    console.log("useLanguage("+language+")");  
    localStorage.setItem("lang", language);
    this.translate.use(language);
    }

    changeLanguageHander(lang: string) {
    this.useLanguage(lang);
  }

  prepareRoute(outlet: RouterOutlet) {
  return outlet && 
    outlet.activatedRouteData && 
    outlet.activatedRouteData['animationState'];
 }
}
