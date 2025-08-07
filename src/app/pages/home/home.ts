import { Component } from '@angular/core';
import { Tarjets } from "../../components/tarjets/tarjets";

@Component({
  selector: 'app-home',
  imports: [Tarjets],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
