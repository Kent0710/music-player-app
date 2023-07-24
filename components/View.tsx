'use client'

import SubView from "./SubView";
import FullView from "./FullView";
import Searching from "./Searching";
import Results from "./Results";

import { useIsSearchingContext } from "@/providers/IsSearchingProvider";
import { useSearchingOkContext } from "@/providers/SearchingOkProvider";

const View = () => {
    const { isSearching, updateIsSearching } = useIsSearchingContext();
    const { searchingOk, updateSearchingOk } = useSearchingOkContext();

    const songs = [
        {
            songTitle : 'Raining in Manilla. Hindi ka ba nilalamig',
            artist : 'This Singer'
        },
        {
            songTitle : 'This Town',
            artist : 'This Singer'
        },
        {
            songTitle : 'Thousand Years',
            artist : 'This Singer'
        },
        {
            songTitle : 'Raining in Manilla. Hindi ka ba nilalamig',
            artist : 'This Singer'
        },
        {
            songTitle : 'This Town',
            artist : 'This Singer'
        },
        {
            songTitle : 'Thousand Years',
            artist : 'This Singer'
        },
        {
            songTitle : 'Raining in Manilla. Hindi ka ba nilalamig',
            artist : 'This Singer'
        },
        {
            songTitle : 'This Town',
            artist : 'This Singer'
        },
        {
            songTitle : 'Thousand Years',
            artist : 'This Singer'
        },
    ]

    const isFullView = false;

    if (isFullView) 
        return <FullView viewTitle="Recently played" tracks={songs} />

    if (isSearching) 
        return <Searching />

    if (searchingOk) 
        return <Results />

    return <SubView />
};

export default View;