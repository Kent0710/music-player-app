'use client'

import Box from "./Box";
import Gallery from "./Gallery";
import Card from "./Card";

import { useTracksContext } from "@/providers/TracksProvider";

const Results = () => {
    const { tracks, updateTracks } = useTracksContext();

    //songTitle, artistName, playUrl, src
    const resultss = [
        {
            songTitle : 'hi',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hii',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hiii',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hiyth',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hisads',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hisad',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hidsad',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hidasdas',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hisdasd',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
        {
            songTitle : 'hidsadas',
            artistName : 'me',
            playUrl : 'hereistheurl',
            src : 'thisimage'
        },
    ]

    const isFullView = false;
    return (
        <div className="w-full ">
            <Box className="bg-">
                <Gallery title="Search results" isFullView={isFullView}>
                    {tracks.map((track) => (
                        <Card key={track.songTitle} {...track} />
                    ))}
                </Gallery>
            </Box>
        </div>
    )
};

export default Results;