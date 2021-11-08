import { Component, OnInit } from '@angular/core';
import { UpdateService } from './pokedex/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poke-pwa';
  offline: Boolean = true;

  constructor(private updateService: UpdateService) {
    updateService.checkForUpdate();
  }

  onNetworkStatusChange() {
    this.offline = !navigator.onLine;
  }

  ngOnInit() {
    this.onNetworkStatusChange();
    window.addEventListener('online', this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
  }


}
