import { IconType } from "react-icons/lib/esm/iconBase";

import { twMerge } from 'tailwind-merge'

import Link from "next/link";

interface SidebarItemProps {
    icon : IconType;
    label : string;
    active? : boolean;
    href : string
};

const SidebarItem : React.FC<SidebarItemProps> = ({
    icon : Icon,
    label,
    active,
    href 
}) => {
    return (
        <Link
            href={href}
            className={twMerge(`flex gap-8 text-neutral-500 hover:bg-slate-800 hover:px-2 hover:py-1 px-2 py-1 rounded-lg`,
                active && "text-white"
            )}
        >
            <Icon size={26} className="shrink-0"/>
            <p className="truncate w-full font-bold tracking-wide shrink-0"> {label} </p>
        </Link>
    )
};

export default SidebarItem;