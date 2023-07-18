import Box from "@/components/Box";

import { BiSolidEdit } from 'react-icons/bi'

interface AccountViewProps {
    children : React.ReactNode
}

const AccountView : React.FC<AccountViewProps> = ({
    children
}) => {
    return (
        <Box className="h-full">

            <div className="flex gap-5 items-center">
                <BiSolidEdit size={26}/>
                <h1 className="text-4xl font-bold tracking-wide"> Account </h1>
            </div>

            <div className="pl-12">
                
                {children}

            </div>
        </Box>
    )
};

export default AccountView;