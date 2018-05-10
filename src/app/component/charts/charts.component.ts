import { Component,OnInit,AfterViewInit,ViewChildren,QueryList,OnChanges,DoCheck,SimpleChanges,OnDestroy,AfterViewChecked,Input,ChangeDetectionStrategy,ChangeDetectorRef,NgZone} from '@angular/core'
import { D3Component } from './d3/d3.component'

import { Observable} from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
// import { of } from 'rxjs/observable/of'
import * as Rx from 'rxjs';
import * as MOCKDATA from '../../../../_mock'
import { HttpService } from '../../server/http.service'
import * as Mock from 'mockjs'

@Component({
	selector:'ne-charts',
	template:`<ne-d3-bar [data]="data" [width]="width" [height]="height" [ref]="ref"></ne-d3-bar>`,
	providers:[HttpService],
	// changeDetection:ChangeDetectionStrategy.OnPush
})




export class ChartsComponent implements AfterViewInit,OnChanges,OnInit,DoCheck,OnDestroy{
	@ViewChildren(D3Component)
	private d3Chart:QueryList<D3Component>;

	private timer;
	 url = "/api/chart/d3";
	 width = 1200;
	 height = 500;
	 ref = "test1";
	 data;
	 dataArray = [1,2,3];
	 counts = 0;
	 myObservable;
	 watchMy;
	// public data = MOCKDATA.CHARTS.chartData;

	constructor(private http:HttpService, private cd:ChangeDetectorRef){
	}
	ngAfterViewInit(){
		Mock.mock(/api/,MOCKDATA.CHARTS.chartData) //截取了http请求 设置了返回值数据
		this.http.getjson(this.url).subscribe((res) =>{this.data = res;}) //结合上句 返回值被修改
		/*
			组件重复使用时，id相同时如何判断,使用@ViewChildren获取组件实例，取出id值，比较相同时则提示.
			假装代码在这里:)
		*/
		    // this.cd.markForCheck();
			// this.d3Chart.forEach(function(data){
			// 	data.render()
			// });

		this.timer = setInterval(()=>{
			if(this.data != undefined){
				// this.cd.markForCheck();
				this.d3Chart.forEach(function(data){
					data.render()
				})}
		},6000)
		
		// console.log(this.myObservable)
		// this.myObservable = Rx.Observable.interval(1000).subscribe(res =>{ console.log("timer"+res) })
		// this.myObservable = Rx.Observable.from(this.data).subscribe(res =>{ console.log("res"+res) })			
		// this.timer = setInterval(()=>{
		// 	this.counts++;
		// 	// console.log("counts"+this.counts);
		// },1000)
	};
	ngOnChanges(changes:SimpleChanges){
		console.log("ngOnChanges-parent");
	};
	ngOnInit(){
	};
	ngDoCheck(){

	};
	ngAfterViewChecked(){
		// console.log("ngAfterViewChecked");
		// console.log(this.data);

	};
	ngOnDestroy(){
		// console.log("ngOnDestroy");
		// console.log(this.data);	
	};

}
