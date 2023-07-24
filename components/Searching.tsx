import Box from "./Box";
import Loading from "./Loading";

const Searching = () => {
    return (
        <div className="w-full">
            <Box className="bg-">
                <Loading text="Searching..." className="p-72"/>
            </Box>
        </div>
    )
};

export default Searching;