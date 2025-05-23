import { CircularProgress } from "@mui/material";
import { LoadingBox } from "./styles";

export function Loading() {
    return (
        <LoadingBox>
            <CircularProgress  />
        </LoadingBox>
    )
}