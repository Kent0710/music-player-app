import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import Layout from "@/components/Layout";
import AccountView from "@/components/AccountView";
import AccountForm from "@/components/AccountForm";

import { BiSolidEdit } from "react-icons/bi"

const Account = () => {
    // name
    // email
    // change password
    // send feedback
    // delete tracks
    // delete account

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