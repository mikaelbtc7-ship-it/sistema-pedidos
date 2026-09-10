/* ============================================================
   CONFIGURAÇÃO DO FIREBASE  (sincronização + login)
   ------------------------------------------------------------
   Projeto: sistema-de-pedidos-48ea9
   Estes valores NÃO são secretos (a segurança é o login +
   as regras do Firestore em firestore.rules).
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAm4l-ajsLHRQnE68txTlmHI2mpsd6lsbU",
  authDomain: "sistema-de-pedidos-48ea9.firebaseapp.com",
  projectId: "sistema-de-pedidos-48ea9",
  storageBucket: "sistema-de-pedidos-48ea9.firebasestorage.app",
  messagingSenderId: "444196909016",
  appId: "1:444196909016:web:3a189f1c8ee1913c188cad"
};

/* "Cofre" de dados compartilhado. Pode deixar como está. */
window.SYNC_DOC_ID = "principal";
