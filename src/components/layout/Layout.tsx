import React from "react";
import "../../styles/global.css";
import { AppShell, Footer, List, Text, useMantineTheme } from "@mantine/core";
import { Header as MyHeader } from "../header/Header";
import colors from "../../styles/colors";
import { Link } from "gatsby";
import { type WindowLocation } from "@reach/router";

interface LayoutProps {
  children: JSX.Element;
  location: WindowLocation;
}

export default function Layout({
  children,
  location,
}: LayoutProps): JSX.Element {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer
          height={70}
          p="md"
          style={{ backgroundColor: colors.blueLight }}
        >
          <List style={{ float: "right", listStyle: "none" }}>
            <List.Item>
              <Link to="/contact">
                <Text color={colors.blueMain}>Kontakt</Text>
              </Link>
            </List.Item>
            <List.Item>
              <Link to="/policies">
                <Text color={colors.blueMain}>Integritetspolicy</Text>
              </Link>
            </List.Item>
          </List>
        </Footer>
      }
      header={
        <MyHeader
          links={[
            { link: "/", label: "Hem" },
            { link: "/about-karin/", label: "Om I.D.K AB" },
            { link: "/how-does-it-work/", label: "Hur går det till?" },
            { link: "/coaching/", label: "Vad är coaching?" },
            {
              link: "/contact/",
              label: "Kontaktuppgifter",
            },
          ]}
          activePath={location.pathname}
        />
      }
    >
      {children}
    </AppShell>
  );
}
