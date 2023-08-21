import React from "react";
import Layout from "../components/layout/Layout";
import {
  Anchor,
  Center,
  Container,
  Group,
  Space,
  Text,
  Title,
  MediaQuery,
} from "@mantine/core";
import colors from "../styles/colors";
import { type PageProps, Script } from "gatsby";

export default function Contact({ location }: PageProps): JSX.Element {
  return (
    <Layout location={location}>
      <Container size="md">
        <Title order={1} color={colors.black}>
          Om I.D.K AB
        </Title>
        <Space h="md" />
        <MediaQuery largerThan="sm" styles={{ flexWrap: "nowrap" }}>
          <Group>
            <Container px={0}>
              <Text color={colors.black}>
                I.D.K AB grundades 2022 och drivs av Karin Jannerborn som
                erbjuder professionell samtalscoaching och förändringsledning
                till privatpersoner och organisationer. I.D.K AB är verksamt i
                centrala Göteborg men med hjälp av digitala möten kan du som
                klient befinna dig precis var som helst. Karin började tidigt
                arbeta med människor och har sedan examen från Personal och
                -arbetslivsprogrammet 2004 arbetat i olika roller inom HR och
                ledarutveckling. ”För mig är det oerhört meningsfullt och
                värdeskapande att få bidra till att utveckla individer genom att
                både kunna stötta och utmana dem att hitta sin inre drivkraft
                och det som är viktigt för dem.”
              </Text>
              <Space h="md" />
              <Text color={colors.black}>
                &quot;Mitt intresse för personlig utveckling i form av coaching
                ledde mig 2020 till Gothia Akademi och tre terminer studier med
                fokus på Katalyserande coaching och Förändringsledning. Jag är
                Diplomerad Professionell Coach och Certifierad Förändringsledare
                och arbetar enlig riktlinjerna satta av International Coach
                Federation (ICF). Som bevis på min erfarenhet och kunskap
                innehar jag sedan 2022 ICF certifiering (ACC).&quot;
              </Text>
              <Space h="md" />
            </Container>
            <img
              src="/karin_jannerborn_profil.jpg"
              alt="karin"
              style={{ maxWidth: "100%" }}
            />
          </Group>
        </MediaQuery>
        <Space h="md" />
        <Title order={2} color={colors.black}>
          Filosofi
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          &quot;Min filosofi är att vi utvecklas som individer hela livet och om
          vi aktivt tar ansvar för den utvecklingen kan vi nå hur långt som
          helst. Som coach är mitt fokus att du ska nå din fulla potential genom
          att ta kontrollen över ditt liv, bli den du vill vara och nå dina mål!
          Som min klient kan du förvänta dig att jag med lyhördhet och stort
          hjärta utmanar dig att ta de steg som du behöver för att göra den
          förändring du vill få till.&quot;
        </Text>
        <Space h="md" />

        <Title order={2} color={colors.black}>
          Certifieringar - ICF
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          En ICF certifierad coach garanterar kvalitet och seriositet. Läs gärna
          mer om ICF på deras{" "}
          <Anchor href="https://coachingfederation.se/" target="_blank">
            hemsida
          </Anchor>
          .
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
