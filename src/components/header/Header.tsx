import React, { useState } from "react";
import {
  createStyles,
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Menu,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "gatsby";
import colors from "../../styles/colors";

const HEADER_HEIGHT = 110;

// const useStylesMenu = createStyles((theme) => ({
//   itemLabel: {
//     padding: "5px",
//   },
//   link: {
//     color: theme.colors.gray[7],
//   },
// }));

const useStyles = createStyles((theme) => ({
  root: {
    // position: "relative",
    // zIndex: 1,
    backgroundColor: colors.blueDark,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    backgroundColor: colors.blueDark,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: colors.pinkMedium,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: colors.pinkMedium,
      color: theme.colors.gray[7],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: colors.pinkMedium,
      color: theme.colors.gray[7],
    },
  },
}));

interface HeaderResponsiveProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function Header({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  // const { classes: classesMenu } = useStylesMenu();

  const items = links.map((link) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>
    //     <Link className={classesMenu.link} to={item.link}>
    //       {item.label}
    //     </Link>
    //   </Menu.Item>
    // ));

    // if (menuItems) {
    //   return (
    //     <Menu
    //       classNames={classesMenu}
    //       key={link.label}
    //       trigger="hover"
    //       exitTransitionDuration={0}
    //     >
    //       <Menu.Target>
    //         <Link to={link.link}>
    //           <Center>
    //             {/* this should be displayed as a regular link with no sub items */}
    //             <span className={classes.link}>{link.label}</span>
    //             {/* <IconChevronDown size={12} stroke={1.5} /> */}
    //           </Center>
    //         </Link>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   );
    // }

    return (
      <Link
        key={link.label}
        to={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <MantineHeader height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Link to="/">
          <div style={{ height: "100px" }}>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              src="/inre-drivkraft-logga2.png"
            />
          </div>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}
