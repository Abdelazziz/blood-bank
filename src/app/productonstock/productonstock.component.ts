import { Component, OnInit, Input, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ExportExcelService } from './../services/export-excel.service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { StockslistService } from './../services/stockslist.service';
import { Productlist } from './../models/productlist.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productonstock',
  templateUrl: './productonstock.component.html',
  styleUrls: ['./productonstock.component.css']
})

export class ProductonstockComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  previous: any = [];
  listproduct: Productlist[] = [];
  listproductAll: Productlist[] = [];
  filterResult: Productlist[] = [];

  @Input() noResult: string;

  nSerie: string;
  pname: string;
  dateprelev: Date;
  ville: string;
  selectedObject: any;
  selectOption: any[];
  selecteSerelogie: any;
  selectOptionSerelogie: any[];

  constructor(private exportxls: ExportExcelService,
    private cdRef: ChangeDetectorRef, private stockslistService: StockslistService) {

  }

  @HostListener('keydown.enter', ['$event'])
  handleKeyEnter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.search();
    }
  }

  ngOnInit(): void {
    this.stockslistService.sendGetRequest().subscribe({
      next: (data: any[]) => {
        this.listproduct = data;
        this.mdbTable.setDataSource(this.listproduct);
        this.listproduct = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
        this.listproductAll = this.listproduct;
      },
      error: (err) => {
        Swal.fire('Erreur', 'Atention Vérifier votre serveur!'+err.msg, 'error');
      }
    });
    this.selectOption =
      [{ val: 'D', lab: 'Choisir Groupage' }, { val: 'O+', lab: 'O+' },
      { val: 'O-', lab: 'O Neg' }, { val: 'A+', lab: 'A+' }, { val: 'A-', lab: 'A Neg' },
      { val: 'B+', lab: 'B+' }, { val: 'B-', lab: 'B Neg' }, { val: 'AB+', lab: 'AB+' },
      { val: 'AB-', lab: 'AB Neg' }];
    this.selectOptionSerelogie = [
      { val: 'N', lab: 'Choisir Sero' }, { val: '0', lab: 'Non Faite' }, { val: '1', lab: 'Negatif' }
    ];
    this.reset();
  }

  search(): void {
    /*
    if (this.name && this.pname) {
      this.listproduct = this.listproductAll.filter(u =>
        u.nSerie.toUpperCase().includes(this.name.toUpperCase())
        && u.last_name.toUpperCase().includes(this.pname.toUpperCase())
      );
    } else if (this.name && !this.pname) {
      this.listproduct = this.listproductAll.filter(u =>
        u.first_name.toUpperCase().includes(this.name.toUpperCase())
      );
    }
    else if (!this.name && this.pname) {
      this.listproduct = this.listproductAll.filter(u =>
        u.last_name.toUpperCase().includes(this.pname.toUpperCase())
      );
    } else {
      this.listproduct = this.listproductAll;
    }
    this.ngAfterViewInit();
*/
  }

  reset(): void {
    this.nSerie = '';
    this.pname = '';
    this.dateprelev = new Date();
    this.ville = '';
    this.selectedObject = 'D';
    this.selecteSerelogie = 'N';
  }

  exportxsl(): void {
    this.exportxls.exportAsExcelFile(this.listproduct, 'Produit en stock');
  }


  ngAfterViewInit(): void {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

}
