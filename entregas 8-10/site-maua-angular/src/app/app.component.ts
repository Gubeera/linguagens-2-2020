import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  obterEstilosBotao(){
    return{
      backgroundColor: 'rgb(0, 123, 255)',
      padding: '8px',
      width:'30%',
      border:'none',
      'border-radius':'4px',
      display:'inline-block'
    }
  }
  mudarTema(){

  }
 


}