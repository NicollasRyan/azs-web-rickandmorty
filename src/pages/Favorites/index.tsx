import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { ArrowBack, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_EPISODES_BY_IDS } from "../../graphql/queries";
import { CardEpisode } from "../../components/CardEpisode";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { BackBox, FavoritesBox } from "./styles";

export function Favorites() {
  const [favorites, setFavorites] = useState<number[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    setFavorites(JSON.parse(storedFavorites || "[]"));
  }, [favorites?.length]);

  const numericIds = (favorites ?? []).map(Number);
  const { data, loading, error } = useQuery(GET_EPISODES_BY_IDS, {
    variables: { ids: favorites ?? [] },
    skip: !(favorites || numericIds.length === 0),
  });

  const episodes = data?.episodesByIds || [];
  
  return (
    <FavoritesBox>
      <BackBox onClick={() => navigate("/")}>
        <ArrowBack />
        <Typography>Voltar</Typography>
      </BackBox>
      <Typography variant="h4"> Seus Episódios Favoritos <Star /></Typography>
      {numericIds.length === 0 ? (
        <Typography>Você não tem episódios favoritos</Typography>
      ) : loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Grid container spacing={2}>
          {episodes.map((episode: any) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={episode.id}>
              <CardEpisode
                id={episode.id}
                name={episode.name}
                air_date={episode.air_date}
                episode={episode.episode}
                code={episode.episode}
                characters={episode.characters.length}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </FavoritesBox>
  )
}