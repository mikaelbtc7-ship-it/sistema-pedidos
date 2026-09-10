/* ============================================================
   CONFIGURAÇÃO DO FIREBASE  (sincronização + login)
   ------------------------------------------------------------
   Enquanto este arquivo estiver com FIREBASE_CONFIG = null,
   o sistema funciona só neste aparelho (sem sincronizar, sem login).

   Para ativar a sincronização entre você e sua esposa, siga o
   passo a passo do arquivo COMO-CONFIGURAR.md e cole aqui os
   dados do seu projeto Firebase.
   ============================================================ */

window.FIREBASE_CONFIG = null;

/* Depois de configurar, o de cima vira algo assim (exemplo):

window.FIREBASE_CONFIG = {
  apiKey: "AIza................................",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
};

*/

/* "Cofre" de dados compartilhado. Pode deixar como está. */
window.SYNC_DOC_ID = "principal";
