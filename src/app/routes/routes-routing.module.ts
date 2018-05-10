import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'

import { LayoutDefaultComponent } from '../layout/default/default.component'

import { SearchListComponent } from '../component/search-list/search-list.component'
import { FormComponent } from '../component/form/form.component'
import { ChartsComponent } from '../component/charts/charts.component'

const routes:Routes = [
	{path:'',redirectTo:'layout',pathMatch:'full'}
]

// const routes:Routes = [
// 	{
// 		path:'',component:LayoutDefaultComponent,
// 		children:[
// 			{path:'searchlist',component:SearchListComponent},
// 			{path:'form',component:FormComponent},
// 			{path:'charts',component:ChartsComponent}		
// 		]
// }

// ]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class RoutesRoutingModule{

}