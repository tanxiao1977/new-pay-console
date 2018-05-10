import { Component,OnDestroy,Input,OnChanges,SimpleChanges} from '@angular/core'
import { HttpService } from '../../../server/http.service'
import { BarChart } from './bar'

@Component({
	selector:'ne-d3-bar',
	styleUrls:['./d3.component.css'],
	template:`<div id="{{ref}}"></div>`,
	// templateUrl:'./d3.component.html'

})
export class D3Component implements OnChanges{
	@Input() width:number = 900;
	@Input() height:number = 600;
	@Input() ref:string = "bar";
	@Input() data;
	// @Input() data = [];
	// public data = MOCKDATA.CHARTS.chartData;
	private char:BarChart;

	render(){
		this.char = new BarChart(this.data,this.ref,this.width,this.height);
	}
	ngOnChanges(changes:SimpleChanges){
		// console.log("ngOnChanges")
	}
}

