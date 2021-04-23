import { Injectable } from '@angular/core';
import {liste} from '../assets/data/resultat.json';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private resultat: any[] = liste;
  constructor() { }

  public getAll(): any[]{
    return this.resultat;
  }

  public findmax(): number{
    let max: number = 0;
    for(let result of this.resultat){
      if(result.enfant > max) {
        max = result.enfant;
      }
    }
    return  max;
  }

  public getTopEnfant(): any[]{
    let returnresult: any[] = [];
    let max: number = this.findmax();
    let i: number = 0;
    for(let result of this.resultat){
      if(result.enfant = max) {
        returnresult[i] = result.localite;
        i= i + 1;
      }
    }
    return returnresult;
  }
}
