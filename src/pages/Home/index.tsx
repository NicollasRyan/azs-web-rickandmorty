import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

import { GET_EPISODES, GET_EPISODES_BY_NAME } from "../../graphql/queries";
import { useSearchStore } from "../../store/useSearchStore";
import { CardEpisode } from "../../components/CardEpisode";
import { SearchBar } from "../../components/SeachBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { HomeContainer } from "./style";

export function Home() {
    const { search } = useSearchStore();
    const [debouncedSearch] = useDebounce(search, 500);
    const { data: dataAll, loading: loadingAll, error: errorAll } = useQuery(GET_EPISODES);
    const [getEpisodes, { data: dataFilter, loading: loadingFilter, error: errorFilter }] = useLazyQuery(GET_EPISODES_BY_NAME, {
        fetchPolicy: 'network-only',

    });

    useEffect(() => {
        if (debouncedSearch) {
            getEpisodes({ variables: { name: debouncedSearch } });
        } else {
            getEpisodes({ variables: { name: '' } });
        }
    }, [debouncedSearch, getEpisodes]);

    const episodes = dataFilter?.episodes?.results || dataAll?.episodes?.results || [];
    const loading = loadingFilter || loadingAll;
    const error = errorFilter || errorAll;

    return (
        <HomeContainer>
            <SearchBar />
            <Grid container spacing={2}>
                {loading ? <Loading /> :
                    error ? <Error /> :
                        episodes && episodes.map((episode: any) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={episode.id}>
                                <CardEpisode
                                    id={episode.id}
                                    name={episode.name}
                                    air_date={episode.air_date}
                                    code={episode.episode}
                                    characters={episode.characters.length}
                                />
                            </Grid>
                        ))
                }
            </Grid>
        </HomeContainer>
    )
}