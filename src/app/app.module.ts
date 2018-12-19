import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FacturaService } from 'src/app/factura.service';
import { ListadoComponent } from './listado/listado.component';
import { AlertsModule } from 'angular-alert-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertsModule.forRoot(),
    NgbModule.forRoot(),
  ],
  providers: [FacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
