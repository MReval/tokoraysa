const productsData = [];
const gorenganImages = ["Gorengan Tahu.jpg", "Kroket.jpg", "LumpiaGoreng.jpg", "MartabakTelor.jpg", "Pastel.jpg", "Risoles.jpg", "Sosis Solo.jpg"];
const nonGorenganImages = ["DadarGulung.jpg", "KetanSrikaya.jpg", "Klepon.jpg", "KueLapis.jpg", "KueLumpur.jpg", "KuePie.jpg", "LapisBeras.jpg", "Lemper.jpg", "LontongSayur.jpg", "RotiLapis.jpg", "SingkongPelangi.jpg", "TalamUbi.jpg", "wajik.jpg"];
let currentId = 1;

// Helper function to format product names
function formatProductName(filename) {
    let name = filename.replace(".jpg", "");
    // Add space before uppercase letters (for camelCase)
    name = name.replace(/([A-Z])/g, ' $1');
    // Replace underscores with spaces
    name = name.replace(/_/g, ' ');
    // Trim leading/trailing spaces and remove multiple spaces
    name = name.trim().replace(/\s+/g, ' ');
    return name;
}

gorenganImages.forEach(filename => {
    const productName = formatProductName(filename);
    const priceUnits = Math.floor(Math.random() * (14 - 4 + 1) + 4); // 4 to 14 units of 500
    const productPrice = priceUnits * 500; // Generates 2000, 2500, ..., 7000
    productsData.push({
        id: currentId,
        name: productName,
        category: 'Gorengan',
        price: productPrice,
        image: 'assets/gorengan/' + filename,
        description: 'Nikmati kelezatan ' + productName + ' kami!', // Placeholder
        howToBuy: 'Hubungi kami untuk pemesanan.' // Placeholder
    });
    currentId++;
});

nonGorenganImages.forEach(filename => {
    const productName = formatProductName(filename);
    let productPrice;
    if (filename === "LontongSayur.jpg") {
        const lontongPriceUnits = Math.floor(Math.random() * (50 - 30 + 1) + 30); // 30 to 50 units of 500
        productPrice = lontongPriceUnits * 500; // Generates 15000, 15500, ..., 25000
    } else {
        const priceUnits = Math.floor(Math.random() * (30 - 6 + 1) + 6); // 6 to 30 units of 500
        productPrice = priceUnits * 500; // Generates 3000, 3500, ..., 15000
    }
    productsData.push({
        id: currentId,
        name: productName,
        category: 'Non Gorengan',
        price: productPrice,
        image: 'assets/non gorengan/' + filename,
        description: 'Nikmati kelezatan ' + productName + ' kami!', // Placeholder
        howToBuy: 'Hubungi kami untuk pemesanan.' // Placeholder
    });
    currentId++;
});

if (typeof window !== 'undefined') {
    window.productsData = productsData;
}
