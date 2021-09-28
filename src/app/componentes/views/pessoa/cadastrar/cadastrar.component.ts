import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  id!: number;
  nome!: string;
  idade!: number;
  altura!: number;
  cpf!: string;
  email!: string;

  constructor(private service : PessoaService, private router: Router) { }

  ngOnInit(): void {}

  create(): void {
    let pessoa: Pessoa = {
        nome: this.nome,
        idade: this.idade,
        altura: this.altura,
        cpf: this.cpf,
        email: this.email,
    };
    this.service.create(pessoa).subscribe((pessoa) => {
        this.router.navigate(["pessoa/listar"]);
    });
  }
}
