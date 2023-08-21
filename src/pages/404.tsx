import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid
} from '@mantine/core'
import { type HeadFC, Link } from 'gatsby'
import React from 'react'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32
    }
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  }
}))

function NotFoundPage (): JSX.Element {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
      >
        <Image src={'/404-image.svg'} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Link to="/">
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Link>
        </div>
        <Image src={'/404-image.svg'} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>

// import * as React from "react"
// import { Link, HeadFC, PageProps } from "gatsby"

// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

// const NotFoundPage: React.FC<PageProps> = () => {
//   return (
//     <main style={pageStyles}>
//       <h1 style={headingStyles}>Page not found</h1>
//       <p style={paragraphStyles}>
//         Sorry 😔, we couldn’t find what you were looking for.
//         <br />
//         {process.env.NODE_ENV === "development" ? (
//           <>
//             <br />
//             Try creating a page in <code style={codeStyles}>src/pages/</code>.
//             <br />
//           </>
//         ) : null}
//         <br />
//         <Link to="/">Go home</Link>.
//       </p>
//     </main>
//   )
// }

// export default NotFoundPage

// export const Head: HeadFC = () => <title>Not found</title>
