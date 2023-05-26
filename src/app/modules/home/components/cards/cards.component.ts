import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICards } from 'src/app/interface/cards';
import { CardService } from 'src/app/shared/service/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards!: ICards[];
  constructor(private APIservice: CardService) { }
  private subscription = new Subscription();

  ngOnInit(): void {
    this.getItems()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getItems() {
    this.subscription = this.APIservice.get_mock().subscribe(
      data => {
        this.cards = data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
