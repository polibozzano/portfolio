# Vitta - Painel de Agendamento

![Tela inicial do painel](/projects/vitta/vitta-painelagendamento.png)

## Sobre o Projeto

O **Vitta – Painel de Agendamento** é uma aplicação full-stack desenvolvida com o objetivo de praticar integração entre autenticação, banco de dados em tempo real e interface responsiva. O foco principal foi criar um fluxo funcional para o gerenciamento de agendamentos em clínicas e consultórios, com separação clara entre as funcionalidades do usuário e do administrador.

Durante o desenvolvimento, aprofundei meus conhecimentos em autenticação de usuários, gerenciamento de permissões, estruturação de dados no Firestore e estilização com Tailwind CSS. 

---

## Funcionalidades

### Painel do Usuário

![Painel do usuário](/projects/vitta/vittagif.gif)

O painel do usuário foi projetado para que pacientes possam agendar horários de forma prática e intuitiva.

- Cadastro e login com autenticação via Firebase Auth.
- Visualização dos horários disponíveis para agendamento.
- Realização de agendamentos com dados salvos em tempo real.
- Interface limpa, acessível e responsiva.
  
### Painel do Administrador

![Painel do admin](/projects/vitta/vittagif2.gif)

O painel do administrador permite o gerenciamento completo da agenda e visualização de todos os agendamentos realizados.

- Acesso autenticado e restrito a administradores.
- Visualização completa de todos os agendamentos.
- Acompanhamento em tempo real das alterações no banco de dados.
- Permissão para exclusão de horários e reorganização da agenda.


> 🧪 **Conta de Teste para Acesso Administrativo**
>
> Para acessar o painel administrativo, utilize:
> - **Email:** `teste@teste.com`
> - **Senha:** `teste123`
>
> Esse acesso simula o ambiente de um administrador.

---

## Tecnologias e Práticas Utilizadas

- **React + TypeScript**
- **Firebase Authentication**: sistema de login seguro para usuários e administradores.
- **Firestore (Realtime Database)**: leitura e escrita de dados em tempo real.
- **React Router DOM**: rotas protegidas e separação clara de views.
- **Tailwind CSS**: construção rápida de uma interface responsiva e acessível.
- **React Hooks**: gerenciamento de estado e efeitos colaterais de forma eficiente.
- **Boas práticas de organização de pastas, arquivos e componentes**.

---

## Resultado

A aplicação simula um ambiente de clínica ou consultório onde pacientes podem marcar consultas com praticidade, e administradores têm total controle da agenda, com atualizações em tempo real. O sistema é responsivo, funcional e representa um passo importante no meu desenvolvimento como desenvolvedora web.


---