import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BodySectionComponent } from "./body-section/body-section.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { NavSectionComponent } from "./nav-section/nav-section.component";
import { LogoComponent } from './hero-section/logo/logo.component';
import { SearchComponent } from './hero-section/search/search.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        RouterOutlet,
        BodySectionComponent,
        HeroSectionComponent,
        NavSectionComponent,
        LogoComponent,
        SearchComponent
    ]
})

export class AppComponent {
  title = 'Intuiteew';
}
