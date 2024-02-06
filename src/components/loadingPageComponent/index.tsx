import React from "react";
import { t } from "@i18n";
import MercadoLivreLogo from "@assets/mercado_livre_vertical.svg";
import { Container, HeartBeatAnimation } from "./styles";
import { LoadingPageProps } from "./types";
const LoadingPageComponent = ({ loading = true }: LoadingPageProps) => {
  document.title = t("general.mercado livre") + " | " + t("general.site title");
  return (
    <Container loading={loading}>
      <HeartBeatAnimation>
        <MercadoLivreLogo />
      </HeartBeatAnimation>
    </Container>
  );
};

export default LoadingPageComponent;
