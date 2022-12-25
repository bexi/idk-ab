import {
  Center,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import Layout from "../components/layout/Layout";
import colors from "../styles/colors";

const PRIMARY_COL_HEIGHT = 300;

export default function Home() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Layout>
      <Container size="xl">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Center>
            <Text color={colors.black}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
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
            <Text color={colors.black}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Center>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

{
  /* <Stack>
<Group style={{ width: "100%" }}>
  <div>
    <Text color="red">Test</Text>
  </div>
  <img
    src="/flower2.png"
    alt="site banner"
    style={{ maxWidth: "100%" }}
  />
</Group>
<div style={{ width: "100%", display: "flex" }}>
  <img
    src="/unravel2.png"
    alt="site banner"
    style={{ maxWidth: "100%" }}
  />
  <div style={{ width: "50%" }}>
    <h4>test</h4>
  </div>
</div>
</Stack> */
}
