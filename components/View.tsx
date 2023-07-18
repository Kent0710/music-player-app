import SubView from "./SubView";
import FullView from "./FullView";

const View = () => {
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

    return <SubView />
};

export default View;