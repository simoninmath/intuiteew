import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from "./logo/logo.component";
import { SearchComponent } from './search/search.component';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    imports: [
        CommonModule, 
        LogoComponent,
        SearchComponent
    ]
})

export class HeroSectionComponent {

}
