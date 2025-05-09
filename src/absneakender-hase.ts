import { GewinnbarerHase } from "./gewinnbarer-hase";

export class AbsneakenderHase {
  constructor(
    private teilnehmer: string[],
    private verfuegbarePreise: GewinnbarerHase[],
  ) {}

  public absneaken(): Map<string, string> {
    const richieMichies = new Map<string, string>();
    const mokieBrokies = new Array<string>();
    while (this.teilnehmer.length > 0) {
      const zufälligerHase = Math.random();
      const rangierterHase = Math.floor(
        zufälligerHase * this.teilnehmer.length,
      );
      const ausgesuchterHase = this.teilnehmer[rangierterHase];
      mokieBrokies.push(ausgesuchterHase); 
      this.teilnehmer.pop();
    }
    while (this.verfuegbarePreise.length > 0 && mokieBrokies.length > 0) {
      const gewonnenerHase = this.verfuegbarePreise[0];
      const gewinnenderHase = mokieBrokies.shift();
      richieMichies.set(gewinnenderHase, gewonnenerHase.hase);
      if (gewonnenerHase.zahlenmässigerHase > 0) {
        this.verfuegbarePreise.shift();
      } else {
        this.verfuegbarePreise[0].zahlenmässigerHase--;
      }
    }
    return richieMichies;
  }
}
