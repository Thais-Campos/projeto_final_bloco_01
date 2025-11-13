import { Livro } from "../model/Livro";
import { ProdutoController } from "../repository/ProdutoController";

const controller = new ProdutoController();

const livro1 = new Livro(1, "O Alquimista", 39.9, 15, "Paulo Coelho", "Rocco");
const livro2 = new Livro(2, "Dom Casmurro", 29.9, 8, "Machado de Assis", "Martin Claret");

controller.cadastrar(livro1);
controller.cadastrar(livro2);

controller.listarTodos();

controller.deletar(1);

controller.listarTodos();
