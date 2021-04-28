import { Injectable } from '@angular/core';
import {resultats} from '../assets/data/resultat.json';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private resultat: any[] = resultats;
  constructor() { }

  public getAll(): any[]{
    return this.resultat;
  }

  public findmax(): number{
    let max = 0;
    for (let result of this.resultat){
      if (result.enfant > max) {
        max = result.enfant;
      }
    }
    return  max;
  }

  public getTopEnfant(): any[]{
    let returnresult: any[] = [];
    let max = this.findmax();
    let i = 0;
    for (let result of this.resultat){
      if (result.enfant === max) {
        returnresult[i] = result;
        i = i + 1;
      }
    }
    return(returnresult);
  }
}
