import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    {
      title: "1 - Wasserfall",
      description: "Jeder beginnt gleichzeitig zu trinken, man darf erst aufhören, wenn die Person links von einem aufgehört hat."
    },
    {
      title: "2 - Du",
      description: "Der Spieler, der die Karte zieht, wählt jemanden aus, der trinken muss."
    },
    {
      title: "3 - Ich",
      description: "Der Spieler, der die Karte zieht, muss selbst trinken."
    },
    {
      title: "4 - Fragmaster",
      description: "Der Spieler, der die Karte zieht, wird zum Fragmaster. Jeder, der ihm eine Frage beantwortet, muss trinken. Diese Rolle bleibt, bis jemand anderes eine Vier zieht."
    },
    {
      title: "5 - Regel",
      description: "Der Spieler, der die Karte zieht, darf eine Regel aufstellen, die für den Rest des Spiels gilt. Jeder, der die Regel bricht, muss trinken."
    },
    {
      title: "6 - Daumenmeister",
      description: "Der Spieler, der die Karte zieht, wird zum Daumenmeister. Er kann jederzeit seinen Daumen auf den Tisch legen und die anderen Spieler müssen es ihm nachtun. Der Letzte, der das macht, muss trinken."
    },
    {
      title: "7 - Himmel",
      description: "Der Spieler, der die Karte zieht, streckt seine Hand in die Luft. Die anderen müssen es ihm nachmachen. Der Letzte, der das macht, muss trinken."
    },
    {
      title: "8 - Kumpel",
      description: "Der Spieler, der die Karte zieht, wählt einen Kumpel aus. Immer wenn einer der beiden trinken muss, muss der andere mittrinken."
    },
    {
      title: "9 - Reim",
      description: "Der Spieler, der die Karte zieht, sagt ein Wort, und im Uhrzeigersinn müssen die anderen Spieler ein Wort finden, das sich darauf reimt. Der Erste, dem kein Reim einfällt, muss trinken."
    },
    {
      title: "10 - Kategorie",
      description: "Der Spieler, der die Karte zieht, nennt eine Kategorie (z.B. Automarken), und im Uhrzeigersinn müssen die anderen Spieler etwas aus dieser Kategorie nennen. Der Erste, dem nichts mehr einfällt, muss trinken."
    },
    {
      title: "Bube - Jungfrau",
      description: "Alle Männer trinken."
    },
    {
      title: "Dame - Königin",
      description: "Alle Frauen trinken."
    },
    {
      title: "König - König",
      description: "Der Spieler, der die Karte zieht, gießt einen Teil seines Getränks in den Gemeinschaftsbecher. Der Spieler, der den vierten König zieht, muss den Becher austrinken."
    }
  ]
  title = '';
  description = '';
  @Input() card = '';


  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
