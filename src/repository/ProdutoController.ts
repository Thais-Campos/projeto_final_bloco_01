import { Produto } from "../model/Produto";
import { ProdutoRepository } from "./ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Produto[] = [];

  procurarPorCodigo(codigo: number): Produto | undefined {
    return this.listaProdutos.find(p => p.getCodigo() === codigo);
  }

  listarTodos(): void {
    for (let produto of this.listaProdutos) {
      produto.visualizar();
    }
  }

  cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("\nProduto cadastrado com sucesso!");
  }

  atualizar(produto: Produto): void {
    const index = this.listaProdutos.findIndex(p => p.getCodigo() === produto.getCodigo());
    if (index !== -1) {
      this.listaProdutos[index] = produto;
      console.log("\nProduto atualizado com sucesso!");
    } else {
      console.log("\nProduto nao encontrado.");
    }
  }

  deletar(codigo: number): void {
    const index = this.listaProdutos.findIndex(p => p.getCodigo() === codigo);
    if (index !== -1) {
      this.listaProdutos.splice(index, 1);
      console.log("\nProduto deletado com sucesso!");
    } else {
      console.log("\nProduto nao encontrado.");
    }
  }
}
