import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  
  procurarPorCodigo(codigo: number): Produto | undefined;
  listarTodos(): void;
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  deletar(codigo: number): void;
}
