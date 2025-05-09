import { AbsneakenderHase } from "./absneakender-hase.js";
import { GewinnbarerHase } from "./gewinnbarer-hase.js";

export class Verlosung {

  public main() {
    const teilnehmer = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@Ronaldo7",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
    ];
    const fiktivePreise = [
      new GewinnbarerHase("iPhone 16 Pro", 1),
      new GewinnbarerHase("Trip nach Dubi", 1),
      new GewinnbarerHase("Stepper nach Isti", 1),
      new GewinnbarerHase("10 kg Haribo", 2),
      new GewinnbarerHase("PlayStation 5 Slim", 3),
      new GewinnbarerHase("gebrauchte Sneaker", 5),
    ];
    const Gewinner = new AbsneakenderHase(
      teilnehmer,
      fiktivePreise,
    ).absneaken();
    for (const [opfer, gewonnenerHase] of Gewinner.entries()) {
      console.log(`${opfer} gewinnt ${gewonnenerHase}`);
    }
  }
}

new Verlosung().main();
