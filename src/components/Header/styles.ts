import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HeaderContainer = styled(Box)`
    background: #1f2833;
    padding: 20px 0;

    a {
        border-left: 1px solid #2ecc71;
        color: #2ecc71;
        font-size: 20px;
        font-weight: 600;
        padding-left: 20px;
        text-decoration: none;
        
        &:hover {
            color: #66fcf1;
        }
        @media (max-width: 600px) {
        font-size: 15px;
        }
    }

    div {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }


`;

export const ImageLogo = styled.img`
    width: 250px;

    @media (max-width: 600px) {
        width: 150px;
    }
`;

