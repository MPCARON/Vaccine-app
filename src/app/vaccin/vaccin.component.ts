import { LOCALE_ID, Inject, Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) public locale: string) { }
  MESSAGEFR = 'Formulaire soumis';
  MESSAGEEN = 'Form submitted';
  nom = new FormControl('', [Validators.minLength(1),
    Validators.maxLength(25), Validators.pattern('[a-zA-Z]*')]);
  prenom = new FormControl('', [Validators.minLength(1),
    Validators.maxLength(25), Validators.pattern('[a-zA-Z]*')]);
  telephone = new FormControl('');
  courriel = new FormControl('', [Validators.email]);

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.locale === 'fr') {
      alert(this.MESSAGEFR);
    } else {
      alert(this.MESSAGEEN);
    }
  }

}
