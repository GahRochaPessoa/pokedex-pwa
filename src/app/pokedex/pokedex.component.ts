import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemonList: any = [];
  randomPokemon: any = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json")
      .subscribe(response => {
        this.pokemonList = response;
        this.pokemonList = this.pokemonList.splice(0, 150);
      })
  }

  getRandomPokemon() {
    let randomNumber = Math.floor(Math.random() * 150) + 1;
    this.randomPokemon = this.pokemonList[randomNumber]
    console.log(this.pokemonList)
  }


  getColor(type: any) {
    switch (type) {
      case 'Fire': return 'warn';
      case 'Poison': return 'primary';
      case 'Grass': return 'accent';
      case 'Electric': return 'warn';
      case 'Ground': return 'primary';
      case 'Flying': return 'accent';
      default: return '';
    }
  }

}
