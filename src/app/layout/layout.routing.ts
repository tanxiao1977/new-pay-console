import { Routes,RouterModule } from '@angular/router'

import { ModuleWithProviders } from '@angular/core'
import { SearchListComponent } from '../component/search-list/search-list.component'
import { FormComponent } from '../component/form/form.component'
import { ChartsComponent } from '../component/charts/charts.component'
import { D3Component } from '../component/charts/d3/d3.component'
import { EchartComponent } from '../component/charts/echarts/echart.component'
import { LayoutDefaultComponent } from './default/default.component'

export const routes:Routes = [
		{path:'layout',component:LayoutDefaultComponent,
			children:[		
			{path:'searchlist',component:SearchListComponent},
			{path:'form',component:FormComponent},
			{path:'charts',component:ChartsComponent},
			{path:'echarts',component:EchartComponent},			
			{path:'d3',component:D3Component}
			]
	}

]

export const routing:ModuleWithProviders = RouterModule.forChild(routes)