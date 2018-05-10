import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsComponent } from './charts/charts.component'
import { D3Component } from './charts/d3/d3.component'
import { FormComponent } from './form/form.component'
import { SearchListComponent } from './search-list/search-list.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'


@NgModule({
	declarations:[ChartsComponent,FormComponent,SearchListComponent,D3Component],
	imports:[NgZorroAntdModule,BrowserAnimationsModule]
})
export class ComponentModule{

}