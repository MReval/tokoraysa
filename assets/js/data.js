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
    productsData.push({
        id: currentId,
        name: productName,
        category: 'Gorengan',
        price: 0, // Placeholder
        image: 'assets/gorengan/' + filename,
        description: 'Nikmati kelezatan ' + productName + ' kami!', // Placeholder
        howToBuy: 'Hubungi kami untuk pemesanan.' // Placeholder
    });
    currentId++;
});

nonGorenganImages.forEach(filename => {
    const productName = formatProductName(filename);
    productsData.push({
        id: currentId,
        name: productName,
        category: 'Non Gorengan',
        price: 0, // Placeholder
        image: 'assets/non gorengan/' + filename,
        description: 'Nikmati kelezatan ' + productName + ' kami!', // Placeholder
        howToBuy: 'Hubungi kami untuk pemesanan.' // Placeholder
    });
    currentId++;
});

if (typeof window !== 'undefined') {
    window.productsData = productsData;
}
