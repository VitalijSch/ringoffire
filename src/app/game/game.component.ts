import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAppPlayerComponent } from '../dialog-app-player/dialog-app-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, PlayerComponent, MatButtonModule, MatIconModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game = new Game();
  currentCard: string = '';


  constructor(public dialog: MatDialog) {
    this.newGame();
  }


  newGame() {
    console.log(this.game);
  }


  takeCard() {
    if (!this.pickCardAnimation) {
      this.pickCardAnimation = true;
      const card = this.game.stack.pop();
      this.currentCard = card !== undefined ? card : '';
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.currentCard);
      }, 1500);
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAppPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}
