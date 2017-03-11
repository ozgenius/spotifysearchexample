import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {Artist} from "../artist.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr:any;
  artists:Artist[];
  constructor(private _spotifService:SpotifyService) {

  }

  ngOnInit() {
  }
  onSearchArtist(){
    this._spotifService.searchMusic(this.searchStr).subscribe(res=>{
     this.artists=res.artists.items;
    });
  }

}
