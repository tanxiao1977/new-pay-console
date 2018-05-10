import * as Mock from 'mockjs';
var Random = Mock.Random;
export const LISTDATA = Mock.mock({
	    'tableData|100': [{
	        date: ()=>Random.date(),
	        name: ()=>Random.cname(),
	        address: ()=>Random.county(true)
	    }]
	});