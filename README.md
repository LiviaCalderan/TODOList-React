## ToDoList App

Uma aplicação de lista de tarefas (ToDo List) desenvolvida com React e Vite, estilizada com TailwindCSS.

### Funcionalidades
- Adicionar tarefas à lista
- Marcar tarefas como concluídas
- Remover tarefas
- Persistência das tarefas no navegador via localStorage

### Tecnologias Utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)

### Instalação e Execução
1. Clone o repositório ou baixe os arquivos do projeto.
2. Instale as dependências:
	```bash
	npm install
	```
3. Execute o projeto em modo desenvolvimento:
	```bash
	npm run dev
	```
4. Acesse `http://localhost:5173` no navegador.

### Estrutura do Projeto
```
src/
  App.jsx
  main.jsx
  index.css
  assets/
  components/
	 Todo.jsx
	 TodoItems.jsx
public/
index.html
```

### Como Usar
1. Digite uma tarefa no campo de texto e clique em "ADD +" para adicioná-la.
2. Clique no ícone de check para marcar/desmarcar como concluída.
3. Clique no ícone de lixeira para remover a tarefa.

---
Projeto feito para estudos de React e TailwindCSS.

### Licença

Este projeto está licenciado sob a Licença MIT. Veja abaixo:

```
MIT License

Copyright (c) 2026 Livia Calderan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

