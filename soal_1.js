function BilPrima(angka) {
    for (let x = 2; x <= Math.sqrt(angka); x++) {
        if (angka % x === 0) return false;
    }
    return angka > 1;
}

console.log("Bilangan prima dari 1 sampai 1000 sebagai berikut:");

const AngkaBilPrima = [];
for (let x = 2; x <= 1000; x++) {
    if (BilPrima(x)) AngkaBilPrima.push(x);
}

for (const prima of AngkaBilPrima) {
    console.log(prima);
}