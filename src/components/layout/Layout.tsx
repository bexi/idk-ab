import React, { useState } from "react";
import "../../styles/global.css";
import { AppShell, Footer, List, Text, useMantineTheme } from "@mantine/core";
import { Header as MyHeader } from "../header/Header";
import colors from "../../styles/colors";
import { Link } from "gatsby";
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem";

export default function Layout({ children }: { children: JSX.Element }) {
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
              <Link to="/contact">Kontakt</Link>
            </List.Item>
            <List.Item>
              <Link to="/policies">Integritetspolicy</Link>
            </List.Item>
          </List>
        </Footer>
      }
      header={
        <MyHeader
          links={[
            { link: "/", label: "Hem" },
            { link: "/about-karin", label: "Om Karin" },
            { link: "/how-does-it-work", label: "Hur funkar det" },
            { link: "/coaching", label: "Vad är coaching?" },
            {
              link: "/contact",
              label: "Kontakt",
            },
          ]}
        />
      }
    >
      {children}
    </AppShell>
  );
}
