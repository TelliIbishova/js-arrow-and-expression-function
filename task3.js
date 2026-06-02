// Endirim sistemi
// Funksiya yaz:
// alış-veriş məbləği qəbul etsin
// 100+ → 10% endirim
// 200+ → 20% endirim
// nəticə: ödəniləcək məbləğ


let mebleg = prompt("Aliş-veriş məbləğini daxil edin:");

const ÖdenilecekMebleg = function(mebleg) {
    if (mebleg >= 200) {
        return mebleg - (mebleg * 20 / 100);
    } else if (mebleg >= 100) {
        return mebleg - (mebleg * 10 / 100);
    } else {
        return mebleg;
    }
}

alert( ÖdenilecekMebleg(mebleg));