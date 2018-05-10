import * as Mock from 'mockjs'

var Random = Mock.Random;

export const CHARTS = Mock.mock({
	    'chartData|10': [{
	        number: ()=>Random.natural(1000,5000),
	        country: ()=>Random.city()
	    }]
	});