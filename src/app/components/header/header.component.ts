import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router,
  ) {}

  irParaHome = async () => {
    await this.router.navigate(['']);
  }

  irParaProjetos = async  () => {
    await this.router.navigate(['projetos']);
  }
  protected readonly window = window;
}
