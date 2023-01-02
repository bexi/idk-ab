import React from "react";
import Layout from "../components/layout/Layout";
import { Container, Space, Text, Title } from "@mantine/core";
import colors from "../styles/colors";

export const phoneNr = "+46707410325";

export default function Contact() {
  return (
    <Layout>
      <Container size="md">
        <Title order={1} color={colors.black}>
          Kontakt uppgifter
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          Telefon:{" "}
          <a href={`tel:${phoneNr}`}>
            <Text style={{ display: "inline" }} color={colors.black}>
              {phoneNr}
            </Text>
          </a>
        </Text>
      </Container>
    </Layout>
  );
}
