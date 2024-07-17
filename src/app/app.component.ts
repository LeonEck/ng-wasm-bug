import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { codeToHtml } from "shiki";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-wasm-bug';

  constructor() {
    codeToHtml('const a = 1', {
      lang: 'javascript',
      theme: 'vitesse-dark'
    }).then((html) => {
      console.log(html);
    });
  }
}
