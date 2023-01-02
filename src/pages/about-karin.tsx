import React from "react";
import Layout from "../components/layout/Layout";
import { Card, Center, Container, Space, Text, Title } from "@mantine/core";
import colors from "../styles/colors";
import { PageProps, Script } from "gatsby";

export default function Contact({ location }: PageProps) {
  return (
    <Layout location={location}>
      <Container size="md">
        <Title order={1} color={colors.black}>
          Om Karin
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          Jag började tidigt arbeta med människor och har sedan min examen från
          Personal och -arbetslivsprogrammet 2004 arbetat i olika roller inom
          HR. För mig är det oerhört meningsfullt och värdeskapande att få bidra
          till att utveckla ledare och medarbetare genom att både kunna stötta
          och utmana dem.
        </Text>
        <Space h="md" />
        <Text color={colors.black}>
          Mitt intresse för personlig utveckling i form av coaching ledde mig
          2020 till Gothia Akademi och tre terminer studier med fokus på
          Katalyserande coaching och Förändringsledning. Jag är Diplomerad
          Professionell Coach och Certifierad Förändringsledare och arbetar
          enlig riktlinjerna satta av International Coach Federation (ICF). Som
          bevis på min erfarenhet och kunskap innehar jag sedan 2022 ICF
          certifiering (ACC).
        </Text>
        <Space h="md" />

        <Title order={2} color={colors.black}>
          Filosofi
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          Min filosofi är att vi utvecklas som individer hela livet och om vi
          aktivt tar ansvar för den utvecklingen kan vi nå hur långt som helst.
          Som coach är mitt fokus att du ska nå din fulla potential genom att ta
          kontrollen över ditt liv, bli den du vill vara och nå dina mål!
        </Text>
        <Space h="md" />

        <Title order={2} color={colors.black}>
          Certifieringar - ICF
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          En ICF certifierad coach garanterar kvalitet och seriositet. Läs gärna
          mer om ICF på deras hemsida{" "}
          <a
            style={{ color: "black" }}
            href="https://coachingfederation.se/"
            target="_blank"
          >
            https://coachingfederation.se
          </a>
        </Text>
        <Space h="md" />

        <Script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        />
        <Center style={{ flexWrap: "wrap", justifyContent: "space-around" }}>
          {/* certificates */}
          <div
            data-iframe-width="300"
            data-iframe-height="270"
            data-share-badge-id="fcdedcaa-96c3-4c53-b69b-1a37242d8177"
            data-share-badge-host="https://www.credly.com"
          />
          <div
            data-iframe-width="300"
            data-iframe-height="270"
            data-share-badge-id="aed340d0-8b72-4781-be5b-72c7d8ac3103"
            data-share-badge-host="https://www.credly.com"
          />
        </Center>
      </Container>
    </Layout>
  );
}
