import { styled } from "@mui/system";
import { Box, Card, CardMedia } from "@mui/material";

export const BoxCard = styled(Card)`
    background-color: #1f2833;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 255, 157, 0.15);
    max-width: 350px;

    h5 {
        color: #00ff9f;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

export const CardImg = styled(CardMedia)`
   height: 320px;
`;

export const StatusBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    p {
        color: #61dafb;
        font-size: 14px;
    }
`;