import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor( private _heroesService: HeroesService ) {
    this._heroesService.getHeroes()
        .subscribe( data => {
          console.log(data);
          // tslint:disable-next-line:prefer-const
          // tslint:disable-next-line:forin
          for ( const key$ in data) {
            const h = data[key$];
            h.key$ = key$;
            this.heroes.push( data[key$] );
          }
          console.log( this.heroes);
        });
   }

  ngOnInit() {
  }

}
