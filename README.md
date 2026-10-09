# Portfólio | Izabela Gonçalves

Site de portfólio pessoal de página única, desenvolvido com HTML, CSS e JavaScript puros (sem frameworks ou bibliotecas). Apresenta minha trajetória na interseção entre Biblioteconomia, Sistemas de Informação e Engenharia de Dados.

🔗 Acesse o site: https://belaiza13.github.io/portfolio/

## Sobre o projeto

Este projeto nasceu como atividade prática da disciplina Fundamentos da Programação Web (Sistemas de Informação, UNINTER) e evoluiu para o meu portfólio profissional. O objetivo foi aplicar na prática os fundamentos de HTML semântico, CSS responsivo e JavaScript, cuidando também de acessibilidade e experiência de uso.

## Seções do site

| Seção | Conteúdo |
|---|---|
| Início | Apresentação e chamadas para ação |
| Sobre mim | Foto, citação e resumo da trajetória |
| Formação | Formação acadêmica, experiência profissional, idiomas e ferramentas |
| Portfólio | Projetos em dados, programação e curadoria digital |
| Contato | Formulário com validação e link para o LinkedIn |

## Funcionalidades

- Tema claro/escuro: respeita a preferência do sistema e guarda a escolha do usuário no `localStorage`, aplicando o tema antes da página carregar para evitar "piscadas".
- Layout responsivo: adapta-se a desktop, tablet e celular, com menu em formato hambúrguer nas telas pequenas.
- Navegação suave: rolagem animada entre as seções, com compensação do cabeçalho fixo.
- Formulário de contato com validação: verifica campos vazios e o formato do e-mail, exibindo mensagens de erro por campo. O envio é simulado (não há back-end).
- Acessibilidade: atributos ARIA (`aria-expanded`, `aria-live`, `role="alert"`), foco visível na navegação por teclado, menu que fecha com a tecla `Esc` e textos alternativos nas imagens.

## Tecnologias

- HTML5: estrutura semântica
- CSS3: variáveis CSS, Grid, Flexbox, `clamp()` e media queries
- JavaScript (ES6+): manipulação do DOM, eventos, validação e `localStorage`

## Estrutura de pastas

```
.
├── assets/
│   └── foto.png        # foto da seção "Sobre mim"
├── index.html          # estrutura da página
├── style.css           # estilos e temas
├── script.js           # menu, tema e formulário
└── README.md
```

## Autora

Izabela Gonçalves
Bibliotecária e Engenheira de Dados · Belo Horizonte, MG

[LinkedIn](https://www.linkedin.com/in/izabela-gon%C3%A7alves/)
