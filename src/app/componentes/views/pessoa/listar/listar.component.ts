import { PessoaService } from './../../../../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  pessoas: Pessoa[]=[];

  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.service.list().subscribe((pessoas) =>{
      this.pessoas = pessoas;
      console.log(pessoas);
    });
  }
}
