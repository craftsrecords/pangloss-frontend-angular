import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title : String = 'Pangloss';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    /*cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { title: 'Card 1', cols: 1, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 2 },
            { title: 'Card 3', cols: 1, rows: 3 }
          ];
        }
  
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 2, rows: 1 },
          { title: 'Card 3', cols: 3, rows: 1 }
        ];
      })
    );*/

    cards = of([
      { title: 'Game Consoles', cols: 1, rows: 1, img: 'assets/images/gameconsoles.jpg' },
      { title: 'Phones', cols: 1, rows: 1, img: 'assets/images/phones.jpg'  },
      { title: 'Books', cols: 1, rows: 1, img: 'assets/images/books.jpg'  }]);

  constructor(private breakpointObserver: BreakpointObserver, private sanitizer: DomSanitizer) {}
}
