import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  @Input() data;
  languageList;
  language;
  constructor() { }

  ngOnInit() {
    this.languageList = this.data;
    if(localStorage.getItem('language') == null) {
      localStorage.setItem('language', 'en');
    } else {
      this.language = localStorage.getItem('language');
    }
    console.log("Language is " + this.language);
    console.log("Languages are " + this.languageList);
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);;
  }
}
