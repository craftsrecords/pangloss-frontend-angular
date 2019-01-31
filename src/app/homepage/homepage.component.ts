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

  categories = of([
    { title: 'Game Consoles', cols: 1, rows: 1, img: 'assets/images/categories/gameconsoles.jpg' },
    { title: 'Phones', cols: 1, rows: 1, img: 'assets/images/categories/phones.jpg' },
    { title: 'Books', cols: 1, rows: 1, img: 'assets/images/categories/books.jpg' }]);

  items = of([
    { title: 'XBox', cols: 1, rows: 1, img: 'assets/images/consoles/xbox.jpg' },
    { title: 'XBox360', cols: 1, rows: 1, img: 'assets/images/consoles/xbox360.jpg' },
    { title: 'Nintendo NES', cols: 1, rows: 1, img: 'assets/images/consoles/nes.jpg' },
    { title: 'Nintendo 3DS', cols: 1, rows: 1, img: 'assets/images/consoles/nintendo3ds.jpg' },
  ]);

  constructor(private breakpointObserver: BreakpointObserver, private sanitizer: DomSanitizer) { }
}
