function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function Mudarestado1(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}

function obterFrase (){
    var r_text = new Array ();
    r_text[0] = "Qual das frases a seguir está incorreta?";
    r_text[1] = "O que está de errado na frase a seguir: \"He were doing the exercises.\"";
    r_text[2] = "O que significa \"I wonder...\"";
    r_text[3] = "Qual seria a question tag correta para esta frase: \"They'd get the visa, _______\"";
    r_text[4] = "Qual das frases a seguir está CORRETA em relação ao Present Unreal?";
    r_text[5] = "Qual é a única frase a seguir com a preposição CORRETA?";
    r_text[6] = "I did everything that I ______, but we lost the match.";
    r_text[7] = "Como fica 'eles são inteligentes' em inglês?";
    r_text[8] = "Como se fala outono em inglês?";
    r_text[9] = "___ you see your friends?";
    r_text[10] = "He ___ in Curitiba.";
    var r_quest1 = new Array ();
    r_quest1[0] = "Told is the past of Tell.";
    r_quest1[1] = "doing";
    r_quest1[2] = "\"Eu desejo...\"";
    r_quest1[3] = "haven't they?";
    r_quest1[4] = "\"If I had ate junk food, I'd put on weight.\"";
    r_quest1[5] = "As a matter of fact, we haven't seen them.";
    r_quest1[6] = "may";
    r_quest1[7] = "They are intelligent";
    r_quest1[8] = "Spring";
    r_quest1[9] = "Does";
    r_quest1[10] = "living";
    var r_quest2 = new Array ();
    r_quest2[0] = "You musn't overpass this line.";
    r_quest2[1] = "He";
    r_quest2[2] = "\"Eu me pergunto...\"";
    r_quest2[3] = "have they?";
    r_quest2[4] = "If I had eaten junk food, I'd put on weight.\"";
    r_quest2[5] = "As a matter to fact, we haven't seen them.";
    r_quest2[6] = "could";
    r_quest2[7] = "There intelligent"
    r_quest2[8] = "Winter";
    r_quest2[9] = "Do";
    r_quest2[10] = "live";
    var r_quest3 = new Array ();
    r_quest3[0] = "I have a sore troat.";
    r_quest3[1] = "the";
    r_quest3[2] = "\"Eu prefiro...\"";
    r_quest3[3] = "would they?";
    r_quest3[4] = "If I eaten junk food, I'd put on weight.\"";
    r_quest3[5] = "As a matte since fact, we haven't seen them.";
    r_quest3[6] = "can";
    r_quest3[7] = "They is intelligent";
    r_quest3[8] = "Summer";
    r_quest3[9] = "Am";
    r_quest3[10] = "lives";
    var r_quest4 = new Array ();
    r_quest4[0] = "He was doing the exercises.";
    r_quest4[1] = "were";
    r_quest4[2] = "\"Eu quero...\"";
    r_quest4[3] = "wouldn't they?";
    r_quest4[4] = "If I ate junk food, I'd put on weight.\"";
    r_quest4[5] = "As a matter for fact, we haven't seen them.";
    r_quest4[6] = "can't";
    r_quest4[7] = "They am intelligent";
    r_quest4[8] = "Fall";
    r_quest4[9] = "Are";
    r_quest4[10] = "liver";
    var i = Math.floor(10*Math.random())
    var valorMaximo = 7;
    document.getElementById("english").innerHTML = "<h1>" + r_text[i] + "</h1>";
if (i == 0){
    document.getElementById("english").innerHTML = "<h1>" + r_text[0] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[0] +"</button>";
} else if (i == 1){
    document.getElementById("english").innerHTML = "<h1>" + r_text[1] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[1] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[1] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[1] +"</button>" + "<button class='button button3' value='1' d='true' onClick='real();'>" + r_quest4[1] +"</button>";
} else if (i == 2){
    document.getElementById("english").innerHTML = "<h1>" + r_text[2] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' Click='carregarSpoiler(); falso();'>" + r_quest3[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[2] +"</button>";
} else if (i == 3){
    document.getElementById("english").innerHTML = "<h1>" + r_text[3] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1 id='true' onClick='real();'>" + r_quest4[3] +"</button>";
} else if (i == 4){
    document.getElementById("english").innerHTML = "<h1>" + r_text[4] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest4[4] +"</button>";
} else if (i == 5){
    document.getElementById("english").innerHTML = "<h1>" + r_text[5] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest1[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[5] +"</button>";
}else if (i == 6){
    document.getElementById("english").innerHTML = "<h1>" + r_text[6] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[6] +"</button>";
}else if( i == 7){
    document.getElementById("english").innerHTML = "<h1>" + r_text[7] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='true' onClick='real();'>" + r_quest1[7] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[7] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[7] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[7] +"</button>";
}else if(i == 8){
    document.getElementById("english").innerHTML = "<h1>" + r_text[8] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[8] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[8] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[8] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest4[8] +"</button>";
}else if(i == 9){
    document.getElementById("english").innerHTML = "<h1>" + r_text[9] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[9] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[9] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[9] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[9] +"</button>";
}else if(i == 10){
    document.getElementById("english").innerHTML = "<h1>" + r_text[10] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[10] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[10] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[10] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[10] +"</button>";
}
}

function carregarSpoiler(){
    var r_spoiler = new Array();
    r_spoiler[0] = "Kuririn morre em Dragon Ball!";
    r_spoiler[1] = "No final da 4º temporada de Breaking Bad, Brock é envenenado por Walter White.";
    r_spoiler[2] = "Spider Man: No Way Home não é tão bom assim, na verdade, a única coisa que salva aquele filme é o fan service dos três Homens-aranhas.";
    r_spoiler[3] = "The Rock não combina nem um pouco com o personagem Adão Negro. Parece que a qualquer minuto ele vai soltar uma piada.";
    r_spoiler[4] = "A única música boa do filme Encanto é: We  Don't Talk About Bruno. De resto são todas medíocres.";
    r_spoiler[5] = "Psicopata Americano é um filme superestimado demais.";
    r_spoiler[6] = "Eren mata Zeke no final da 5º temporada de Attack on Titan.";
    r_spoiler[7] = "Walter White morre no final de Breaking Bad.";
    r_spoiler[8] = "Eles destroem o trailer em Breaking Bad.";
    r_spoiler[9] = "Em Prsisoners o Alex realmente só queria brincar com as crianças.";
    r_spoiler[10] = "Vito Corleone morre no final de O Poderoso Chefão.";
    r_spoiler[11] = "A personagem de Uma Thurman é casada com o Bill em Kill Bill.";
    r_spoiler[12] = "Em Cães de Aluguel, Mr. Orange era o policial disfarçado.";
    r_spoiler[13] = "Em Interestelar, Joseph era o fantasma que falava com sua filha.";
    r_spoiler[14] = "Em Sexta-Feira 13, Jason não era o real assassino sim sua mãe.";
    r_spoiler[15] = "A história de Taxi Driver não era real, mas sim uma história contada por Travis.";
    r_spoiler[16] = "Em Parasite, já haviam outros parasitas na casa.";
    r_spoiler[17] = "Dr. King morre em Django Livre.";
    r_spoiler[18] = "Em Matrix, Neo tem poderes na vida real.";
    r_spoiler[19] = "Em Death Note, Kira morre no final.";
    r_spoiler[20] = "O fato de Neo ter poderes fora de Matrix é muito forçado.";
    r_spoiler[21] = "Homem-Aranha 2 é um filme bem mais ou menos. Acaba sendo um filme mais do Peter Paker do que do Homem-Aranha.";
    r_spoiler[22] = "Army of Darkness ou Uma Noite Alucinante 3, é um filme muito ridiculo, não fazendo jus aos seus anteriores. A cena dos mini Ash's é extrememante medíocre.";
    r_spoiler[23] = "Em Homem-Aranha no Aranhaverso, o Gatuno é o tio de Miles Morales.";
    r_spoiler[24] = "Em Um Sonho de Liberdade, Andy não matou sua esposa e amante.";
    r_spoiler[25] = "Em Nightcrawler, Louis arma um plano para fazer com que Rick morra.";
    r_spoiler[26] = "Driver é um filme muito superestimado pela comunidade incel.";
    var images = new Array();
    images[0] = '<img src="../img/kuririn.png">';
    images[1] = '<img src="../img/brock.png">';
    images[2] = '<img src="../img/spiderman.png">';
    images[3] = '<img src="../img/blackadam.png">';
    images[4] = '<img src="../img/bruno.png">';
    images[5] = '<img src="../img/sigma.png">';
    images[6] = '<img src="../img/zeke.png">';
    images[7] = '<img src="../img/walter_die.jpg">';
    images[8] = '<img src="../img/rv.jpg">';
    images[9] = '<img src="../img/alex.jpg">';
    images[10] = '<img src="../img/corleone.jpg">';
    var i = Math.floor(10*Math.random())
    document.getElementById("azar").innerHTML= "<img>" + images[i] + "</img>" + "<p>" + r_spoiler[i] + "</p>";
}

function real(){
    var sim = document.getElementById("true");
    document.getElementById("english").innerHTML = "<h1 id='acertou'>Correto!</h1>" + "<button class='button button3' id='certo' onClick='obterFrase();'>Continuar</button>"
}

function falso(){
    document.getElementById("english").innerHTML = "<h1 id='errou'>Errado!</h1>" + "<button class='button button3' id='erro' onClick='obterFrase(); comeback();'>Continuar</button>"
}

function comeback(){
    document.getElementById("azar").innerHTML= "";
}

function backHome(){
    document.getElementById("english").innerHTML = "<href='../pages/index.html'</href>"; 
}

function reset(){
    document.getElementById("assunto").innerHTML = "";
}