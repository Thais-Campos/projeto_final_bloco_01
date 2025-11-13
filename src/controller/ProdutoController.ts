import { Livro } from "../model/Livro";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class LivroController implements ProdutoRepository {
  private listaLivros: Array<Livro> = new Array<Livro>();

  cadastrar(livro: Livro): void {
    this.listaLivros.push(livro);
    console.log("\nLivro cadastrado com sucesso!");
  }

  listarTodos(): void {
    this.listaLivros.forEach(l => l.visualizar());
  }

  procurarPorCodigo(codigo: number): Livro | undefined {
    const livro = this.listaLivros.find(l => l.getCodigo() === codigo);
    if (livro) livro.visualizar();
    else console.log("\nLivro não encontrado!");
    return livro;
  }

  atualizar(livro: Livro): void {
    const index = this.listaLivros.findIndex(l => l.getCodigo() === livro.getCodigo());
    if (index !== -1) {
      this.listaLivros[index] = livro;
      console.log("\nLivro atualizado com sucesso!");
    } else {
      console.log("\nLivro não encontrado!");
    }
  }

  deletar(codigo: number): void {
    const index = this.listaLivros.findIndex(l => l.getCodigo() === codigo);
    if (index !== -1) {
      this.listaLivros.splice(index, 1);
      console.log("\nLivro removido com sucesso!");
    } else {
      console.log("\nLivro não encontrado!");
    }
  }
}
