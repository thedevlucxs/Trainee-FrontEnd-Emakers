# Game Dame Store (Front-end)

![Badge](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![Badge](https://img.shields.io/badge/react-18.2.0-blue)
![Badge](https://img.shields.io/badge/vite-5.2.0-purple)

Este repositório contém o código-fonte do front-end para a Game Dame, uma interface de loja de jogos digitais. O projeto foi desenvolvido como um teste técnico, demonstrando habilidades em React, componentização, gerenciamento de estado e responsividade.

## 🎮 Visão Geral

A aplicação simula uma loja de jogos online, com telas para autenticação de usuário, vitrine de jogos, listagem de populares e um painel de conta do usuário. A navegação é construída no modelo de SPA (Single Page Application), proporcionando uma experiência de usuário rápida e fluida, sem recarregamentos de página.

![Screenshot da Aplicação](./screenshot.png)

## ✨ Funcionalidades

- **Autenticação:** Telas funcionais para Login, Criação de Conta e Recuperação de Senha.
- **Navegação SPA:** Transição suave entre as telas (`Lançamentos`, `Populares`, `Conta`) sem recarregar a página.
- **Vitrine Dinâmica:** Carrosséis de jogos na tela principal que se reorganizam a cada visita.
- **Componentes Reutilizáveis:** Elementos como `Navbar`, `Footer` e `StarRating` são construídos para serem usados em múltiplas partes da aplicação.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Estilização com CSS Modules:** Garante que os estilos de um componente não afetem outros, evitando conflitos de CSS.

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca principal para a construção da interface de usuário.
- **[Vite](https://vitejs.dev/):** Ambiente de desenvolvimento de nova geração que oferece um desenvolvimento extremamente rápido.
- **[React Slick](https://react-slick.neostack.com/):** Biblioteca para a criação de carrosséis responsivos.
- **JavaScript (ES6+):** Utilização de funcionalidades modernas do JavaScript.
- **CSS Modules:** Para estilização local e componentizada.
- **HTML5:** Para a estruturação semântica do conteúdo.

## 🚀 Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- **Node.js** (versão 18.x ou superior)
- **npm** (geralmente instalado com o Node.js)

### Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/thedevlucxs/Trainee-FrontEnd-Emakers.git]
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd Trainee-Front-End-Emakers
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

## 📂 Estrutura de Pastas

O projeto está organizado de forma a separar claramente as responsabilidades de cada parte do código:

src
├── assets/ # Imagens, ícones, fontes e outros arquivos estáticos
├── components/ # Componentes React reutilizáveis
│ ├── Footer/
│ ├── HomeScreen/
│ ├── LoginScreen/
│ └── ...
├── App.jsx # Componente principal que gerencia o estado e a navegação
├── main.jsx # Ponto de entrada da aplicação React
└── index.css # Estilos globais

## 🧠 Conceitos de Arquitetura

- **Gerenciamento de Estado:** O estado que controla a página atual (`currentPage`) é centralizado no componente `App.jsx`. Esse estado é passado para os componentes filhos através de _props_.
- **Passagem de Funções (Props Drilling):** Funções como `handleNavigation` são passadas do componente pai (`App`) para os filhos (`Navbar`, `Footer`), permitindo que eles acionem mudanças de estado no componente principal. Esta é uma abordagem eficaz para o gerenciamento de estado em aplicações de pequena a média escala.
- **Renderização Condicional:** O componente `App.jsx` utiliza uma estrutura `switch` para renderizar a tela correta com base no estado `currentPage`, funcionando como um roteador simples e eficiente.

## 👤 Autor

- **Lucas da Silva Rosa**
- **Email:** dev.lucxs@gmail.com

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
