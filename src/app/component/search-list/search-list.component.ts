import { Component } from '@angular/core'
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { HttpService } from '../../server/http.service'


import * as MOCKDATA from '../../../../_mock'
import * as Mock from 'mockjs'


@Component({
	selector:'ne-form',
	templateUrl:'./search-list.component.html',
	styleUrls:['./search-list.component.css'],
	providers:[HttpService]
})
export class SearchListComponent{
	public data;
	public error = "错误"
	public url = "api/search"
	constructor(private http:HttpService){	
	}
	search(){
		Mock.mock(/api/,MOCKDATA.LISTDATA.tableData) //截取了http请求 设置了返回值数据
		this.http.getjson(this.url).subscribe((res) =>{this.data=res}) //结合上句 返回值被修改
	}
}