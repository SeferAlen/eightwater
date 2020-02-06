import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  @Input() data;
  @Output() langChangeEmit: EventEmitter<String> = new EventEmitter();
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
  }

  changeLanguage(lang: string) {
    this.langChangeEmit.emit(lang);
  }
}
