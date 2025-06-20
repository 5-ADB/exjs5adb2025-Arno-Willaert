// Factuur Klasse
class Factuur {
  constructor(factuurnummer, datum, bedrag, betaald) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  markeerAlsBetaald() {
    this.betaald = true;
  }

  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(2)} - ${
      this.betaald ? "Betaald" : "Openstaand"
    }`;
  }
  factuurtjes(){
    console.log(`facturen voor karel kleintjes: "${this.factuurnummer}," "${this.datum}","${this.bedrag}","${this.betaald}",`);
  }
}

// Klant Klasse
class Klant {
  constructor(id, naam, email) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
  }

  printFacturen(){
    console.log(`facturen voor ${this.naam}:`);
  }

  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }

  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  getTotaalBedragOpenstaand() {
    // bereken het totaal van de facturen die nog niet betaald zijn.
    return  
  }
}

module.exports = {
  Factuur,
  Klant
};
