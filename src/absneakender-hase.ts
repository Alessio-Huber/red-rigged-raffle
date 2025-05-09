import { GewinnbarerHase } from "./gewinnbarer-hase";

export class AbsneakenderHase {
  constructor(
    private brokieMokies: string[],
    private gewinnbareHasen: GewinnbarerHase[],
  ) {}

  public absneaken(): Map<string, string> {
    const richieMichies = new Map<string, string>();
    const mokieBrokies = new Array<string>();
    while (this.brokieMokies.length > 0) {
      const zufälligerHase = Math.random();
      const rangierterHase = Math.floor(
        zufälligerHase * this.brokieMokies.length,
      );
      const ausgesuchterHase = this.brokieMokies[rangierterHase];
      mokieBrokies.push(ausgesuchterHase); 
      this.brokieMokies.pop();
    }
    while (this.gewinnbareHasen.length > 0 && mokieBrokies.length > 0) {
      const gewonnenerHase = this.gewinnbareHasen[0];
      const gewinnenderHase = mokieBrokies.shift();
      richieMichies.set(gewinnenderHase, gewonnenerHase.hase);
      if (gewonnenerHase.zahlenmässigerHase > 0) {
        this.gewinnbareHasen.shift();
      } else {
        this.gewinnbareHasen[0].zahlenmässigerHase--;
      }
    }
    return richieMichies;
  }
}
