import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const DetailBox = styled(Box)`
    margin: 20px 0;  
`;

export const BackBox = styled(Box)`
    align-items: center;
    color: #2ecc71;
    cursor: pointer;
    display: flex;
    max-width: 100px;

    p {
        font-size: 20px;
    }

    svg {
        color: #2ecc71;
        font-size: 25px;
        font-size: 25px;
        margin-right: 10px;
    }

    &:hover {
        color: #27ae60;
        transition: 0.3s;
    }
`;


export const ActionBox = styled(Box)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    button {
        border-radius: 40px;
        width: 100%;
    }

    svg {
        color: #fff;
        margin-right: 10px;
        font-size: 25px;
    }
`;

export const FavoriteButton = styled(Button)`
    background: #f5c518;
    color: #0b0c10;
    font-weight: 600;
    margin-bottom: 10px;

    &:hover {
        background-color: #7fad3a;
        transition: 0.3s;
    }
`;

export const SeeButton = styled(Button)`
    background: #5799ef;
    color: #fff;

    &:hover {
        background-color: #443c74;
        transition: 0.3s;
    }
`;