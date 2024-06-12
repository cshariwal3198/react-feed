import { memo, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 12px;
    box-sizing: border-box;
    height: 350px;
    width: 100%; z-index: 10;
    border-radius: 0px 0px 12px 12px;
    background-color: #232e52;
`;

const NavBlock = styled.div`
    display: inline-flex;
    gap: 20px; width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-around;
`;

const Header = styled.h1`
    display: flex;
    font-size: 38px;
    align-items: center;
    color: white;
    font-weight: 300;
    padding-left: 20px;
    word-wrap: break-word;
    height: 60%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 400;
    color: white;
`;

export const Navbar = memo(() => {

    const getHeaderText = useCallback(() => { return 'Header Text' }, []);

    return (
        <NavWrapper>
            <NavBlock>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/technology">Technology</StyledLink>
                <StyledLink to="/international">International</StyledLink>
                <StyledLink to="/photography">Photography</StyledLink>
                <StyledLink to="/sports">Sports</StyledLink>
            </NavBlock>
            <Header>
                {getHeaderText()}
            </Header>
        </NavWrapper>
    )
});
