import { Component, OnInit } from '@angular/core';
import * as listeresultats from '../../assets/data/resultat.json';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  resultats: any = (listeresultats as any).default;
  ngOnInit(): void {
  }

}