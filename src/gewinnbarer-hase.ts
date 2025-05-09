export class GewinnbarerHase {

  constructor(
    private bezeichnung: string,
    private verfuegbareAnzahl: number,
  ) {}

  public get hase(): string {
    return this.bezeichnung;
  }

  public get zahlenmässigerHase(): number {
    return this.verfuegbareAnzahl;
  }

  public set zahlenmässigerHase(neuerHase: number) {
    this.verfuegbareAnzahl = neuerHase;
  }
}
