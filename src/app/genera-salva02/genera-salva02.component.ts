import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-genera-salva02',
  templateUrl: './genera-salva02.component.html',
  styleUrls: ['./genera-salva02.component.css'],
  //providers: [MyserviceService]

})

export class GeneraSalva02Component implements OnInit {

  mydata:number=0
  nuovoNumero:number=0

  constructor() { }
  ngOnInit(): void {
    this.onLeggiNuovoDato()
  }

  // -------------------------------
  // gestione degli eventi
  onLeggiNuovoDato(){
    this.mydata=this.readNumber() 
  }

  onGeteraNuovoDato(){
    this.genNewNumber()
  }


  // -------------------------------
  // gestione del dato
  genNewNumber(){
    let n:number=Math.round(Math.random()*100)
    console.log("Generato numero "+ n)
    this.nuovoNumero=n
  }

  readNumber(){
    return this.nuovoNumero
  }


}
