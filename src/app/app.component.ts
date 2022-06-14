import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Base } from './model/base';
import { LibreriaService } from './services/libreria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['userId', 'title', 'body', 'ver'];

  dataSource = new MatTableDataSource<Base>();



  @ViewChild("LibrosPaginator") paginator: MatPaginator;



  constructor(private libreriaService: LibreriaService,
    private router: Router,

              public route : ActivatedRoute,) { }



    ngOnInit(): void {

      this.libreriaService.lista().subscribe(data =>{

        this.dataSource = new MatTableDataSource(data);

        this.dataSource.paginator = this.paginator;

      });

    }



    applyFilter(event: Event) {

      const filterValue = (event.target as HTMLInputElement).value;

      this.dataSource.filter = filterValue.trim().toLowerCase();

    }
}
