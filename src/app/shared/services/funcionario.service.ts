import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment as env } from '../../../environments/environment';
import { HttpUtilService } from './http-util.service';
import { Funcionario } from '..';



@Injectable()
export class FuncionarioService {

  private readonly PATH: string = 'api/funcionario';

  constructor(
  	private http: HttpClient,
  	private httpUtil: HttpUtilService) { }

  listarFuncionarios(): Observable<any> {
  	return this.http.get(
  	  	env.baseApiUrl + this.PATH,
  	  	this.httpUtil.headers()
  	);
  }

  getFuncionario(id): Observable<any> {
	return this.http.get(
		env.baseApiUrl + this.PATH + "/"+id,
		this.httpUtil.headers()
  	);
  }

}








