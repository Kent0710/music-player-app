'use client';

import { createContext, useState, useContext } from "react";

import {
    TracksFilteredArray,
    SingleTrackFiltered
} from "@/types"

interface TracksContextValue {
    tracks : SingleTrackFiltered[],
    updateTracks : (fetchedTracks : SingleTrackFiltered[]) => void;
};

const TracksContext = createContext<TracksContextValue | null>(null);

export function useTracksContext() {
    const context = useContext(TracksContext);
    if (!context) {
        throw new Error ('useTracksContext must be used within an TracksProvider')
    };
    return context;
};

interface TracksProviderProps {
    children : React.ReactNode
};

const TracksProvider : React.FC<TracksProviderProps> = ({
    children
}) => {
    const [tracks, setTracks] = useState<SingleTrackFiltered[]>([]);

    const updateTracks = (fetchedTracks : SingleTrackFiltered[]) => {
        setTracks(fetchedTracks)
    };

    const TracksProviderValues : TracksContextValue = {
        tracks,
        updateTracks
    };

    return (
        <TracksContext.Provider value={TracksProviderValues}>
            {children}
        </TracksContext.Provider>
    )
};

export default TracksProvider;