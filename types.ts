export interface Artist {
    id : string;
    name : string;
}

export interface ArtistArray {
    artist : Artist[]
}

export interface PlayUrl {
    spotify : string;
}

export interface Image {
    url : string;
}

export interface ImageArray {
    images : Image[]
}

export interface SingleTrack {
    id : string;
    artists : ArtistArray;
    playUrl : PlayUrl
    songTitle : string;
    images : ImageArray
};

export interface TracksArray {
    tracks : SingleTrack[]
    length : number
}

export interface SingleTrackFiltered {
    id : string
    artist : string;
    playUrl : string;
    songTitle : string;
    image : string;
}

export interface TracksFilteredArray {
    tracks : SingleTrackFiltered[]
}