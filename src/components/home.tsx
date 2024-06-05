import { memo } from "react";
import { LogIn, SignIn } from "./manage-user";

export const Home = memo(() => {

    return (
        <div>
            <SignIn />
            <div style={{ height: '40px' }}></div>
            <LogIn />
        </div>
    )
});
