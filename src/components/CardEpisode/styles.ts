import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const BoxCard = styled(Box)`
    background: #1f2833;
    border-radius: 10px;
    padding: 20px;

    svg {
        cursor: pointer;
    }
`;

export const ButtonCard = styled(Button)`
    background: trasparent;
    border-radius: 5px;
    border: 2px solid #2ecc71;
    color: #2ecc71;
    margin-top: 10px;
    padding: 5px;

    &:hover {
        color: #75e0a2;
    }
`;

export const TitleCard = styled(Box)`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const DescriptionCard = styled(Box)`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;