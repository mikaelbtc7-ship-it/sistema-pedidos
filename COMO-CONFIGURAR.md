# Como ligar a sincronização (celular + computador)

Sem isto, o sistema funciona, mas cada aparelho tem a sua própria lista.
Depois de fazer estes passos **uma vez**, você e sua esposa vão ver os
mesmos pedidos em qualquer aparelho, e ninguém sem a senha de vocês entra.

Tempo: ~15 minutos. Precisa de uma conta Google (o gmail já serve).

---

## 1. Criar o projeto no Firebase

1. Abra <https://console.firebase.google.com> e faça login com o Google.
2. Clique em **Adicionar projeto** (ou *Create a project*).
3. Nome: `sistema-pedidos` (ou o que quiser). Avançar.
4. Google Analytics: pode **desativar**. Criar projeto.

## 2. Criar o banco de dados

1. No menu da esquerda: **Criar** → **Firestore Database**.
2. Botão **Criar banco de dados**.
3. Escolha o modo **produção**. Local: `southamerica-east1` (São Paulo). Ativar.

## 3. Ligar o login por e-mail e senha

1. Menu da esquerda: **Criar** → **Authentication** → **Vamos começar**.
2. Na lista de provedores, clique em **E-mail/senha**.
3. **Ative** a primeira chave (E-mail/senha). Salvar.
4. Ainda em Authentication, aba **Settings** → seção **User actions**:
   **desmarque** "Enable create (sign-up)". (Assim ninguém cria conta sozinho.)

## 4. Criar as contas de vocês dois

1. Authentication → aba **Users** → **Adicionar usuário**.
2. Coloque o **seu** e-mail e uma senha. Adicionar.
3. Repita para o e-mail da **sua esposa**.
4. Cada linha mostra um **UID** (código embaralhado). **Copie os dois UID** —
   vai precisar no passo 6.

## 5. Registrar o aplicativo e pegar a configuração

1. No topo do menu esquerdo, clique na **engrenagem** → **Configurações do projeto**.
2. Role até **Seus aplicativos** → ícone **</>** (Web).
3. Apelido: `pedidos`. **Não** marque Firebase Hosting. Registrar app.
4. Vai aparecer um trecho de código com `const firebaseConfig = { ... }`.
   Copie **só o objeto** `{ apiKey: "...", ... }`.

## 6. Colar tudo no sistema

Você pode editar os arquivos direto no GitHub (pelo próprio celular):
abra o repositório, toque no arquivo, no lápis (**Edit**), altere, e
**Commit changes**.

**a) Arquivo `firebase-config.js`** — troque a linha
```js
window.FIREBASE_CONFIG = null;
```
por (usando o que você copiou no passo 5):
```js
window.FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

**b) Arquivo `firestore.rules`** — troque
`COLE_AQUI_O_UID_DO_MARIDO` e `COLE_AQUI_O_UID_DA_ESPOSA` pelos dois UID do passo 4.
Depois, no Firebase Console → **Firestore Database** → aba **Regras**, cole o
conteúdo desse arquivo e clique em **Publicar**.

## 7. Liberar o endereço do site

No Firebase Console → **Authentication** → **Settings** → **Authorized domains**
→ **Adicionar domínio** → cole:

```
mikaelbtc7-ship-it.github.io
```

---

## Pronto

Abra o site. Vai pedir e-mail e senha. Depois de entrar, o selo no topo
mostra **☁ sincronizado**. O que um cadastrar, o outro vê.

### Dicas
- Usem o **mesmo endereço do site** nos dois aparelhos (não o arquivo local).
- Evitem cadastrar o **mesmo** pedido nos dois aparelhos ao mesmo tempo.
- O botão **Sair** (canto superior) desconecta o aparelho.
- Continue fazendo **backup** (aba Backup) de vez em quando, por segurança.
