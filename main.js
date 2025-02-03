import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

import { 
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';


const firebaseConfig = {
  apiKey: "AIzaSyCbqYHEkbK8rlmTEvT7IRxamrueBVOvf2o",
  authDomain: "insan-cemerlang-25a53.firebaseapp.com",
  projectId: "insan-cemerlang-25a53",
  storageBucket: "insan-cemerlang-25a53.firebasestorage.app",
  messagingSenderId: "383282706725",
  appId: "1:383282706725:web:bf9fd56cea37cb3a0fc2cc",
  measurementId: "G-31EQF6PDVN"
};
// fungsi daftar barang

export async function ambilDaftarInventory() {
  const refDokumen = collection(basisdata, "inventory");
  const kueri = query(refDokumen, orderBy("item"));
  const cuplikanKueri = await getDocs(kueri);
  
  let hasilKueri = [];
  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      item: dokumen.data().item,
      jumlah: dokumen.data().jumlah,
      harga: dokumen.data().harga
      
    })
  })
  
  return hasilKueri;
}

//inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)



