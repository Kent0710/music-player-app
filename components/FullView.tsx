import Box from "./Box";
import Gallery from "./Gallery";
import Card from "./Card";

interface FullViewProps {
    viewTitle : string;
    tracks : any;
}

const FullView : React.FC<FullViewProps> = ({
    viewTitle,
    tracks  
}) => {
    return (
        <div className="w-full">

            <Box className="bg-">
                <Gallery title={viewTitle} isFullView={true}>
                    {tracks.map((track : any) => (
                        <Card key={track.songTitle} {...track} />
                    ))}
                </Gallery>
            </Box>

        </div>
    )
};

export default FullView;