import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as listeresultats from '../../assets/data/resultat.json';
import {ResultatService} from '../resultat.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  columnsToDisplay = ['localite', 'total', 'enfant', 'adulte', 'aine'];
  dataSource = new MatTableDataSource<ResultatService>(this.resultatService.getAll());
  localNUM: number = this.resultatService.getTopEnfant().length;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private resultatService: ResultatService) { }
  ngOnInit(): void {
  }
  getTopEnfants(): any[]{
    return this.resultatService.getTopEnfant();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
