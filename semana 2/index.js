const arrayAlbuns = []

album1 = {
    Album: "Kacey Musgraves – Golden Hour",
    ano: 2019,
    ganhouGrammy:  true,
    outrosIndicados:  ["Post Malone – Beerbongs & Bentleys","Black Panther: The Album, Music from and Inspired by","Brandi Carlile – By the Way, I Forgive You","Janelle Monáe – Dirty Computer","H.E.R. – H.E.R.","Cardi B – Invasion of Privacy","Drake – Scorpion"]
} 

album2 = {
    Album: "Bruno Mars – 24K Magic",
    ano: 2018,
    ganhouGrammy: true,
    outrosIndicados: ["Childish Gambino – “Awaken, My Love!”" , "Kendrick Lamar – DAMN.", "Jay-Z – 4:44", "Lorde – Melodrama"]
} 

album3 = {
    Album:  "Adele – 25",
    ano: 2017,
    ganhouGrammy: true,
    outrosIndicados: ["Beyoncé – Lemonade", "Justin Bieber – Purpose", "Sturgill Simpson – A Sailor’s Guide to Earth", "Drake – Views"]
}

// arrayAlbuns.push(album1, album2, album3)
// console.log(arrayAlbuns)

if(album1.ganhouGrammy === true){
    arrayAlbuns.push(album1)
}else{
    console.log("Este algum não ganhou Grammy")
}

if(album2.ganhouGrammy === true){
    arrayAlbuns.push(album2)
}else{
    console.log("Este algum não ganhou Grammy")
}

if(album3.ganhouGrammy === true){
    arrayAlbuns.push(album3)
}else{
    console.log("Este algum não ganhou Grammy")
}
console.log(arrayAlbuns )


