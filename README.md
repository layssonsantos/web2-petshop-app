# 🐾 PetCare — Sistema de Gestão de PetShop

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Material Design 3](https://img.shields.io/badge/Material_Design_3-757575?style=for-the-badge&logo=materialdesign&logoColor=white)

> Projeto desenvolvido para a disciplina de **Desenvolvimento de Software para Web 2** (DC/UFSCar — 2º Semestre/2026).

---

## 👥 Integrantes do Grupo

| Aluno | RA |
| :--- | :--- |
| **Laysson Santos** | 800349 |
| **Luísa Tavares** | 820990 |
| **Sérgio Felipe Bezerra Rabelo** | 812205 |

---

## 📌 Sobre o Projeto

O **PetCare** é um sistema web projetado para clínicas veterinárias e petshops organizarem sua rotina diária. A ideia surgiu ao observar que a agenda desses estabelecimentos costuma ficar descentralizada entre cadernos e conversas no WhatsApp.

O foco principal da aplicação está em dois pilares:
1. **Painel de Controle (Dashboard):** Centralização dos números do dia (métricas) e lista de atendimentos em tempo real com status visuais claros.
2. **Praticidade no Cadastro:** Formulário ágil e acessível tanto no computador da recepção quanto em dispositivos móveis (como no celular da equipe de banho e tosa).

---

## 🎨 Identidade Visual & Design System (M3)

A interface foi estruturada rigorosamente com base no **Material Design 3 (M3)** do Google, garantindo consistência, acessibilidade e contraste Nível AAA (fórmula WCAG 2.1 com contraste > 7:1):

* **Cores Semânticas:**
  * **Cor Semente / Primária (`#00696B` / `#0F8B8D`):** Passa a ideia de saúde e cuidado sem cair no azul hospitalar.
  * **Terciária (`#FFDCC6` / `#6D390C`):** Tom laranja quente que lembra o lado afetivo dos pets, utilizado nos destaques de Consultas, Alergias e Status "Em Andamento".
  * **Status Concluído (`#2E9E5B` / `#15512C`):** Cor customizada sem harmonização automática para garantir distinção clara no fluxo.
* **Tipografia:** Fonte **Nunito** (Google Fonts), com pontas arredondadas que combinam com o universo pet e mantêm alta legibilidade em tabelas densas.
* **Geometria:** Borda e cantos arredondados (8px para campos/badges, 12px para ícones, 16px para cards e botões no formato *pill*).

---

## 📱 Mapeamento das Telas

1. **Dashboard de Atendimentos (Home):**
   * Barra superior com busca global (por pet, tutor ou serviço) e avatar do perfil logado.
   * Cards de métricas diárias: Banhos, Consultas Veterinárias, Vacinações e Receita Estimada.
   * Tabela dinâmica com badges coloridos (*Agendado*, *Em Andamento* e *Concluído*).
2. **Formulário de Novo Agendamento:**
   * Dividido nos blocos *Informações do Cliente* e *Detalhes do Serviço*.
   * Seleção de espécie via chips interativos (Cão, Gato, Ave, Outro) em vez de selects tradicionais.
   * Campo para observações de restrições ou alergias.
3. **Ficha do Pet:**
   * Resumo do cliente, botão para compartilhamento com tutor e agendamento direto.
   * Histórico cronológico de atendimentos realizados.
   * Bloco destacado de **Observações Médicas** (alergias/cuidados) posicionado estrategicamente na área de prioridade visual.

---

## 🛠️ Tecnologias Utilizadas

* **Front-end:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Tipografia:** [Nunito (Google Fonts)](https://fonts.google.com/specimen/Nunito)
* **Back-end Simulado:** API REST fictícia com [`json-server`](https://github.com/typicode/json-server)
* **APIs Web:** `Web Notifications API` (notificações do SO para lembretes de agendamento e término de serviços) e `LocalStorage API`.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para clonar, instalar e rodar o projeto em seu ambiente local.

### 📋 Pré-requisitos

Certifique-se de ter instalado:
* [Node.js](https://nodejs.org/) (versão **18.0.0** ou superior)
* **npm** (gerenciador de pacotes nativo do Node)
* [Git](https://git-scm.com/)

---

### 🔧 Passo a Passo de Instalação e Execução

#### 1. Clonar o repositório
```bash
git clone [https://github.com/seu-usuario/petcare-app.git](https://github.com/seu-usuario/petcare-app.git)
cd petcare-app
```

#### 2. Instalar as dependências do projeto
```bash
npm install
```

#### 3. Iniciar o Servidor Back-end (API REST simulada) em um terminar dedicado
```bash
npm run server
```

#### 4. Iniciar a Aplicação Front-end (React + Vite)
```bash
npm run dev
```

#### 5. Acessar no Navegador
* Abra seu navegador no endereço indicado no terminal (geralmente http://localhost:5173).
