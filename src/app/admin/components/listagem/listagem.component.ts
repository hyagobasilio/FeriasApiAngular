import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FuncionarioService, HttpUtilService } from '../../../shared';



@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  displayedColumns = ['id', 'nome', 'matricula', 'dataContratacao', 'acoes'];
  dataSource = [];

  constructor(
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private funcionarioService: FuncionarioService,
    private dialog: MatDialog) { }
  
  
  ngOnInit() {
    this.obterFuncionarios();
  }

  visualizar(id) {
    this.router.navigate(["/admin/visualizar/"+id]);
  }
  

  obterFuncionarios() {
    this.funcionarioService.listarFuncionarios()
      .subscribe(
        data => {
          //this.dataSource = (data.data as Funcionario[])
          this.dataSource = data.data;
        },
        err => {
          const msg: string = "Erro obtendo funcionários.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }


}