import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Main from "@/components/Main";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import IsSearchingProvider from "@/providers/IsSearchingProvider";
import SearchingOkProvider from "@/providers/SearchingOkProvider";
import TracksProvider from "@/providers/TracksProvider";

const App = async  () => {
    const session = await getServerSession(authOptions);

    if (!session) redirect(`/login`);
    
    return (
        <Layout>
            <Sidebar />
            <Content>
                <IsSearchingProvider>
                    <SearchingOkProvider>
                        <TracksProvider>
                            <Header />
                            <Main />
                        </TracksProvider>
                    </SearchingOkProvider>
                </IsSearchingProvider>
            </Content>
        </Layout>
    )
};

export default App;