'use client';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from "react-icons/bi";
import { MdManageAccounts } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb'
import { twMerge } from "tailwind-merge"

import Box from './Box';
import SidebarItem from './SidebarItem';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon : HiHome,
            label : 'Home',
            active : pathname !== '/search' && pathname !== '/account',
            href : '/'
        },
        {
            icon : MdManageAccounts,
            label : "Account",
            href : '/account',
            active : pathname === '/account'
        },
        {
            icon : TbLogout2,
            label : 'Logout',
            href : '/logout',
            active : pathname === '/loguout'
        }
    ], [pathname])

    return (
        <div className='w-1/4 shrink-0'>
            <Box>
                {routes.map((item) => (
                    <SidebarItem key={item.label} {...item}/>
                ))}
            </Box>
        </div>
    )
};  

export default Sidebar;