import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York",
      "http://www.we-love-new-york.com/wp-content/uploads/2017/05/flynyonair-new-york-helicoptere-vol-one-world-trade-center-300x300.jpg",
      149.99
    ),
    new Place(
      "p2",
      "L'Amour Toujours",
      "A Romantic place in Paris!",
      "https://i.f1g.fr/media/madame/300x300_crop/sites/default/files/img/2018/01/les-adresses-favorites-disabelle-carre-a-paris-musee-du-quai-branly.gif",
      189.99
    ),
    new Place(
      "p3",
      "The Foggy Palace",
      "Not your average city trip!",
      "https://static.tvtropes.org/pmwiki/pub/images/HauntedCastle_7993.jpg",
      99.99
    )
  ];

  constructor() {}

  get places() {
    return [...this._places];
  }
}
