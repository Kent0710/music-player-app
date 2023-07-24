'use client'

import { BiSearch } from "react-icons/bi";

import { useState, useEffect } from "react";

import { useIsSearchingContext } from "@/providers/IsSearchingProvider";
import { useSearchingOkContext } from "@/providers/SearchingOkProvider";
import { useTracksContext } from "@/providers/TracksProvider";

import { SingleTrackFiltered, TracksArray, TracksFilteredArray } from "@/types";

const Search = () => {
    const [spotifyToken, setSpotifyToken] = useState('');
    const [isTokenSet, setIsTokenSet] = useState(false);

    if (!isTokenSet) {
        spotifyTokenHandler()
            .then((accessToken) => {
                console.log('Access token : ', accessToken)
                setSpotifyToken(accessToken);
                setIsTokenSet(true)
            })
            .catch((err) => {
                console.error('Error fetching the access token from the handler : ', err)
            })
    }

    useEffect(() => {
        console.log('Spotify token in state : ', spotifyToken)
    }, [spotifyToken])

    const [searchQuery, setSearchQuery] = useState('');
    const { searchingOk, updateSearchingOk } = useSearchingOkContext();
    const { tracks, updateTracks } = useTracksContext();
    const searchSubmitHandler = async (e : React.SyntheticEvent) => {
        e.preventDefault();
        updateSearchingOk(true);
        searchForTracks(searchQuery)
            .then((tracks) => {
                console.log('Tracks : ', tracks.items);
                const filteredTrackItems = filterSearchForTracksResult(tracks.items);
                console.log(filteredTrackItems);
                updateTracks(filteredTrackItems);
            })
            .catch((err) => {
                console.error('Error on getting the tracks from the handler : ', err)
            })
    }

    // when searching
    const { isSearching, updateIsSearching } = useIsSearchingContext();
    const searchFocusHandler = () => {
        console.log(tracks);
        updateIsSearching(true);
    }
    const searchBlurHandler = () => {
        updateIsSearching(false);
    }

    return (
        <form className="flex gap-3 items-center" onSubmit={searchSubmitHandler}>
            <BiSearch size={26} />
            <input 
                type="text" 
                placeholder="Search"
                className="w-[30rem] px-4 py-3 rounded-3xl bg-neutral-700 font-bold tracking-wider focus:ring-4 focus:ring-white"
                value={searchQuery}
                id="searchQuery"
                name="searchQuery"
                onBlur={searchBlurHandler}
                onFocus={searchFocusHandler}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete={searchQuery}
                required
            />
            <button type="submit">Search</button>
        </form>
    )
};

// fetch and set the spotify access token
async function spotifyTokenHandler(e? : React.SyntheticEvent) {
    e?.preventDefault();
    try {
        const expired = "false";
        const response = await fetch (`/api/spotifyHandler/fetchToken/${expired}`, {
            method : "GET",
            headers : {"Content-Type" : "application/json"}
        });
        if (!response.ok) {
            throw new Error ('spotify token handler failed')
        }

        const data = await response.json();
        console.log(data);
        const accessToken = data.accessToken;
        return accessToken;
    } catch (err) {
        throw err;
    }
}

async function searchForTracks(searchQuery : string, e? : React.SyntheticEvent) {
    e?.preventDefault();
    try {
        const response = await fetch (`/api/spotifyHandler/searchTracks/${searchQuery}`, {
            method : "GET",
            headers : {"Content-Type" : "application/json"}
        });
        if (!response.ok) {
            throw new Error ('search for tracks function failed')
        };
        
        const data = await response.json();
        console.log(data);
        return data.tracks;
    } catch (err) {
        throw err;
    }
}

import { SingleTrack } from "@/types";

function filterSearchForTracksResult(tracksItems : SingleTrack[]) {
    let filteredTrackItems : SingleTrackFiltered[] = [];

    for (let i = 0; i < tracksItems.length; i++) {
        let singleTrack : SingleTrackFiltered = {
            id : tracksItems[i].id,
            artist : tracksItems[i].artists[0].name,
            playUrl : tracksItems[i].external_urls.spotify,
            songTitle : tracksItems[i].name,
            image : tracksItems[i].album.images[0].url
        };

        filteredTrackItems.push(singleTrack);
    }

    return filteredTrackItems;
}

function removeDuplicatedTracks(tracks : []) {
    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        
    }
}

export default Search;