import React, { useState } from "react";
import "../../styles/global.css";
import { AppShell, Footer, Text, useMantineTheme } from "@mantine/core";
import { Header as MyHeader } from "../header/Header";
import colors from "../../styles/colors";

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
          height={60}
          p="md"
          style={{ backgroundColor: colors.blueLight }}
        >
          Footer
        </Footer>
      }
      header={
        <MyHeader
          links={[
            { link: "/", label: "Hem" },
            { link: "/about", label: "Om oss" },
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
