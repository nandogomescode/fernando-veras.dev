import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  scrollToSection() {
    const element = document.getElementById('targetSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
