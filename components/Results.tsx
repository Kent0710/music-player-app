'use client'

import Box from "./Box";
import Gallery from "./Gallery";
import Card from "./Card";

import { useTracksContext } from "@/providers/TracksProvider";

const Results = () => {
    

    const { tracks, updateTracks } = useTracksContext();
    const isFullView = false;
    return (
        <div className="w-full ">
            <Box className="bg-">
                <Gallery title="Search results" isFullView={isFullView}>
                    {tracks.map((track) => (
                        <Card key={track.id} {...track} />
                    ))}
                </Gallery>
            </Box>
        </div>
    )
};

export default Results;