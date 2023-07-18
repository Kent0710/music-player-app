import Gallery from "./Gallery";
import Box from "./Box";
import Card from "./Card";

const SubView = () => {
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

    return (
        <div className="w-full">
            <Box className="bg-">
                <Gallery title="Recently played" isFullView={isFullView}>
                    {songs.map((song) => (
                        <Card key={song.songTitle} {...song} />
                    ))}
                </Gallery>
            </Box>
            <Box className="bg-">
                <Gallery title="Favorites" isFullView={isFullView}>
                    {songs.map((song) => (
                        <Card key={song.songTitle} {...song} />
                    ))}
                </Gallery>
            </Box>
        </div>
    )
};

export default SubView;