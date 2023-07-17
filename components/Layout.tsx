interface LayoutProps {
    children : React.ReactNode
};

const Layout : React.FC<LayoutProps> = ({
    children
}) => {
    return (
        <div className="flex gap-2 h-full w-full bg-black text-white p-3">
            {children}
        </div>
    )
};

export default Layout;