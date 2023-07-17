import { twMerge } from "tailwind-merge";

interface ButtonProps {
    label : string;
    onClick? : any;
    className? : string;
};

const Button : React.FC<ButtonProps> = ({
    label,
    onClick,
    className
}) => {
    return (
        <button className={twMerge(`bg-blue-500 px-20 py-2 rounded-lg font-bold tracking-wide hover:bg-blue-300 hover:ring-offset-2 hover:ring-2 hover:ring-blue-500`,
            className
        )}>
            {label}
        </button>
    )
};

export default Button;