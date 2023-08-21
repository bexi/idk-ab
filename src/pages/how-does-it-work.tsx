import React from 'react'
import Layout from '../components/layout/Layout'
import { Container, List, Space, Text, Title } from '@mantine/core'
import colors from '../styles/colors'
import { type PageProps } from 'gatsby'
import { mail, phoneNr } from './contact'

export default function HowDoesItWork ({ location }: PageProps): JSX.Element {
  return (
    <Layout location={location}>
      <Container size="md">
        <Title order={1} color={colors.black}>
          Hur går det till?
        </Title>
        <Space h="md" />
        <Text color={colors.black}>
          Coaching är ett samarbete mellan dig som klient och coachen och vi
          börjar vårt samarbete med ett första möte där vi tillsammans tittar på
          ditt nuläge och var du vill uppnå med coachingen. Första steget till
          förändring är medvetenhet. Därefter planerar vi det fortsatta
          samarbetet helt beroende på vilka behov du har och vilka mål du vill
          uppnå. Den vanligaste formen för ett coachsamtal är att klienten med
          coachens hjälp definierar målet för samtalet, det kan vara en
          handlingsplan, ett problem, en förändring som ska genomföras eller en
          insikt man vill uppnå. Där startar sedan processen som tydliggör vad
          som verkligen är viktigt, undanröjer hinder på vägen och plockar upp
          insikter på vägen för att ta sig målet.
        </Text>
        <Space h="md" />
        <Text color={colors.black}>
          För att du ska känna dig trygg innan vi startar har vi ett första
          kostnadsfritt samtal på 30 min där du får möjlighet att ställa de
          frågor du eventuellt har
        </Text>
        <Space h="md" />
        <Text color={colors.black}>
          Ett samtal är sedan 55 minuter om vi inte kommit överens om annat och
          genomförs digitalt eller fysiskt (centrala Göteborg).
        </Text>
        <Space h="lg" />
        <Title order={2} color={colors.black}>
          Priser
        </Title>
        <Space h="md" />
        <Title order={3} color={colors.black}>
          Privatperson
        </Title>
        <List style={{ listStyle: 'none' }}>
          <List.Item>
            <Text color={colors.black}>1 samtal 55 min 950 kr</Text>
          </List.Item>
          <List.Item>
            <Text color={colors.black}>1 samtal 85 min 1400 kr</Text>
          </List.Item>
          <List.Item>
            <Text color={colors.black}>
              Samtalspaket 5 samtal 55 min 4100 kr (gäller 6 månader från
              inköpsdatum)
            </Text>
          </List.Item>
        </List>
        <Space h="md" />
        <Title order={3} color={colors.black}>
          Medarbetare
        </Title>
        <Text color={colors.black}>
          Samtalspaket 5 samtal 55 min 6200 kr (ex moms )
        </Text>
        <Space h="md" />
        <Title order={3} color={colors.black}>
          Chef och ledare
        </Title>
        <Text color={colors.black}>
          Samtalspaket 5 samtal 55 min 8700 kr (ex moms )
        </Text>
        <Space h="lg" />
        <Title order={2} color={colors.black}>
          Om och avbokningsregler
        </Title>
        <Text color={colors.black}>
          Ett samtal är 55 minuter om vi inte kommit överens om annat och
          genomförs digitalt eller fysiskt (centrala Göteborg). Vid förhinder
          ringer eller sms:ar du din avbokning senast 24 timmar innan bokad tid.
          Sen avbokning och uteblivet möte debiteras.
        </Text>
        <Space h="md" />
        <Title order={2} color={colors.black}>
          Bokning av tid
        </Title>
        <Text color={colors.black}>
          Välkommen att höra av dig via mail eller telefon för att boka tid!
        </Text>
        <Space h="md" />
        <Text color={colors.black}>
          Telefon:{' '}
          <a href={`tel:${phoneNr}`}>
            <Text style={{ display: 'inline' }} color={colors.black}>
              {phoneNr}
            </Text>
          </a>
        </Text>
        <Text color={colors.black}>
          Email:{' '}
          <a href={`mailto:${mail}`}>
            <Text style={{ display: 'inline' }} color={colors.black}>
              {mail}
            </Text>
          </a>
        </Text>
        {/* <Text color={colors.black}>Innehar F-skatt</Text> */}
        {/* <Title order={3} color={colors.black}>
          Kontakt uppgifter
        </Title>
        <List style={{ listStyle: "none" }}>
          <List.Item>
            <Text color={colors.black}>Karin Jannerborn</Text>
          </List.Item>
          <List.Item>
            <Text color={colors.black}>
              Telefon:{" "}
              <a href={`tel:${phoneNr}`}>
                <Text style={{ display: "inline" }} color={colors.black}>
                  {phoneNr}
                </Text>
              </a>
            </Text>
          </List.Item>
        </List> */}
      </Container>
    </Layout>
  )
}
