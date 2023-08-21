import React from "react";
import Layout from "../components/layout/Layout";
import { Anchor, Container, Space, Text, Title } from "@mantine/core";
import colors from "../styles/colors";
import { type PageProps } from "gatsby";

export const phoneNr = "+46707410325";

export default function Coaching({ location }: PageProps): JSX.Element {
  return (
    <Layout location={location}>
      <Container size="md">
        <Title order={1} color={colors.black}>
          Vad är coaching?
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          Coaching är en strukturerad samtalsform där coach och klient
          tillsammans utforskar, utmanar, ser möjligheter, sorterar,
          medvetandegör och fokuserar på det som är viktigt för att nå det
          önskade resultat i samtalet. Coaching används för att hitta lösningar
          på problem och göra det som är bra ännu bättre. Det handlar om att
          hjälpa människor att hitta sina egna svar på vad de vill och vad som
          ska till för att komma dit. Och sen få det gjort!
        </Text>
        <Space h="md" />
        <Text color={colors.black}>
          Klienten bidrar med sina tankar och erfarenheter om sig själv och vad
          som är viktigt i det ämne för stunden är i fokus, coachen lyssnar och
          ställer frågor för att klienten ska få utforska på både det medvetna
          och omedvetna planet. Det samarbetet kallar vi coaching. Mitt främsta
          verktyg som coach är att ställa kraftfulla och tankeväckande frågor
          och hjälpa dig att ta förverkliga de perspektivskapande insikter som
          de leder till. Det är det som du ska ha mig till!
        </Text>
        <Space h="md" />
        <Anchor
          target="_blank"
          href="https://coachingfederation.se/nar-ska-du-valja-en-coach-som-din-samarbetspartner-pa-din-forandringsresa-2/"
        >
          <Text color={colors.black}>
            Här kan du läsa mer om när du ska välja en coach som din
            samarbetspartner på din förändringsresa
          </Text>
        </Anchor>
      </Container>
    </Layout>
  );
}
