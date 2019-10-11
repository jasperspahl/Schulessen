function weekNumber(date){
    const d = date||new Date();
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
}
//console.log(weekNumber());

function getEssenUrl(date){
  const d = date||new Date();
  return `https://www.parzival-zentrum.de/wp-content/uploads/2018/01/speiseplan_${d.getFullYear()}kw${weekNumber()}_pz.pdf`;
}
console.log(getEssenUrl());

// insert html

let main = document.querySelector('main');
const url = getEssenUrl();
const innerHtml = `<a href="${url}"> Dieser Link sollte dich zum aktuellen Essensplan f&uumlr diese Woche bringen</a>`;
main.innerHTML = innerHtml;
