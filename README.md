# eveControl

## Descrição do Projeto

Este repositório contém o projeto eveControl, uma aplicação web desenvolvida para gerenciar eventos. A aplicação utiliza tecnologias front-end como HTML, CSS (SCSS) e JavaScript, com Gulp para automação de tarefas.

## Funcionalidades Principais

Com base nos arquivos JavaScript presentes, as funcionalidades incluem:

*   **Cadastro:** `cadastro.js`
*   **Gerenciamento de Convidados:** `convidados.js`
*   **Gerenciamento de Eventos:** `eventos.js`
*   **Gerenciamento de Funcionários:** `funcionarios.js`
*   **Login:** `login.js`

## Tecnologias Utilizadas

*   **HTML**
*   **CSS/SCSS:** Para estilização, com pré-processamento via Gulp.
*   **JavaScript:** Lógica de front-end para as funcionalidades da aplicação.
*   **Gulp.js:** Automatizador de tarefas para compilação de SCSS, autoprefixação e outras tarefas de desenvolvimento.
*   **Bootstrap 4:** Utilizado como framework CSS base.

## Estrutura do Projeto

```
.vscode/
assets/
├── css/         # Arquivos CSS compilados
├── img/         # Imagens
└── scss/        # Arquivos SCSS
examples/        # Exemplos de páginas ou templates
.gitignore
CHANGELOG.md
ISSUE_TEMPLATE.md
LICENSE
README.md
cadastro.js
convidados.js
eventos.js
funcionarios.js
gulpfile.js
login.js
package-lock.json
package.json
template.html
```

## Instalação e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/jfermartins/eveControl.git
    cd eveControl
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute as tarefas do Gulp:**

    Para compilar o SCSS e iniciar o monitoramento de arquivos, e abrir a aplicação no navegador:

    ```bash
    gulp open-app
    ```

    Alternativamente, você pode executar as tarefas individualmente:

    *   **Compilar SCSS:**

        ```bash
        gulp compile-scss
        ```

    *   **Monitorar arquivos SCSS para mudanças:**

        ```bash
        gulp watch
        ```

    *   **Abrir a aplicação no navegador (exemplo):**

        ```bash
        gulp open
        ```


## Contribuição

Contribuições são bem-vindas! Por favor, siga as diretrizes no `ISSUE_TEMPLATE.md` para relatar problemas e no `CHANGELOG.md` para entender as mudanças.

## Autor

*   **Jane Fernanda Martins**




## Contexto Acadêmico

Este projeto foi desenvolvido como parte da disciplina de Engenharia de Software 3, com o objetivo de demonstrar os conhecimentos adquiridos nas disciplinas de Engenharia de Software 1 e 2 do curso de Análise e Desenvolvimento de Sistemas. Ele representa uma aplicação completa criada para fins acadêmicos, aplicando conceitos e práticas de desenvolvimento de software.

