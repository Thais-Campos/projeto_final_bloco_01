export abstract class Produto {
  constructor(
    protected codigo: number,
    protected nome: string,
    protected preco: number,
    protected estoque: number
  ) {}

  // Getters
  public getCodigo(): number {
    return this.codigo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public getEstoque(): number {
    return this.estoque;
  }

  public abstract visualizar(): void;
}
