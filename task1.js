// Nested Function – Stipendiya hesabla
// Funksiya yaz:
// tələbənin ortalama balını qəbul etsin
// daxili funksiya faiz hesablasın
// 80+ bal → "Stipendiya qazanır"
// əks halda → "Qazana bilmir"

let bal = prompt("bali daxil edin:")

const stipendiya = (ortalama) => {
    function yoxla(){
        return ortalama >= 80     
    }
    if(yoxla()){
        return `spendiya qazanir ${ortalama}`
    }
    return `qazana bilmir ${ortalama}`
}
alert(stipendiya(bal));