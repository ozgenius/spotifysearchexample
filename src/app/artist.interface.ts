import {Album} from "./album.interface";
export interface Artist {
    id:number;
    name:string;
    genres:any;
    albums:Album[];
}