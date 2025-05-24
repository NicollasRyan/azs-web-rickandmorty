import { useEffect, useState } from "react";
import { Add, ArrowBack, Favorite, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";

import { GET_EPISODE_BY_ID } from "../../graphql/queries";
import { CardCharacter } from "../../components/CardCharacter";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { ActionBox, BackBox, DetailBox, FavoriteButton, SeeButton } from "./styles";

export function EpisodeDetail() {
    const { id } = useParams<{ id: any }>();
    const [isFavorite, setIsFavorite] = useState<boolean | null>(null);
    const [isVisibility, setIsVisibility] = useState<boolean | null>(null);
    const { data, loading, error } = useQuery(GET_EPISODE_BY_ID, {
        variables: { id },
    });

    const isFavoriteEpisode = (id: string) => {
        const stored = localStorage.getItem("favorites");
        const favorites = stored ? JSON.parse(stored) : [];
        return favorites.includes(id)
    }

    const isVisibilityEpisode = (id: string) => {
        const stored = localStorage.getItem("visibilitys");
        const visibilitys = stored ? JSON.parse(stored) : [];
        return visibilitys.includes(id)
    }

    useEffect(() => {
        const favorite = isFavoriteEpisode(id);
        setIsFavorite(favorite);

        const visibility = isVisibilityEpisode(id);
        setIsVisibility(visibility);
    }, [id]);

    const handleFavorite = (id: string) => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

        let updatedFavorites;

        if (favorites.includes(id)) {
            // Remover dos favoritos
            updatedFavorites = favorites.filter((favId: string) => favId !== id);
        } else {
            // Adicionar aos favoritos
            updatedFavorites = [...favorites, id];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    }

    const handlevisibility = (id: string) => {
        const visibilitys = JSON.parse(localStorage.getItem("visibilitys") || "[]");

        let updatedvisibilitys;

        if (visibilitys.includes(id)) {
            // Remover dos já vistos
            updatedvisibilitys = visibilitys.filter((favId: string) => favId !== id);
        } else {
            // Adicionar aos já vistos
            updatedvisibilitys = [...visibilitys, id];
        }

        localStorage.setItem("visibilitys", JSON.stringify(updatedvisibilitys));
        setIsVisibility(!isVisibility);
    }

    const details = data?.episode;
    const navigate = useNavigate();

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <DetailBox>
            <Grid container spacing={2}>
                <Grid size={{ md: 12 }}>
                    <BackBox onClick={() => navigate("/")}>
                        <ArrowBack />
                        <Typography>Voltar</Typography>
                    </BackBox>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Typography variant="h6">{details.episode}</Typography>
                    <Typography variant="h3">{details.name}</Typography>
                    <Typography>Episódio foi ao ar {details.air_date}</Typography>
                    <Typography>{details.characters.length} personagens no episódio</Typography>

                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <ActionBox>
                        <FavoriteButton onClick={() => handleFavorite(id)}>
                            {isFavorite ? (
                                <Favorite />
                            ) : (
                                <Add />
                            )} {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                        </FavoriteButton>

                        <SeeButton onClick={() => handlevisibility(id)}>
                            {isVisibility ? (
                                <Visibility />
                            ) : (
                                <VisibilityOff />
                            )} {isVisibility ? "Remover assistido" : "Marcar assistido"}
                        </SeeButton>
                    </ActionBox>
                </Grid>
            </Grid>

            <Box>
            </Box>

            <Grid container spacing={2}>
                {details.characters.map((character: any) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={character.id}>
                        <CardCharacter name={character.name} src={character.image} specie={character.species} status={character.status} />
                    </Grid>
                ))}
            </Grid>
        </DetailBox>
    )
} 