import { Component, OnInit } from '@angular/core';
import { DataSource, CdkHeaderRowDef, CdkColumnDef } from '@angular/cdk';
import {MdSort} from '@angular/material';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  dummy_movie_data = [
    { mid : 1, title : 'Batman vs Superman : Dawn of Justice', director : 'Zack Snyder', producer : 'Christopher Nolan'  },
    { mid : 2, title : 'Resident Evil: Vendetta', director : 'Zack Snyder', producer : 'Christopher Nolan'  },
    { mid : 3, title : 'John Wick : Chapter1', director : 'Zack Snyder', producer : 'Christopher Nolan'  },
    { mid : 4, title : 'John Wick : Chapter2', director : 'Zack Snyder', producer : 'Christopher Nolan'  },
    { mid : 5, title : 'Justice League', director : 'Zack Snyder', producer : 'Christopher Nolan'  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
