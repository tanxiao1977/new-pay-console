import { NgModule } from '@angular/core'
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutDefaultComponent } from './default/default.component'
import { HeaderComponent } from './default/header/header.component'
import { HeaderUserComponent } from './default/header/components/user.component'
import { SiderbarComponent } from './default/sidebar/sidebar.component'
import { ComponentModule } from '../component/component.module'
import { routing } from './layout.routing'
@NgModule({
	declarations:[LayoutDefaultComponent,HeaderComponent,HeaderUserComponent,SiderbarComponent],
	imports:[NgZorroAntdModule,ComponentModule,routing],
	exports:[]
})
export class LayoutModule{

}