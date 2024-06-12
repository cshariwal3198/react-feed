import { memo } from "react";
import styled from "styled-components";
import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Root = memo(() => {

    return (
        <StyledRoot>
            <Navbar />
            <Outlet />
        </StyledRoot>
    )
});
