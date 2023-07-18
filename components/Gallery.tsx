import { TbArrowsMinimize, TbArrowsMaximize } from 'react-icons/tb'

interface GalleryProps {
    children : React.ReactNode;
    title : string;
    isFullView : boolean;
};

const Gallery : React.FC<GalleryProps> = ({
    children,
    title,
    isFullView
}) => {
    return (
        <div className="flex flex-col gap-6  overflow-x-hidden overflow-y-hidden w-full pt-2">
            
            <div className='flex gap-3 justify-between'>
                <h1 className="font-bold text-xl tracking-wide"> {title} </h1>
                {!isFullView ? (
                    <TbArrowsMaximize size={26} className='
                        transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500 hover:scale-110 duration-300 hover:cursor-pointer hover:rounded-full hover:p-1 hover:w-8 hover:h-8
                    ' />
                ) : (
                    <TbArrowsMinimize size={26} className='
                        transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500 hover:scale-110 duration-300 hover:cursor-pointer hover:rounded-full hover:p-1 hover:w-8 hover:h-8
                    ' />
                )}
            </div>

            <div className="flex gap-5 ml-5 h-64 w-full shrink-0">
                {children}
            </div>

        </div>
    )
};

export default Gallery;