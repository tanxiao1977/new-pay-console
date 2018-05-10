import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RoutesModule } from './routes/routes.module'
import { AppComponent } from './app.component';

import { HttpClientModule } from'@angular/common/http'
import { LayoutModule } from './layout/layout.module'
import { ComponentModule } from './component/component.module'


import { NgZorroAntdModule } from 'ng-zorro-antd'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    LayoutModule,
    ComponentModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
