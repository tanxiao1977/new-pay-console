import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsComponent } from './charts/charts.component'
import { EchartComponent } from './charts/echarts/echart.component'
import { D3Component } from './charts/d3/d3.component'
import { FormComponent } from './form/form.component'
import { SearchListComponent } from './search-list/search-list.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { NgxEchartsModule } from 'ngx-echarts'


@NgModule({
	declarations:[ChartsComponent,FormComponent,SearchListComponent,D3Component,EchartComponent],
	imports:[NgZorroAntdModule,BrowserAnimationsModule,NgxEchartsModule]
})
export class ComponentModule{

}