import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../shared/services';
import { Funcionario } from '../../../shared';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService) { }

  funcionarioId:string;
  funcionario :Funcionario;

  ngOnInit() {
    this.funcionarioId = this.route.snapshot.paramMap.get('funcionarioId');
    console.log(this.funcionarioId)
    this.obterDadosFuncionario()
  }

  obterDadosFuncionario() {
    this.funcionarioService.getFuncionario(this.funcionarioId).subscribe( (data) => {
      this.funcionario = (data.data as Funcionario)
    })
  }

}
