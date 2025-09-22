// responses.js - Chatbot RAZORA CHAT santai, asik, dengan balasan romantis

const responses = [
  // Salam awal
  { keywords: ['halo','hai','yo','hey'], 
    reply: 'Yo bro/jo! Senang banget ketemu kamu. Semoga harimu menyenangkan dan penuh energi positif. Mau ngobrol apa hari ini?' },

  { keywords: ['selamat pagi'], 
    reply: 'Pagi! Semoga kamu bangun dengan semangat yang luar biasa. Jangan lupa sarapan biar energi tetap penuh untuk menghadapi hari ini.' },

  { keywords: ['selamat siang'], 
    reply: 'Siang! Jangan lupa istirahat sebentar kalau bisa. Kadang jeda kecil bikin pikiran fresh dan siap lanjut aktivitas dengan lebih keren.' },

  // Kabar & emosi
  { keywords: ['apa kabar','kabar'], 
    reply: 'Aku baik, makasih sudah nanya. Semoga kabarmu juga oke. Kalau lagi capek atau stress, santai dulu, kita bisa ngobrol sambil ngelepas penat.' },

  // Sedih / Galau / Romantis
  { keywords: ['sedih','galau','stress','patah hati'], 
    reply: 'Iyaa sayangg… Aku ngerti perasaanmu sekarang. Tarik napas dalam-dalam dulu, biar hati lebih tenang. Semua bakal beres kok, aku selalu di sini buat nemenin kamu.' },

  { keywords: ['cinta','jatuh cinta','sayang'], 
    reply: 'Iyaa sayangg… Rasanya indah ya ketika jatuh cinta. Nikmati perasaan itu, tapi jangan terburu-buru. Aku di sini buat dengerin ceritamu kapan pun.' },

  { keywords: ['rindu','kangen'], 
    reply: 'Iyaa sayangg… Aku ngerti rasa rindumu. Kadang hati terasa berat, tapi ingat, jarak nggak bikin perasaan hilang. Tetap semangat ya!' },

  { keywords: ['putus','sedih cinta'], 
    reply: 'Iyaa sayangg… Aku tau ini berat, tapi percayalah, semuanya bakal lebih baik nanti. Santai dulu, biar hati bisa mulai sembuh pelan-pelan.' },

  // Senang / Positif
  { keywords: ['senang','happy','bahagia'], 
    reply: 'Senang dengar kabar kamu happy! Nikmati momen itu, bagikan senyum sama orang di sekitar, dan terus bawa energi positif itu ke aktivitas lain hari ini.' },

  { keywords: ['marah','kesal'], 
    reply: 'Tenang dulu, jangan langsung reaksi. Kadang marah itu wajar, tapi kita bisa pilih cara yang bikin hati lebih adem. Santai sebentar, tarik napas, biar lebih tenang.' },

  { keywords: ['bosan'], 
    reply: 'Kalau lagi bosan, coba lakukan hal kecil yang bikin senang, misalnya dengerin musik, jalan-jalan sebentar, atau ngobrol sama teman.' },

  // Aktivitas & lifestyle
  { keywords: ['makan','lapar'], 
    reply: 'Jangan lupa makan ya. Makanan yang sehat bisa bikin energi tetap oke dan mood jadi lebih bagus.' },

  { keywords: ['tidur','ngantuk'], 
    reply: 'Tidur yang cukup penting. Kalau bisa, ambil waktu istirahat sebentar supaya pikiran lebih segar.' },

  { keywords: ['olahraga','senam','gym'], 
    reply: 'Olahraga bikin badan fit dan pikiran fresh. Coba lakukan gerakan ringan tiap hari biar lebih semangat.' },

  { keywords: ['belajar','tugas','PR','exam'], 
    reply: 'Semangat belajar! Jangan lupa istirahat juga biar informasi yang dipelajari lebih nempel di kepala.' },

  // Hiburan
  { keywords: ['musik','lagu'], 
    reply: 'Dengerin musik emang bikin rileks. Kamu suka genre apa? Chill vibes atau yang bikin semangat?' },

  { keywords: ['film','movie','nonton'], 
    reply: 'Nonton film bisa refreshing juga. Pilih genre yang bikin mood kamu happy atau bikin ketawa, biar pikiran lebih ringan.' },

  { keywords: ['game','main game'], 
    reply: 'Main game boleh, tapi jangan kelamaan ya. Istirahat sebentar juga penting biar nggak pegal dan mata capek.' },

  // Menenangkan
  { keywords: ['stress','cemas','takut','frustrasi','gagal'], 
    reply: 'Tarik napas dalam-dalam dulu, fokus ke hal yang bisa kamu kontrol. Semua masalah ada jalan keluarnya, santai aja dan jangan terburu-buru.' },

  { keywords: ['capek','lelah'], 
    reply: 'Kalau lagi capek, ambil jeda sebentar, minum air atau tiduran sebentar. Tubuh dan pikiran bakal lebih segar setelah itu.' },

  { keywords: ['galau'], 
    reply: 'Coba ceritain apa yang bikin galau. Kadang ngobrol santai aja bisa bikin hati lebih ringan dan pikiran jadi lebih tenang.' },

  // Perhitungan sederhana
  { keywords: ['hitung'], 
    reply: 'Ketik misal: hitung 3 + 5 atau hitung 12 * 4, nanti aku bakal bantu kasih hasilnya.' },

  // Perpisahan / selamat malam
  { keywords: ['selamat malam','bye','sampai jumpa'], 
    reply: 'Yo bro/jo! Malam ini waktunya santai dan recharge energi. Semoga mimpi indah dan besok kamu siap dengan semangat baru.' }
];

// Fungsi menghitung sederhana
function evaluateMath(message) {
  message = message.replace(/[^0-9+\-*/(). ]/g,'');
  try {
    let result = eval(message);
    if(result !== undefined) return `Hasilnya: ${result}`;
  } catch {
    return null;
  }
  return null;
}

// Fungsi untuk mendapatkan jawaban bot
function getBotReply(message) {
  const mathResult = evaluateMath(message);
  if(mathResult) return mathResult;

  message = message.toLowerCase();
  for(let i=0;i<responses.length;i++){
    for(let j=0;j<responses[i].keywords.length;j++){
      if(message.includes(responses[i].keywords[j])){
        return responses[i].reply;
      }
    }
  }
  return 'Maaf sayangg… aku nggak ngerti. Ceritain aku lebih detail biar aku bisa bantu kamu.';
}
