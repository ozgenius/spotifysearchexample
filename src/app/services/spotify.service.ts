import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  Url:string;
  constructor(private _http:Http) {

  }
  searchMusic(str:string, type="artist"){
     this.Url='https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
     return this._http.get(this.Url)
         .map(res=>res.json());

  }
  getArtist(id:string){
      this.Url='https://api.spotify.com/v1/artists/'+id;
      return this._http.get(this.Url)
          .map(res=>res.json());
  }
  getAlbums(artistId:string){
      this.Url='https://api.spotify.com/v1/artists/'+artistId+'/albums';
      return this._http.get(this.Url)
          .map(res=>res.json());
  }
    getAlbum(id:string){
        this.Url='https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.Url)
            .map(res=>res.json());
    }

}
