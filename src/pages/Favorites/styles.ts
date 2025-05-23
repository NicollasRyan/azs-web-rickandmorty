import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FavoritesBox = styled(Box)`
    margin: 20px 0;

    h4 {
        align-items: center;
        display: flex;
        font-size: 24px;
        margin-bottom: 20px;
        
            svg {
                color: #2ecc71;
                font-size: 25px;
                margin-left: 10px;
            }
    }
`;

export const BackBox = styled(Box)`
    align-items: center;
    color: #2ecc71;
    cursor: pointer;
    display: flex;
    margin-bottom: 5px;
    max-width: 100px;

    p {
        font-size: 20px;
    }

    svg {
        color: #2ecc71;
        font-size: 25px;
        margin-right: 10px;
    }

    &:hover {
        color: #27ae60;
        transition: 0.3s;
    }
`;
