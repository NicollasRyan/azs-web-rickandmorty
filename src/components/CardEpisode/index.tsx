import { useEffect, useState } from "react";
import {  Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Favorite, FavoriteBorder, Visibility, VisibilityOff } from "@mui/icons-material";
import { BoxCard, ButtonCard, DescriptionCard, TitleCard } from "./styles";

export function CardEpisode({ name, air_date, characters, code, id }: any) {
    const [isFavorite, setIsFavorite] = useState<boolean | null>(null);
    const [isVisibility, setIsVisibility] = useState<boolean | null>(null);

    const navigate = useNavigate();

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

    const isFavoriteEpisode = (id: string) => {
        const stored = localStorage.getItem("favorites");
        const favorites = stored ? JSON.parse(stored) : [];
        return favorites.includes(id)
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

    const isVisibilityEpisode = (id: string) => {
        const stored = localStorage.getItem("visibilitys");
        const visibilitys = stored ? JSON.parse(stored) : [];
        return visibilitys.includes(id)
    }

    useEffect(() => {
        const isFavorite = isFavoriteEpisode(id);
        setIsFavorite(isFavorite);

        const isVisibility = isVisibilityEpisode(id);
        setIsVisibility(isVisibility);
    }, [id]);

    return (
        <BoxCard>
            <TitleCard>
                <Typography sx={{ color: "#2ecc71" }}>{code}</Typography>
                {isFavorite ? <Favorite sx={{ color: "#2ecc71" }} onClick={() => handleFavorite(id)} /> : <FavoriteBorder sx={{ color: "#2ecc71" }} onClick={() => handleFavorite(id)} />}
            </TitleCard>
            <Typography>{name}</Typography>
            <Typography sx={{ color: "#b0bec5" }}>Data de lançamento: {air_date}</Typography>
            <DescriptionCard>
                <Typography sx={{ color: "#b0bec5" }}>Quantidade de personagens: {characters}</Typography>
                {isVisibility ? <Visibility sx={{ color: "#2ecc71" }} onClick={() => handlevisibility(id)} /> : <VisibilityOff sx={{ color: "#2ecc71" }} onClick={() => handlevisibility(id)} />}
            </DescriptionCard>
            <ButtonCard onClick={() => navigate(`/episode/${id}`)}>Ver Detalhes</ButtonCard>
        </BoxCard>
    )
};