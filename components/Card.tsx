import avatar from '@/public/images/avatar.jpg'

import Image from 'next/image';

import { AiFillPlayCircle } from 'react-icons/ai'

interface CardProps {
    id : string
    songTitle : string;
    artist : string;
    image : string;
    playUrl : string;
};

const Card : React.FC<CardProps> = ({
    id,
    songTitle,
    artist,
    image,
    playUrl
}) => {
    return (
        <div className='flex flex-col  w-48 bg-gradient-to-b from-neutral-900 to-neutral-700 rounded-lg shrink-0
            transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500 hover:scale-110 duration-300 hover:cursor-pointer
        '>

            <Image src={avatar} className='w-full rounded-3xl p-2' alt='avatar' />

            <div className='flex justify-center'>
                <h1 className='truncate px-3 font-bold tracking-tighter'> {songTitle} </h1>
            </div>

            <p className='text-sm tracking-tight text-neutral-400 font-bold place-self-center'> {artist} </p>

        </div>
    )
};

export default Card;