import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { APP_BASE_HREF }        from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';

import { AppComponent }         from './app.component';
import { SobreComponent }       from './institucional/sobre/sobre.component';
import { ContatoComponent }     from './institucional/contato/contato.component';
import { HomeComponent }        from './navegacao/home/home.component';
import { rootRouterConfig }     from './app.routes';
import { MenuComponent }        from './navegacao/menu/menu.component';
import { FooterComponent }      from './navegacao/footer/footer.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService }       from './produtos/produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false } )]
  ],
  providers:
  [
    ProdutoService, 
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }