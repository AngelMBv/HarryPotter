const characterSelect = document.getElementById("character-select");
const characterName = document.getElementById("character-name");
const characterImage = document.getElementById("character-image");
const characterHouse = document.getElementById("character-house");
const characterDescription = document.getElementById("character-description");
const characterSpell = document.getElementById("character-spell");
const characterInfo = document.getElementById("character-info");
const characters = {
    harry: {
        name: "Harry Potter",
        house: "Gryffindor",
        description: "El famoso mago que sobrevivió al ataque de Lord Voldemort cuando era un bebé. Protagonista de la serie.",
        spell: "Expecto Patronum"
    },
    hermione: {
        name: "Hermione Granger",
        house: "Gryffindor",
        description: "Una de las mejores amigas de Harry y Ron, conocida por su inteligencia y habilidades mágicas excepcionales.",
        spell: "Alohomora"
    },
    ron: {
        name: "Ron Weasley",
        house: "Gryffindor",
        description: "Mejor amigo de Harry y Hermione, conocido por su lealtad y sentido del humor.",
        spell: "Lumos"
    },
    dumbledore: {
        name: "Albus Dumbledore",
        house: "Gryffindor",
        description: "El director de Hogwarts y uno de los magos más poderosos de todos los tiempos.",
        spell: "Patronus Charm"
    },
    snape: {
        name: "Severus Snape",
        house: "Slytherin",
        description: "Profesor de Pociones en Hogwarts, con un pasado misterioso y complicado.",
        spell: "Sectumsempra"
    },
    luna: {
        name: "Luna Lovegood",
        house: "Ravenclaw",
        description: "Una estudiante excéntrica y amiga de Harry, conocida por su creencia en criaturas mágicas y teorías extravagantes.",
        spell: "Expecto Patronum"
    },
    cedric: {
        name: "Cedric Diggory",
        house: "Hufflepuff",
        description: "Estudiante de Hogwarts y capitán del equipo de Quidditch de Hufflepuff, conocido por su valentía.",
        spell: "Accio"
    },
    voldemort: {
        name: "Lord Voldemort",
        house: "Slytherin",
        description: "El mago tenebroso más poderoso de la historia, conocido por su deseo de dominación y su obsesión por Harry Potter.",
        spell: "Avada Kedavra"
    },
    draco: {
        name: "Draco Malfoy",
        house: "Slytherin",
        description: "Estudiante de Slytherin, conocido por su actitud arrogante y su conflicto con Harry Potter.",
        spell: "Expelliarmus"
    },
    sirius: {
        name: "Sirius Black",
        house: "Gryffindor",
        description: "El padrino de Harry y miembro de la familia Black, conocido por su lucha contra las artes oscuras.",
        spell: "Stupefy"
    },
};

characterSelect.addEventListener("change", () => {
    const selectedCharacter = characterSelect.value;
    if (selectedCharacter !== "") {
        const character = characters[selectedCharacter];

        characterName.textContent = character.name;
        characterImage.src = `img/${selectedCharacter}.png`;
        characterHouse.textContent = `Casa de Hogwarts: ${character.house}`;
        characterDescription.textContent = `Descripción: ${character.description}`;
        characterSpell.textContent = `Hechizo más utilizado: ${character.spell}`;

        characterInfo.style.display = "block";
    } else {
        characterInfo.style.display = "none";
    }
});
