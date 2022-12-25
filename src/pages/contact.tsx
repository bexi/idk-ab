import React from "react";
import Layout from "../components/layout/Layout";
import { Center, Container, Text } from "@mantine/core";
import colors from "../styles/colors";

export default function Contact() {
  return (
    <Layout>
      <Container size="md">
        <Center>
          <Text color={colors.black}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Center>
      </Container>
    </Layout>
  );
}
