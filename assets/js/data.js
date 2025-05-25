const productsData = [
    { 
        id: 1, 
        name: 'Kue Lapis Legit', 
        category: 'Basah', 
        price: 250000, 
        image: 'assets/images/kue_lapis_legit.jpg',
        description: 'Kue Lapis Legit adalah kue basah premium dengan banyak lapisan tipis, kaya akan mentega Wijsman dan rempah spekuk, menawarkan rasa manis dan aroma yang khas. Sangat cocok untuk acara spesial.',
        howToBuy: 'Pesan Kue Lapis Legit melalui WhatsApp 0812-3456-7890. Pengiriman H+2 setelah pemesanan. Tersedia ukuran loyang 20x20cm.'
    },
    { 
        id: 2, 
        name: 'Kue Putu Bambu', 
        category: 'Basah', 
        price: 3000, 
        image: 'assets/images/kue_putu.jpg',
        description: 'Kue Putu Bambu, jajanan pasar tradisional yang dikukus dalam cetakan bambu, berisi gula merah lumer dan ditaburi kelapa parut gurih. Hangat dan nikmat!',
        howToBuy: 'Kue Putu Bambu tersedia setiap sore di toko kami atau pesan antar dengan minimal pembelian 10 pcs via GoFood/GrabFood.'
    },
    { 
        id: 3, 
        name: 'Kue Klepon', 
        category: 'Basah', 
        price: 2500, 
        image: 'assets/images/kue_klepon.jpg',
        description: 'Bola-bola kenyal dari tepung ketan dengan isian gula merah cair yang meledak di mulut, dibalut kelapa parut. Sensasi rasa yang unik dan nagih.',
        howToBuy: 'Beli Kue Klepon langsung di toko kami atau pesan online minimal 1 kotak (isi 10) melalui WhatsApp.'
    },
    { 
        id: 4, 
        name: 'Kue Lumpur Surga', 
        category: 'Basah', 
        price: 4000, 
        image: 'assets/images/kue_lumpur.jpg', // Assuming kue_lumpur.jpg can represent Kue Lumpur Surga
        description: 'Kue Lumpur Surga memiliki tekstur yang sangat lembut dan lumer di mulut, terbuat dari santan, telur, dan pandan. Manis dan gurihnya pas.',
        howToBuy: 'Pesan Kue Lumpur Surga untuk acara arisan atau kumpul keluarga. Hubungi kami via telepon atau WhatsApp.'
    },
    { 
        id: 5, 
        name: 'Risoles Ragout Ayam', 
        category: 'Gorengan', 
        price: 3500, 
        image: 'assets/images/risoles.jpg',
        description: 'Risoles dengan isian ragout ayam dan sayuran yang creamy, dibalut kulit tipis dan tepung panir renyah. Cocok sebagai camilan atau hidangan pembuka.',
        howToBuy: 'Risoles Ragout Ayam tersedia matang atau frozen. Beli langsung atau pesan antar via ojek online.'
    },
    { 
        id: 6, 
        name: 'Pastel Isi Sayur & Telur', 
        category: 'Gorengan', 
        price: 3000, 
        image: 'assets/images/pastel.jpg',
        description: 'Pastel renyah dengan isian tumisan sayuran seperti wortel, kentang, bihun, dan potongan telur rebus. Ukuran besar dan isian melimpah.',
        howToBuy: 'Pastel selalu dibuat fresh setiap hari. Kunjungi booth kami di pasar pagi atau pesan untuk acara.'
    },
    { 
        id: 7, 
        name: 'Bakwan Udang Sayur', 
        category: 'Gorengan', 
        price: 2000, 
        image: 'assets/images/bakwan.jpg',
        description: 'Bakwan sayur renyah dengan tambahan udang utuh di atasnya. Gurih dan nikmat dicocol dengan saus sambal kacang.',
        howToBuy: 'Gorengan favorit semua orang! Bakwan Udang Sayur tersedia mulai jam 10 pagi di toko.'
    },
    { 
        id: 8, 
        name: 'Nastar Premium Wijsman', 
        category: 'Kering', 
        price: 75000, 
        image: 'assets/images/nastar.jpg',
        description: 'Kue Nastar klasik dengan isian selai nanas homemade yang legit dan adonan kue yang rapuh dan lumer di mulut, menggunakan mentega Wijsman.',
        howToBuy: 'Nastar Premium Wijsman tersedia dalam kemasan toples 500gr. Pesan sekarang untuk Lebaran atau sebagai hampers.'
    },
    { 
        id: 9, 
        name: 'Kastengel Keju Edam', 
        category: 'Kering', 
        price: 85000, 
        image: 'assets/images/kastengel.jpg',
        description: 'Stik keju renyah dengan rasa keju Edam yang kuat dan taburan keju cheddar parut di atasnya. Pilihan tepat bagi pecinta keju.',
        howToBuy: 'Kastengel Keju Edam, teman ngemil yang pas. Tersedia dalam toples 500gr. Hubungi kami untuk pemesanan.'
    },
    { 
        id: 10, 
        name: 'Putri Salju Pandan', 
        category: 'Kering', 
        price: 65000, 
        image: 'assets/images/putri_salju.jpg', // Assuming putri_salju.jpg can represent pandan variant
        description: 'Kue Putri Salju dengan sentuhan aroma pandan yang wangi, berbentuk bulan sabit dan dibalut gula halus dingin. Manis dan menyegarkan.',
        howToBuy: 'Putri Salju Pandan, varian unik dari kue kering klasik. Kemasan toples 500gr. Order via WhatsApp.'
    }
];

// To make it accessible if data.js is loaded before other scripts that need it.
if (typeof window !== 'undefined') {
    window.productsData = productsData;
}
