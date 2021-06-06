import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MdbTablePaginationComponent, MdbTableDirective} from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

const MaterialComponents = [MatTableModule, HttpClientModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule {

}
