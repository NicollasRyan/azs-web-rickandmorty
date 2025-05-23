import { Link } from "react-router-dom"
import { Container } from "@mui/material"
import { HeaderContainer, ImageLogo } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <Container>
                <ImageLogo src="/Rick-and-Morty.png" alt="Rick-and-Morty" />
                <Link to={{pathname: "/favorites"}}>
                    Episódios favoritos
                </Link>
            </Container>
        </HeaderContainer>
    )
}