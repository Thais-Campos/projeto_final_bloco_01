import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Biblioteca da Thaís                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar livro                      ");
        console.log("            2 - Listar livros                        ");
        console.log("            3 - Buscar livros por codigo             ");
        console.log("            4 - Atualizar livros                     ");
        console.log("            5 - Remover livro                        ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Escolha uma opcao: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nBiblioteca da Thaís com TH - seu aprendizado comeca aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar livro \n\n");

                break;
            case 2:
                console.log("\n\nListar livros\n\n");

                break;
            case 3:
                console.log("\n\nBuscar livros por codigo\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar livros\n\n");

                break;
            case 5:
                console.log("\n\nRemover livro\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Thaís Campos Silva");
    console.log("*****************************************************");
}


main();