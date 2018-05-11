import { Component,OnInit,AfterViewInit } from '@angular/core'
import { NgxEchartsService } from 'ngx-echarts';


const CHART_OPTIONS = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: 'Counters',
    type: 'bar',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
};
@Component({
	selector:"ne-echarts",
	templateUrl:"./echart.component.html",
	providers:[NgxEchartsService]
})
export class EchartComponent implements AfterViewInit{
  options = CHART_OPTIONS;	

  constructor(private nes:NgxEchartsService) { 
    
  }

  ngAfterViewInit() {
  setTimeout(() => {
      // Method 1: Use global echarts object:
      const echarts = this.nes.echarts;
      const chartElement1 = document.getElementById('chart1');
      // const chartElement2 = document.getElementById('chart2');
      const chart1 = echarts.getInstanceByDom(chartElement1);
      // const chart2 = echarts.getInstanceByDom(chartElement2); 
      echarts.connect([chart1]);	
  })
  }	

}
