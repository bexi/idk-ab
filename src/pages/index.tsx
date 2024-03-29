import {
  Center,
  Container,
  List,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import Layout from "../components/layout/Layout";
import colors from "../styles/colors";
import { type WindowLocation } from "@reach/router";

export interface PageProps {
  location: WindowLocation;
}

export default function Home({ location }: PageProps): JSX.Element {
  return (
    <Layout location={location}>
      <Container size="lg">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Center>
            <Stack>
              <Title color={colors.black}>Vart är du på väg?</Title>
              <Text color={colors.black}>
                Behöver du göra en förändring?
                <br />
                Står du eller din verksamhet inför val eller större
                förändringar?
                <br />
                Har du utmaningar i livet som du vill hantera annorlunda?
                <br />
                Eller vill du bli ännu bättre på det du redan gör?
              </Text>
              <Text color={colors.black}>
                Oavsett vad du vill fokusera på: din karriär, nära relationer,
                större eller mindre förändringar i vardagen eller att
                identifiera din mening med livet så har du själv kartan och
                kompassen inom dig!
              </Text>
              <Text color={colors.black}>
                I.D.K AB erbjuder Professionell samtalscoaching och
                förändringsledning till privatpersoner och organisationer och
                tillsammans minskar vi gapet mellan där du är och där du vill
                vara.
              </Text>
            </Stack>
          </Center>
          <img
            src="/flower2.png"
            alt="site banner"
            style={{ maxWidth: "100%" }}
          />
          <img
            src="/unravel2.png"
            alt="site banner"
            style={{ maxWidth: "100%" }}
          />
          <Center>
            <Stack>
              <Title color={colors.black}>Utveckla din potential</Title>
              <Text color={colors.black}>
                När är det bästa tillfället att ge sig själv några timmar med en
                coach?
              </Text>
              <Text color={colors.black}>
                Det skulle kunna vara att du har en önskan om att utforska:
              </Text>
              <List styles={{ item: { color: colors.black } }}>
                <List.Item>
                  <Text color={colors.black}>
                    Vad är mitt nästa karriärsteg?
                  </Text>
                </List.Item>
                <List.Item>
                  <Text color={colors.black}>
                    Hur vill jag förhålla mig till mig själv och andra?
                  </Text>
                </List.Item>
                <List.Item>
                  <Text color={colors.black}>
                    Vilken livsstils förändring skulle jag mål allra bäst av?
                  </Text>
                </List.Item>
                <List.Item>
                  <Text color={colors.black}>
                    Hur får jag min vardag att gå ihop?
                  </Text>
                </List.Item>
                <List.Item>
                  <Text color={colors.black}>Vad vill jag egentligen?</Text>
                </List.Item>
                <List.Item>
                  <Text color={colors.black}>
                    Hur kan jag bli bättre på att fatta beslut?
                  </Text>
                </List.Item>
              </List>
              <Text color={colors.black}>
                Vilka önskningar, drömmar och mål har du ännu inte vågat uttalat
                högt?
              </Text>
              <Text color={colors.black}>
                I coaching fokuserar vi på ditt nuläge och blickar framåt. Vi
                identifierar vi vad som är viktigt på riktigt för dig och genom
                coachingen ger du dig själv nycklarna att utveckla din
                potential, se nya möjligheter och överkomma hinder. Som klient
                uppmanas du att hitta dina egna svar, din egen sanning. Allt för
                att du ska hitta din riktning, släppa det som inte är leder dig
                framåt och frigöra energi för att nå din fulla potential och
                dina mål.
              </Text>
            </Stack>
          </Center>
        </SimpleGrid>
        <Space h="xl" />
        <Title color={colors.black}>Sagt om I.D.K</Title>
        <Space h="lg" />
        <Paper shadow="xs" p="md">
          <Text fw={700}>Lena</Text>
          <Text>
            &quot;Samtalscoaching har hjälp mig att lyfta blicken när jag
            fastnat i tankemönster. Fått mig att kunna sätta svåra situationer i
            perspektiv.&quot;
          </Text>
        </Paper>
        <Space h="lg" />
        <Paper shadow="xs" p="md">
          <Text fw={700}>Anette</Text>
          <Text>
            &quot;Jag har nyligen haft möjligheten att arbeta med Karin som min
            personliga coach, och det har varit en otroligt värdefull
            erfarenhet. När man står inför olika vägval, beslut eller utmaningar
            kan det vara svårt att sortera sina tankar. Karins trygga, lugna och
            metodiska vägledning hjälpte mig att skapa klarhet i mina alternativ
            och prioriteringar för att kunna fatta mer informerade beslut. Varje
            session är anpassad efter just dina specifika behov och mål och hon
            skapar en trygg och icke-dömande miljö för att effektivt utforska
            alla tankar och känslor. Kan starkt rekommendera Karins
            coachningstjänster till alla som söker klarhet, empowerment och
            personlig tillväxt.&quot;
          </Text>
        </Paper>
        <Space h="xl" />
      </Container>
    </Layout>
  );
}
