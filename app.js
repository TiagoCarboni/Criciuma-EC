function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa, converte para minúsculas e remove espaços em branco
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
  
    // Verifica se o termo de pesquisa está vazio
    if (!termoPesquisa) {
      // Exibe mensagem de busca vazia e encerra a função
      section.innerHTML = "Por favor, insira um termo para pesquisar.";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
  
    // Itera sobre cada dado e verifica se o título ou posição contém o termo pesquisado
    // (realizando uma busca case-insensitive)
    for (const dado of dados) {
      const titulo = dado.titulo.toLowerCase();
      const posicao = dado.posicao.toLowerCase();
  
      if (titulo.includes(termoPesquisa) || posicao.includes(termoPesquisa)) {
        // Cria um novo elemento HTML para o resultado e o adiciona à string de resultados
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p>${dado.posicao}</p>
            <a href="${dado.link}">Mais informações</a>
          </div>
        `;
      }
    }

    if (!resultados) {
        resultados = "Nada foi encontrado";
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados da pesquisa
    section.innerHTML = resultados;
  }