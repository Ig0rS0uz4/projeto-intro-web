const listasAlbum1 = () =>{
    const primeiroAlbum = document.getElementById("primeiro")

    
    
    const album1 = document.createElement("li")
    album1.innerHTML = "Album: Kacey Musgraves – Golden Hour"
    primeiroAlbum.insertAdjacentElement('afterbegin', album1)
    
    const ano1 = document.createElement("li")
    ano1.innerHTML = "Ano: 2019"
    primeiroAlbum.insertAdjacentElement('beforeend', ano1)
    
    const ganhou1 = document.createElement("li")
    ganhou1.innerHTML = "Ganhou Grammy:  Sim "
    primeiroAlbum.insertAdjacentElement('beforeend', ganhou1)
    
    const outros1 = document.createElement("li")
    outros1.innerHTML = "Outros Indicados:  Post Malone – Beerbongs & Bentleys,  Black Panther: The Album,  Music from and Inspired by,  Brandi Carlile – By the Way,  I Forgive You,  Janelle Monáe – Dirty Computer,  H.E.R. – H.E.R., Cardi B – Invasion of Privacy,  Drake – Scorpion"
    primeiroAlbum.insertAdjacentElement('beforeend', outros1)
}

const listasAlbum2 = ()=>{
    const segundoAlbum = document.getElementById("segundo")

    const album2 = document.createElement("li")
    album2.innerHTML = "Album: Bruno Mars – 24K Magic"
    segundoAlbum.insertAdjacentElement('afterbegin', album2)
    
    const ano2 = document.createElement("li")
    ano2.innerHTML = "Ano: 2018"
    segundoAlbum.insertAdjacentElement('beforeend', ano2)
    
    const ganhou2 = document.createElement("li")
    ganhou2.innerHTML = "Ganhou Grammy:  Sim "
    segundoAlbum.insertAdjacentElement('beforeend', ganhou2)
    
    const outros2 = document.createElement("li")
    outros2.innerHTML = "OutrosIndicados: Childish Gambino – “Awaken, My Love!” ,  Kendrick Lamar – DAMN.,  Jay-Z – 4:44,  Lorde – Melodrama"
    segundoAlbum.insertAdjacentElement('beforeend', outros2)
}

const listasAlbum3 = () =>{
    const terceiroAlbum = document.getElementById("terceiro")

    const album3 = document.createElement("li")
    album3.innerHTML = "Album:  Adele – 25"
    terceiroAlbum.insertAdjacentElement('afterbegin', album3)
    
    const ano3 = document.createElement("li")
    ano3.innerHTML = "Ano: 2017"
    terceiroAlbum.insertAdjacentElement('beforeend', ano3)
    
    const ganhou3 = document.createElement("li")
    ganhou3.innerHTML = "Ganhou Grammy:  Sim "
    terceiroAlbum.insertAdjacentElement('beforeend', ganhou3)
    
    const outros3 = document.createElement("li")
    outros3.innerHTML = "OutrosIndicados: Beyoncé – Lemonade,  Justin Bieber – Purpose, Sturgill Simpson – A Sailor’s Guide to Earth, Drake – Views]"
    terceiroAlbum.insertAdjacentElement('beforeend', outros3)
}
const busca = document.getElementById("busca")
const alerta = document.getElementById("nadaEncontrado").style.display = "none";
function clickBotao(){
    console.log(busca.value)
    const alerta = document.getElementById("nadaEncontrado").style.display = "none";
   if(busca.value === "Adele"){
    const retiraCard1 = document.getElementById("album1").style.display = "none";
    const retiraCard2 = document.getElementById("album2").style.display = "none";
    const retiraCard3 = document.getElementById("album3").style.display = "block";
    console.log("entrou")
   }else if(busca.value === "Bruno"){
    const retiraCard1 = document.getElementById("album1").style.display = "none";
    const retiraCard2 = document.getElementById("album2").style.display = "block";
    const retiraCard3 = document.getElementById("album3").style.display = "none"
   }else if(busca.value === "Kacey"){
    const retiraCard1 = document.getElementById("album1").style.display = "block";
    const retiraCard2 = document.getElementById("album2").style.display = "none";
    const retiraCard3 = document.getElementById("album3").style.display = "none"
   }else if(busca.value === ""){
    alert ("você não digitou nada")
   }else{
    const retiraCard1 = document.getElementById("album1").style.display = "none";
    const retiraCard2 = document.getElementById("album2").style.display = "none";
    const retiraCard3 = document.getElementById("album3").style.display = "none"
    const alerta = document.getElementById("nadaEncontrado").style.display = "block";
   }
} 



listasAlbum1()
listasAlbum2()
listasAlbum3()
