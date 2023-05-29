import { Component, OnInit } from '@angular/core';
import { ICards } from 'src/app/interface/cards';
import { CardService } from 'src/app/shared/service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent implements OnInit {
  rightbar!: ICards[]
  constructor(private rightService: CardService) { }

  ngOnInit() {
    this.rightService.get_mock().subscribe(item => {
      this.rightbar = item.slice(0, 10)
    })
  }

}
