import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import Layout from "@/components/Layout";
import AccountView from "@/components/AccountView";
import AccountForm from "@/components/AccountForm";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const Account = async () => {
    // name
    // email
    // change password
    // send feedback
    // delete tracks
    // delete account

    // make this a protected route
    const session = await getServerSession(authOptions);
    if (!session) redirect ('/login')

    return (
        <Layout>
            <Sidebar />
            <Content>
                <AccountView>
                    <AccountForm />
                </AccountView>
            </Content>
        </Layout>
    )
};

export default Account;