import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Injectable()
export class HeroesService {

  heroesURL = 'https://heroesapp-36f40.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-36f40.firebaseio.com/heroes/';

  constructor( private http: Http ) { }

  nuevoHeroe( heroe: Heroe ) {
    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type' : 'aplication/json'
    });

    return this.http.post( this.heroesURL, body, { headers } )
            .map( res => {
             console.log(res.json());
             return res.json();
           });
  }
  actualizarHeroe( heroe: Heroe, key$: string ) {
    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type' : 'aplication/json'
    });

    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
            .map( res => {
             console.log(res.json());
             return res.json();
           });
  }

  getHeroe(key$: string) {
    const url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get( url )
    .map ( res => res.json() );
  }
  getHeroes() {
    return this.http.get( this.heroesURL )
    .map ( res => res.json() );
  }
}
