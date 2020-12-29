import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'This is my-first-app';
  name= "Si Lam"

  showSecret=false;
  log=[];
  onToggleDetails()
  {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;

  }



}
