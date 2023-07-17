import Box from "./Box";
import Gallery from "./Gallery";
import Card from "./Card";

const Main = () => {
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

    return (
        <main className=" w-full">
            <Box className="bg-">
                <Gallery title="Recently played">
                    {songs.map((song) => (
                        <Card key={song.songTitle} {...song} />
                    ))}
                </Gallery>
            </Box>
            <Box className="bg-">
                <Gallery title="Favorites">
                    {songs.map((song) => (
                        <Card key={song.songTitle} {...song} />
                    ))}
                </Gallery>
            </Box>
        </main>
    )
};

export default Main;