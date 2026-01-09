
# 📸 Galeria de Fotos - React

> **Projeto Online:** [Clique aqui para acessar a demonstração](galeria-puc.netlify.app)

Este projeto é uma aplicação web de galeria de fotos desenvolvida como parte do exercício de programação (2026/1). A aplicação consome a API do **Unsplash** para listar e buscar imagens de alta qualidade, apresentando-as em um layout responsivo e moderno.

## 📋 Funcionalidades

- **Exibição de Fotos:** Carregamento inicial de fotos aleatórias/populares direto da API do Unsplash.
![Tela de carregamento da inicial](./public/imagem-aleat-galeria.png)

- **Busca Inteligente:** Barra de pesquisa que permite encontrar fotos por palavras-chave.
![Tela de carregamento da busca](./public/imagem-busca.png)

- **Layout Responsivo:** Utilização de CSS Grid (`auto-fill`) para adaptar o número de colunas automaticamente ao tamanho da tela (Mobile, Tablet e Desktop).
- **Feedback Visual:** Indicadores de carregamento (Loaders) 
![Tela de indicadores de carregamento ](./public/loaders.png)

 mensagens de erro ou "nenhum resultado encontrado".
- **Interface Limpa:** Design focado na experiência do usuário e na visualização das imagens.
![Tela de carregamento da inicial](./public/mensagem.png)


## 🛠 Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção da interface.
- **Axios**: Para requisições HTTP à API.
- **CSS3**: Grid Layout, Flexbox e variáveis CSS.
- **Unsplash API**: Fonte das imagens e dados.
- **React Icons**: Ícones para a interface (Lupa, Loaders).

## 🚀 Como rodar o projeto localmente

Siga os passos abaixo para baixar e executar a aplicação na sua máquina:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 2. Clonar o repositório
Abra o terminal e execute o comando abaixo para baixar o código:
```bash
git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)
 
Entre na pasta do projeto:
cd NOME-DO-REPOSITORIO
3. Instalar dependências
Bash

npm install


5. Rodar a aplicação

no terminal execute o comando
npm run dev

O projeto abrirá automaticamente no seu navegador em http://localhost:3000.


📂 Estrutura do Projeto
src/
  ├── components/
  │   ├── Card/
  │   ├── Footer/
  │   ├── Header/
  │   ├── Loader/
  │   └── SearchBar/
  ├── pages/
  │   └── Home/
  ├── services/ (Opcional)
  ├── App.js
  └── index.js


  ⚠️ Nota sobre Segurança da API Key

Você notará que a Access Key do Unsplash está exposta diretamente no código (Home.jsx).

Tomei a decisão de manter a chave no repositório exclusivamente para fins didáticos, visando facilitar a execução e a correção do projeto sem que seja necessário criar uma conta de desenvolvedor no Unsplash imediatamente.

✒️ Autor
Desenvolvido por Marcelo Guimarães.

Projeto criado para fins de estudo e portfólio. Entre em contato! | www.linkedin.com/in/marcelo-guima-dev

 | marceloguimaraesdev@gmail.com

© 2026 Galeria de Fotos.


***
