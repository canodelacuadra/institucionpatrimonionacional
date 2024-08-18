// src/pages/UserProfile.js
import React from "react";
import Greeting from "../components/greetings";
import UserCard from "../components/usercard";
import Layout from "../components/layout";

const UserProfile = () => {
    return (
        <>
            <Layout>

                <div>
                    <Greeting name="Gatsby" />
                    <UserCard name="John Doe" age={30} isOnline={true} />
                </div>
            </Layout>

        </>
    );
};

export default UserProfile;