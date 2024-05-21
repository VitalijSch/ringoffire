import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game = new Game();
  currentCard: string | undefined = '';


  constructor() {
    this.newGame();
  }


  newGame() {
    console.log(this.game);
  }


  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      this.currentCard = this.game.stack.pop();
      setTimeout(() => {
        this.pickCardAnimation = false;
      }, 1500);
    }
  }
}
