import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "@mui/material";

export function Layout() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}