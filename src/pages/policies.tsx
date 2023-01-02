import React from "react";
import Layout from "../components/layout/Layout";
import { Container, Space, Text, Title } from "@mantine/core";
import colors from "../styles/colors";
import { PageProps } from "gatsby";

export default function Prices({ location }: PageProps) {
  return (
    <Layout location={location}>
      <Container size="md">
        <Title order={1} color={colors.black}>
          Integritetspolicy enligt GDPR
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          De uppgifter jag sparar om mina klienter i mitt adressregister är
          namn, adress, mobilnummer och email. Uppgifterna används för
          fakturering och bokning och är skyddade genom lösenord. Jag delar inte
          några uppgifter med tredje part och jag använder endast uppgifterna
          när jag behöver kontakta klienten angående bokning och vid
          fakturering.
        </Text>
        <Space h="md" />
        <Text color={colors.black}>
          Vid avslutad coaching behåller jag klientens kontaktuppgifter i upp
          till två år, men klienten kan när som helst kontakta mig om han/hon
          önskar att jag raderar kontaktuppgifterna innan dess.
        </Text>
        <Space h="md" />
      </Container>
    </Layout>
  );
}
