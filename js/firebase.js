import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
apiKey:"TU_KEY",
authDomain:"TU_APP.firebaseapp.com",
projectId:"TU_APP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

