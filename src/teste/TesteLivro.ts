import { Livro } from "../model/Livro";

let livro1 = new Livro(1, "O Alquimista", 39.9, 15, "Paulo Coelho", "Rocco");
let livro2 = new Livro(2, "Dom Casmurro", 29.9, 8, "Machado de Assis", "Martin Claret");

livro1.visualizar();
livro2.visualizar();
