const album1 =  "Kacey Musgraves – Golden Hour"
const ano1 = 2019
const ganhouGrammy1 = true
const outrosIndicados1 = ["Post Malone – Beerbongs & Bentleys","Black Panther: The Album, Music from and Inspired by","Brandi Carlile – By the Way, I Forgive You","Janelle Monáe – Dirty Computer","H.E.R. – H.E.R.","Cardi B – Invasion of Privacy","Drake – Scorpion"]

const album2 =  "Bruno Mars – 24K Magic"
const ano2 = 2018
const ganhouGrammy2 = true
const outrosIndicados2 = ["Childish Gambino – “Awaken, My Love!”" , "Kendrick Lamar – DAMN.", "Jay-Z – 4:44", "Lorde – Melodrama"]

const album3 =  "Adele – 25"
const ano3 = 2017
const ganhouGrammy3 = true
const outrosIndicados3 = ["Beyoncé – Lemonade", "Justin Bieber – Purpose", "Sturgill Simpson – A Sailor’s Guide to Earth", "Drake – Views"]

while (outrosIndicados1, outrosIndicados2, outrosIndicados3 === []) {
    console.log(outrosIndicados1.toString,outrosIndicados2.toString, outrosIndicados3.toString)
}
// console.log(`
// Album: ${album1.toUpperCase()}
// Ano: ${ano1}
// Ganhou Grammy: ${ganhouGrammy1}
// Outros indicados: ${outrosIndicados1}
// `)
// console.log(`
// Album: ${album2.toUpperCase()}
// Ano: ${ano2}
// Ganhou Grammy: ${ganhouGrammy2}
// Outros indicados: ${outrosIndicados2}
// `)
// console.log(`
// Album: ${album3.toUpperCase()}
// Ano: ${ano3}
// Ganhou Grammy: ${ganhouGrammy3}
// Outros indicados: ${outrosIndicados3}
// `)

let albuns = [
    {
        Album: "Kacey Musgraves – Golden Hour",
        ano: 2019,
        ganhouGrammy:  true,
        outrosIndicados:  ["Post Malone – Beerbongs & Bentleys","Black Panther: The Album, Music from and Inspired by","Brandi Carlile – By the Way, I Forgive You","Janelle Monáe – Dirty Computer","H.E.R. – H.E.R.","Cardi B – Invasion of Privacy","Drake – Scorpion"]
    },
    {
        Album: "Bruno Mars – 24K Magic",
        ano: 2018,
        ganhouGrammy: true,
        outrosIndicados: ["Childish Gambino – “Awaken, My Love!”" , "Kendrick Lamar – DAMN.", "Jay-Z – 4:44", "Lorde – Melodrama"]
    }, 
    
    {
        Album:  "Adele – 25",
        ano: 2017,
        ganhouGrammy: true,
        outrosIndicados: ["Beyoncé – Lemonade", "Justin Bieber – Purpose", "Sturgill Simpson – A Sailor’s Guide to Earth", "Drake – Views"]
    }
]
//  for(let novosAlbuns of albuns){
//      console.log(novosAlbuns)

//  }

let albumBruno = {
    Album: "Bruno Mars – 24K Magic",
    ano: 2018,
    ganhouGrammy: true,
    outrosIndicados: ["Childish Gambino – “Awaken, My Love!”" , "Kendrick Lamar – DAMN.", "Jay-Z – 4:44", "Lorde – Melodrama"]
}

console.log(albumBruno)

function funcaoObjeto(albumBruno) {
    let string = albumBruno
    console.log(string)
 }
 funcaoObjeto(albumBruno(string.toString))