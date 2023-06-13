// divListaProduto.insertAdjacentHTML('afterbegin', '');
class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Erro!";
    }
}

class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    metodos(){
        return this.nome + this.dataCadastro + this.descricao + this.preco
    }
}

const produto = new Produto("Xbox", "06-05-21", "Console", "R$2120,00");
console.log(produto.metodos())

class ProdutosDestaques extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque){
        super(nome, dataCadastro, descricao, preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque;
    }

    mostrarProdutosDestaque(){
        return `
        <div class="grid-container2">
         <div class="grid-item2">
         <h3>${this.nome}</h3>
         <img src="${this.imagemDestaque}" style="height: 250px">
         <p>${this.dataCadastro}</p>
         <p>${this.descricao}</p>
         </div>
        </div>
        `
        //return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
    }
}

const produtos_Destaques = new ProdutosDestaques("Xbox", "06-05-21", "Console", "R$2120,00", "https://assets.xboxservices.com/assets/c7/46/c7465321-acbb-4e4f-9376-cd6005165d0e.png?n=GLP-2020_Feature-1400_XSX_935x1166_03.png");


const produtoDestaque = document.getElementById("produto-destaque");
produtoDestaque.insertAdjacentHTML('afterbegin', produtos_Destaques.mostrarProdutosDestaque());







class ProdutosListaDestaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque, titulo1, imagemDestaque1, descricao1, preco1, titulo2, imagemDestaque2, descricao2, preco2, titulo3, imagemDestaque3, descricao3, preco3){
        super(nome, dataCadastro, descricao, preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque;
        this.titulo1 = titulo1;
        this.imagemDestaque1 = imagemDestaque1;
        this.descricao1 = descricao1;
        this.preco1 = preco1;
        this.titulo2 = titulo2;
        this.imagemDestaque2 = imagemDestaque2;
        this.descricao2 = descricao2;
        this.preco2 = preco2;
        this.titulo3 = titulo3;
        this.imagemDestaque3 = imagemDestaque3;
        this.descricao3 = descricao3;
        this.preco3 = preco3;
    }

    mostrarLista(){
        return `
        <div class="grid-container">
      <div class="grid-item">
     <h3>${this.titulo1}</h3>
     <img src="${this.imagemDestaque1}" style="height: 250px">
     <p>${this.descricao1}</p>
     <p>${this.preco1}</p>
     </div>
     <div class="grid-item">
     <h3>${this.titulo2}</h3>
     <img src="${this.imagemDestaque2}" style="height: 250px">
     <p>${this.descricao2}</p>
     <p>${this.preco2}</p>
     </div>
       <div class="grid-item">
       <h3>${this.titulo3}</h3>
       <img src="${this.imagemDestaque3}" style="height: 250px">
       <p>${this.descricao3}</p>
       <p>${this.preco3}</p>
      </div>
     </div>
      
        `
        //return this.titulo + this.imagemDestaque + this.descricao + this.preco;
    }

    mostrarAtributos(){
        try {
          return this.atributos();  
        } catch (error) {
          console.log(error) 
        }
    }

    atributos() {
        if (this.titulo1 != "", this.imagemDestaque1 != "", this.descricao1 != "", this.preco1 != "", this.titulo2 != "", this.imagemDestaque2 != "", this.descricao2 != "", this.preco2 != "", this.titulo3 != "", this.imagemDestaque3 != "", this.descricao3 != "", this.preco3 != "",){
          return {
            titulo1: this.titulo1,
            imagemDestaque1: this.imagemDestaque1,
            descricao1: this.descricao1,
            preco1: this.preco1,
            titulo2: this.titulo2,
            imagemDestaque2: this.imagemDestaque2,
            descricao2: this.descricao2,
            preco2: this.preco2,
            titulo3: this.titulo3,
            imagemDestaque3: this.imagemDestaque3,
            descricao3: this.descricao3,
            preco3: this.preco3
          };
        } else {
          throw new MeuErro("Um problema inesperado aconteceu!")
        }
      }
    }
}

const produtos_Lista = new ProdutosListaDestaque("Xbox", "06-05-21", "Console", "R$2120,00", "https://assets.xboxservices.com/assets/c7/46/c7465321-acbb-4e4f-9376-cd6005165d0e.png?n=GLP-2020_Feature-1400_XSX_935x1166_03.png", "Xbox Series X", "https://assets.xboxservices.com/assets/c7/46/c7465321-acbb-4e4f-9376-cd6005165d0e.png?n=GLP-2020_Feature-1400_XSX_935x1166_03.png", "Video game", "R$ 4620,00", "Playstation 5", "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$", "Video game", "R$ 4400,00", "Nintendo Switch", "https://www.tradeinn.com/f/13734/137343676_2/nintendo-switch.jpg", "Video game", "R$ 2079,00");
const atributos = meuAnimal.mostrarAtributos();

const lista_De_Produtos = document.getElementById("lista-produtos");
lista_De_Produtos.insertAdjacentHTML('afterbegin', produtos_Lista.mostrarLista());