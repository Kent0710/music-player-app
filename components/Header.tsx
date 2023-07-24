import SpotifyTokenProvider from "@/providers/SpotifyTokenProvider";

import Search from "./Search";
import Box from "./Box";

const Header = () => {
    return (
        <header className="w-full">
            <Box className="w-full bg-">
                
                <Search />
            </Box>
        </header>
    )
};

export default Header;