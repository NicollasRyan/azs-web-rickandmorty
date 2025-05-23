import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const SearchBox = styled(Box)`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 20px 0;

    @media (max-width: 600px) {
        flex-direction: column;
        margin: 10px 0;
    }
`;

export const SearchInput = styled(TextField)`
    background: #fff;
    color: #aaa;
    border-radius: 5px;
`;
