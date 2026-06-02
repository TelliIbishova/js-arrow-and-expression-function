//  Maaşdan vergi çıxma
// Funksiya yaz:
// maaş qəbul etsin
// 13% vergi çıx
// net maaşı qaytar


let maas = prompt("Maaş daxil edin:");

const netMaas = function(maas){
    return maas - (maas * 13 / 100)
}

alert(netMaas(maas));