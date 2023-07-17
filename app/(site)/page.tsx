import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Main from "@/components/Main";

const App = () => {
    return (
        <Layout>
            <Sidebar />
            <Content>
                <Header />
                <Main />
            </Content>
        </Layout>
    )
};

export default App;