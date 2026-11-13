type Gebruiker = {
  voornaam: string;
  leeftijd: number;
  profielfoto: string | null;
  biografie: string | undefined;
};

const gebruiker2: Gebruiker = {
  voornaam: "sam",
  leeftijd: 25,
  profielfoto: null,
  biografie: "ik ben sam",
};
const gebruiker3: Gebruiker = {
  voornaam: "sammy",
  leeftijd: 35,
  profielfoto: "image/pfp.png",
  biografie: undefined,
};

function toonProfiel(gebruiker: Gebruiker) {
  return `${gebruiker.voornaam} \n${gebruiker.leeftijd} \n${gebruiker.profielfoto ? gebruiker.profielfoto : "geen profielfoto"} \n${gebruiker.biografie ? gebruiker.biografie : "geen biografie"} \n`;
}

console.log(toonProfiel(gebruiker2));
console.log(toonProfiel(gebruiker3));
