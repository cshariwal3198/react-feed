import { memo } from "react";
import LogIn from "./manage-user/login";
import SignIn from "./manage-user/signin";
import { Navbar } from "./navbar/navbar";

const Home = memo(() => {

    return (
        <div>
            <Navbar />
        </div>
    )
});

export default Home;
