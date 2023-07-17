interface ContentProps {
    children : React.ReactNode 
};

const Content : React.FC<ContentProps> = ({
    children
}) => {
    return (
        <main className="w-3/4 h-full bg-gradient-to-b from-neutral-900 to-neutral-700 rounded-xl">
            {children}
        </main>
    )
};

export default Content;