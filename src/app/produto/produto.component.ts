import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { FrutasService } from '../service/frutas.service'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProdutos: Produto[];
  produto: Produto = new Produto;

  constructor(private frutaService: FrutasService) { }

  ngOnInit(): void {
    this.findAllProdutos();
    window.scroll(0, 0);
  }

  findAllProdutos() {
    this.frutaService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

  cadastrar() {
    this.frutaService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      location.assign('/produto');
    })
  }


}
