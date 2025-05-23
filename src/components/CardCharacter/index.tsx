import { CardContent, Typography } from "@mui/material";
import { BoxCard, CardImg, StatusBox } from "./styles";

export function CardCharacter({ name, src, specie, status }: any) {
  return (
    <BoxCard>
      <CardImg
        image={src}
        title={name}
      />
      <CardContent>
        <StatusBox>
          <Typography>
            Especie: {specie}
          </Typography>
          <Typography>
            Status: {status}
          </Typography>
        </StatusBox>
        <Typography variant="h5">
          {name}
        </Typography>
      </CardContent>
    </BoxCard>
  );
}