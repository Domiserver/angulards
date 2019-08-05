import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from 'src/app/utilities/router.animation';


@Component({
  selector: 'app-venebanks',
  templateUrl: './venebanks.component.html',
  styleUrls: ['./venebanks.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class VenebanksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
