# FinanceApp - Sistema de Controle de Orçamento Pessoal

Aplicação web para gerenciamento financeiro pessoal, desenvolvida com React e TypeScript seguindo os princípios de Clean Architecture. O sistema permite controlar gastos mensais através de categorias e acompanhar o orçamento de forma organizada.

## 📋 Funcionalidades Principais

### 🔐 Autenticação
- **Login de usuário** com email e senha
- Autenticação via token JWT
- Opção de login com Google (interface preparada)
- Redirecionamento automático para área logada

### 📊 Dashboard Principal
- **Visão geral mensal** do orçamento
- Seletor de mês (atual + próximos 2 meses)
- **Resumo financeiro**:
  - Total planejado vs. total gasto
  - Valor restante do orçamento
  - Progresso visual dos gastos
- Acesso rápido para cadastro de gastos e categorias

### 🏷️ Gerenciamento de Categorias
- **Listar categorias** criadas pelo usuário
- **Criar nova categoria** com:
  - Título/descrição
  - Custo estimado mensal
  - Tipo: Fixo ou Variável
- **Editar categorias** existentes
- **Excluir categorias**
- Visualização do progresso: valor gasto vs. valor estimado

### 💰 Controle de Gastos (Saídas)
- **Cadastrar novo gasto** com:
  - Descrição do gasto
  - Valor da saída
  - Categoria associada
- **Listar gastos** por categoria
- **Editar gastos** existentes
- **Excluir gastos**
- Histórico de gastos com filtros por data

### 📱 Interface e Experiência
- **Design responsivo** para mobile e desktop
- **Navegação intuitiva** com breadcrumbs
- **Feedback visual** para ações do usuário
- **Formatação automática** de valores monetários
- **Validação de formulários** com Zod

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **React Router Dom** - Roteamento SPA
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas

### Estilização
- **TailwindCSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **React Icons** - Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **Vite** - Build tool e dev server
- **Jest** - Framework de testes
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Husky** - Git hooks

### Comunicação
- **Axios** - Cliente HTTP para APIs
- Interceptors para autenticação automática
- Tratamento de erros centralizado

## 🚀 Como Inicializar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Acesso à API backend (configurada em `http://192.168.18.7:8004/api`)

### Instalação

1. **Clone o repositório** (se aplicável)
   ```bash
   git clone <url-do-repositorio>
   cd budget-ui
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure a URL da API**
   - Edite o arquivo `src/providers/api.ts`
   - Altere a `baseURL` se necessário

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação**
   - Abra o navegador em `http://localhost:5173`
   - Faça login com suas credenciais

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run preview          # Visualiza build de produção

# Build e Deploy
npm run build            # Compila para produção

# Qualidade de Código
npm run lint             # Executa ESLint
npm run format           # Formata código com ESLint
npm run test             # Executa testes

# Geração de Código
npm run generate:page    # Gera nova página
npm run generate:service # Gera novo serviço
```

## 📁 Estrutura de Arquivos

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
│   ├── login/          # Tela de login
│   ├── home/           # Dashboard principal
│   ├── create-category/ # Criar categoria
│   ├── list-category/  # Listar categorias
│   ├── create-cost/    # Criar gasto
│   └── list-costs/     # Listar gastos
├── services/           # Serviços de API
├── hooks/              # Hooks customizados
├── providers/          # Contextos e providers
├── utils/              # Funções utilitárias
└── constants/          # Constantes e rotas
```

## 🔒 Autenticação e Segurança

- Tokens JWT armazenados em cookies
- Interceptors automáticos para requisições autenticadas
- Redirecionamento automático para login em caso de token expirado
- Rotas protegidas por autenticação

## 🧪 Testes

```bash
npm run test             # Executa todos os testes
npm run test:coverage    # Gera relatório de cobertura
```

