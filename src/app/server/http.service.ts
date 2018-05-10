import { Injectable } from '@angular/core'
import { HttpClient,HttpErrorResponse,HttpResponse } from '@angular/common/http'


@Injectable()

export class HttpService{
	constructor(private http:HttpClient){
	}
	getjson(url){
		return this.http.get(url)

	}
}
