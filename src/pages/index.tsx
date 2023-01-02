import {
  Center,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Skeleton,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import Layout from "../components/layout/Layout";
import colors from "../styles/colors";

const PRIMARY_COL_HEIGHT = 300;

export default function Home() {
  return (
    <Layout>
      <Container size="xl">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Center>
            <Stack>
              <Title color={colors.black}>Vart är du på väg?</Title>
              <Text color={colors.black}>
                IDK AB erbjuder professionell samtalscoaching till
                privatpersoner och organisationer. Vart är du på väg? Står du
                inför val eller vill göra förändringar i livet? Har du
                utmaningar i arbetslivet som du vill hantera annorlunda? Eller
                vill du bli ännu bättre på det du redan gör? Oavsett vad du vill
                fokusera på: din karriär, nära relationer, större eller mindre
                förändringar i vardagen eller att identifiera din mening med
                livet så har du kartan och kompassen inom dig!
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
          <Container>
            <Title order={1} color={colors.black}>
              Vad är coaching?
            </Title>
            <Space h="md" />
            <Text color={colors.black}>
              Coaching är en strukturerad samtalsform där coach och klient
              tillsammans utforskar, utmanar, ser möjligheter, sorterar,
              medvetandegör och fokuserar på det som är viktigt för att nå det
              önskade resultat i samtalet. Coaching används för att hitta
              lösningar på problem och göra det som är bra ännu bättre. Det
              handlar om att hjälpa människor att hitta sina egna svar på vad de
              vill och vad som ska till för att komma dit. Och sen få det gjort!
            </Text>
            <Space h="md" />
            <Text color={colors.black}>
              Klienten bidrar med sina tankar och erfarenheter om sig själv och
              vad som är viktigt i det ämne för stunden är i fokus, coachen
              lyssnar och ställer frågor för att klienten ska få utforska på
              både det medvetna och omedvetna planet. Det samarbetet kallar vi
              coaching. Mitt främsta verktyg som coach är att ställa kraftfulla
              och tankeväckande frågor och hjälpa dig att ta förverkliga de
              perspektivskapande insikter som de leder till. Det är det som du
              ska ha mig till!
            </Text>
          </Container>
        </SimpleGrid>
        <Space h="md" />
      </Container>
    </Layout>
  );
}
