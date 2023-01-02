import React from "react";
import Layout from "../components/layout/Layout";
import { Container, Space, Text, Title } from "@mantine/core";
import colors from "../styles/colors";
import { PageProps } from "gatsby";

export const phoneNr = "+46707410325";
export const mail = "jannerborn@gmail.com";

export default function Contact({ location }: PageProps) {
  return (
    <Layout location={location}>
      <Container size="md">
        <Title order={1} color={colors.black}>
          Kontakt uppgifter
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          Välkommen att höra av dig via mail eller telefon för att boka tid
          eller om du har några andra funderingar!
        </Text>
        <Space h="lg" />
        <Text color={colors.black}>
          Telefon:{" "}
          <a href={`tel:${phoneNr}`}>
            <Text style={{ display: "inline" }} color={colors.black}>
              {phoneNr}
            </Text>
          </a>
        </Text>
        <Text color={colors.black}>
          Email:{" "}
          <a href={`mailto:${mail}`}>
            <Text style={{ display: "inline" }} color={colors.black}>
              {mail}
            </Text>
          </a>
        </Text>
      </Container>
    </Layout>
  );
}
