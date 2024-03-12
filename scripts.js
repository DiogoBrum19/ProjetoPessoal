function search_tshirts() {
    const input = document.getElementById('searchbar');
    const filter = input.value.toUpperCase();
    const anuncios = document.querySelectorAll('.anuncio');

    anuncios.forEach(anuncio => {
        const titulo = anuncio.querySelector('h2');
        const descricao = anuncio.querySelector('p');

        const shouldShow = titulo.textContent.toUpperCase().indexOf(filter) > -1 ||
                          descricao.textContent.toUpperCase().indexOf(filter) > -1;
        anuncio.style.display = shouldShow ? 'block' : 'none';
    });
}
const anuncios = [
    { titulo: "Camisa Barcelona 23/24", descricao: "Nova, tamanho M", preco: "R$ 150,00", imagem: "CamisasImagens/barcelona.jpg" },
    { titulo: "Camisa Real Madrid 22/23", descricao: "Usada, tamanho P", preco: "R$ 100,00", imagem: "CamisasImagens/real_madrid.jpg" },
    { titulo: "Camisa Seleção Brasileira 2022", descricao: "Nova, tamanho G", preco: "R$ 200,00", imagem: "CamisasImagens/selecao_brasileira.jpg" }
];

function exibirAnuncios() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    anuncios.forEach(anuncio => {
        const divAnuncio = document.createElement('div');
        divAnuncio.classList.add('anuncio');

        const titulo = document.createElement('h2');
        titulo.textContent = anuncio.titulo;

        const conteudoAnuncio = document.createElement('div');
        conteudoAnuncio.classList.add('conteudo-anuncio');

        const imagemDiv = document.createElement('div');
        imagemDiv.classList.add('imagem');

        const imagem = document.createElement('img'); 
        imagem.src = anuncio.imagem; 
        imagem.alt = anuncio.titulo;
        imagemDiv.appendChild(imagem);

        const detalhes = document.createElement('div');
        detalhes.classList.add('detalhes');

        const descricao = document.createElement('p');
        descricao.textContent = anuncio.descricao;

        const preco = document.createElement('p');
        preco.textContent = `Preço: ${anuncio.preco}`;

        detalhes.appendChild(descricao);
        detalhes.appendChild(preco);

        conteudoAnuncio.appendChild(imagemDiv);
        conteudoAnuncio.appendChild(detalhes);

        divAnuncio.appendChild(titulo);
        divAnuncio.appendChild(conteudoAnuncio);

        mainContent.appendChild(divAnuncio);
    });
}





function redirectToLogin() {
    window.location.href = 'login.html'; 
}

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Login';
    loginBtn.classList.add('login-btn');
    loginBtn.addEventListener('click', redirectToLogin);

    const header = document.querySelector('header');
    header.appendChild(loginBtn);

    function positionLoginButton() {
        const headerWidth = header.offsetWidth;
        const loginBtnWidth = loginBtn.offsetWidth;
        const margin = 20;
        const rightPosition = headerWidth - loginBtnWidth - margin;
        loginBtn.style.right = `${rightPosition}px`;
    }

    window.addEventListener('load', function() {
        exibirAnuncios();
        positionLoginButton();
    });
    window.addEventListener('resize', positionLoginButton);
});
