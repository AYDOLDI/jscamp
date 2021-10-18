console.log("Hello Kodlama.io Community")

//var dolarDun = 9.20
//dolarDun = "Ankara"
let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "a"
//yani typsafe değil bu dil. hoca yine de boyle kullanmayın diyo dpnusturup kullanın diyo
console.log(dolarDun)

{
    let dolarDun = 9.10
}

const euroDun = 11
//euroDun = 10 ----- yok böyle bişi
console.log(euroDun)

//array
//isimlendirirken ---> camelCasing - PascalCasing, jsde camelCasing kullanıyor community
let konutKredileri = ["Konut Kredisi", 12, "Emlak Konut Kredisi", "Kamu Konut Kredisi", ["a","b","c"], "Özel Konut Kredisi"]


console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
    const element = konutKredileri[i];
    console.log("<li>" + element + "</li>");
    
}
console.log("</ul>");