const baslik=document.querySelector('#baslk')

baslik.style.color='red'
baslik.style.textAlign='center'


let resim=document.querySelector(".resim");
let ses=document.querySelector(".ses");

document.querySelector(".on").onclick=()=>{
resim.src="./img/img.gif"

ses.play();

//sesin volume nü 0-1 arasında değer vererek ayarlayabiliriz
ses.volume='0.1'}

document.querySelector(".off").onclick=()=>{

 resim.src="./img/telbagla.gif"
 ses.pause();
}

document.querySelector(".speak").onclick = () => {
  resim.src = "./img/telefon.gif";
  ses.pause();
};

resim.onmouseover=()=>{
 resim.src="./img/aslan1.jpeg"
}
// 2.Yol
resim.addEventListener("mouseout", () => {
  resim.src = "./img/aslan2.jpeg";
});

const check=  document.querySelector(".checkbox");

const text= document.querySelector(".textbox");

text.onkeyup=()=>{
 if(check.checked)
 {    text.value=text.value.toUpperCase()
 
 }else{
    text.value=text.value.toLowerCase()
 }
}

//*ekle butonuna basıldığında inputa girilen değerler benim ul listeme eklensin

document.querySelector(".ekle").onclick=()=>{
  const liste = document.querySelector(".liste");
  const language = document.querySelector(".language");

  liste.innerHTML = liste.innerHTML + `<li>${language.value} </li>`;

  //*input girişi yapılıp eleman üstte listeye eklendikten sonra input temizlensin
  language.value = "";

//*UZUN YOL
  // yeni girilen satiri saklamak icin bir li olusturduk.
  // const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  // const textNode = document.createTextNode(satir.value);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  // yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  // liste.appendChild(yeniLi);
}

//*!sil butonu tıklandığında

document.querySelector(".sil").onclick = ()=>{
const liste = document.querySelector(".liste");

liste.removeChild(liste.lastElementChild);//*listenin son elemanını sil
// liste.removeChild(liste.firstElementChild);//*listenin ilk elemanını sil

}

//! key kodlari kullanilarak kod yazma
document.querySelector(".language").onkeydown=(tuslar)=>{
  console.log(tuslar);

  //*eğer enter=13 tuşuna basıldıysa
  if (tuslar.keyCode === 13) {
    document.querySelector(".ekle").click();
  }

  //*eğer delete =46 tuşuna basılırsa sil butonu tetiklensin--mac klavye ile calismaz
  if (tuslar.keyCode === 46) {
    document.querySelector(".sil").click();
  }
}
//!listemin başına h1 tag i eklemek

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
const liste = document.querySelector(".liste"); //h1 eklemek için class=input-div yerine class=forH1 yapabilirsin
// const h1 = document.createElement("h1");
// const yazi = document.createTextNode("Programlama Dilleri");
// h1.appendChild(yazi);
// inputDiv.after(h1); //input-div'in sonrasina h1'i ekliyoruz.

//!kısa yol

liste.innerHTML = `<h1 class='h1js'> ${"Programlama Dilleri"}</h1>` +liste.innerHTML;