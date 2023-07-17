import { twMerge } from 'tailwind-merge';

interface BoxProps {
    children : React.ReactNode;
    className? : string;
};

const Box : React.FC<BoxProps> = ({
    children,
    className
}) => {
    return (
        <div className={twMerge(`flex flex-col gap-20 p-10 w-full h-fit bg-neutral-900 rounded-xl`,
            className
        )}>
            {children}
        </div>
    )
};

export default Box;