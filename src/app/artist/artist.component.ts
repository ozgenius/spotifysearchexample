import { Component, OnInit } from '@angular/core';
import {Artist} from "../artist.interface";
import {Album} from "../album.interface";
import {SpotifyService} from "../services/spotify.service";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist:Artist[];
  albums:Album[];
  constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
        .map(params=>params['id'])
        .subscribe((id)=>{
      this._spotifyService.getArtist(id)
          .subscribe(artist=>{
            this.artist=artist;
          })
          this._spotifyService.getAlbums(id)
              .subscribe(albums=>{
                this.albums=albums.items;
              })
        });
  }

}
