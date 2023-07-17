import { BiSearch } from "react-icons/bi";

const Search = () => {
    return (
        <form className="flex gap-3 items-center">
            <BiSearch size={26} />
            <input 
                type="text" 
                placeholder="Search"
                className="w-[30rem] px-4 py-3 rounded-3xl bg-neutral-700 font-bold tracking-wider focus:ring-4 focus:ring-white"
            />
        </form>
    )
};

export default Search;