# Oppgave 2.1 - Planlegging

## API endepunkter og HTTP-verb(metoder?)

### `/users`

- **GET** - Henter ut data/liste med alle utdøverene
  - `200 OK` - Velykket og returnerer data om alle utdøvere
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **POST** - Opretter en ny bruker
  - `415`
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `409 Conflict` - Ikke velykket og returnerer en string med hva feilen omhandler(duplikat data)
  - `500 Internal Server Error` - Ikke velykket og returnerer en string som beskriver feilen
  - `201 Created` - Vellykket

### `/users/user/{id}`

- **GET** - Henter ut informasjonen til utdøveren med en gitt ID
  - `200 OK` - Velykket og returnerer data om utdøver
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
  - `404 Not found` - Velykket og returnerer en side med 404 Not found (utdøver med den id'en ikke funnet)
- **PUT/PATCH** - Endrer data gitt om denne utdøveren
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (utdøver med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `200 OK` - Velykket og returnerer den oppdaterte utdøveren
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **DELETE** - Sletter utdøveren
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (utdøver med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler (id'en for utdøver som skal fjernes)
  - `204 No Content` - Velykket og sletter utdøveren
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen

### `/templates`

- **GET** - Henter ut data om appens "globale" maler(de tilgjengelig for alle utdøvere)
  - `200 OK` - Velykket og returnerer data om alle globale malene
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **POST** - Lager/opretter en ny global mal
  - `415`
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `409 Conflict` - Ikke velykket og returnerer en string med hva feilen omhandler(duplikat data)
  - `500 Internal Server Error` - Ikke velykket og returnerer en string som beskriver feilen
  - `201 Created` - Vellykket

### `/templates/template/{id}`

- **GET** - Henter ut data om spesifikk global mal
  - `200 OK` - Velykket og returnerer data om den spesifikke malen
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **PUT/PATCH** - Endrer data/info på mal med en gitt ID
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (Mal med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `200 OK` - Velykket og returnerer den oppdaterte malen
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **DELETE** - Sletter global mal med gitt ID
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (Mal med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler (id'en for mal som skal fjernes)
  - `204 No Content` - Velykket og sletter malen
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen

### `/questions`

- **GET** - Henter data knyttet til eksempelspørsmål
  - `200 OK` - Velykket og returnerer data om alle eksempelspørsmål
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **POST** - Oppretter nytt eksempelspørsmål
  - `415`
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `409 Conflict` - Ikke velykket og returnerer en string med hva feilen omhandler(duplikat data)
  - `500 Internal Server Error` - Ikke velykket og returnerer en string som beskriver feilen
  - `201 Created` - Vellykket

### `/questions/question/{id}`

- **PUT/PATCH** - Endrer eksempelspørsål med gitt ID
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (Spørsmål med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `200 OK` - Velykket og returnerer det oppdaterte spørsmålet
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **DELETE** - Sletter eksempelspørsmål med gitt ID
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (spørsmål med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler (id'en for spørsmålet som skal fjernes)
  - `204 No Content` - Velykket og sletter spørsmålet
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen

### `/users/user/{id}/stats`

- **GET** - Henter ut data knyttet til gitt utdøvers stats(max-hjertefrekvens, osv)
  - `200 OK` - Velykket og returnerer data om utøver(id) sine stats
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
  - `404 Not found` - Velykket og returnerer en side med 404 Not found (utdøver med den id'en ikke funnet)
- **POST** - Oppretter stats for gitt utdøver
  - `415`
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `500 Internal Server Error` - Ikke velykket og returnerer en string som beskriver feilen
  - `201 Created` - Vellykket
- **PUT/PATCH** - Endrer/oppdaterer stats for gitt utdøver
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (utdøver med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `200 OK` - Velykket og returnerer de oppdaterte utdøver sine stats
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen

### `/users/user/{id}/goals`

- **GET** - Hente ut data knyttet til utdøvers mål/konkuranser
  - `200 OK` - Velykket og returnerer data om utøver(id) sine goals
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
  - `404 Not found` - Velykket og returnerer en side med 404 Not found (utdøver med den id'en ikke funnet)
- **POST** - Opretter mål/konkurangse for gitt utdøver
  - `415`
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `409 Conflict` - Ikke velykket og returnerer en string med hva feilen omhandler(duplikat data)
  - `500 Internal Server Error` - Ikke velykket og returnerer en string som beskriver feilen
  - `201 Created` - Vellykket
- **PUT/PATCH** - Endrer/oppdaterer utdøver sine mål/konkuranser
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (utdøver med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `200 OK` - Velykket og returnerer de oppdaterte utdøver sine goals
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen

### `/users/user/{id}/sessions`

- **GET** - Henter ut info/liste over gitt utdøvers sine økter
  - `200 OK` - Velykket og returnerer data om utøver(id) sine sessions
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
  - `404 Not found` - Velykket og returnerer en side med 404 Not found (utdøver med den id'en ikke funnet)
- **POST** - Oppretter ny økt for gitt utdøver
  - `415`
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `409 Conflict` - Ikke velykket og returnerer en string med hva feilen omhandler(duplikat data)
  - `500 Internal Server Error` - Ikke velykket og returnerer en string som beskriver feilen
  - `201 Created` - Vellykket

### `/users/user/{id}/sessions/session/{id}`

- **GET** - Henter ut data knyttet til en gitt økt
  - `200 OK` - Velykket og returnerer data om utøver(id) sin session(id)
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
  - `404 Not found` - Velykket og returnerer en side med 404 Not found (session med den id'en ikke funnet)
- **PUT/PATCH** - Endrer/oppdaterer data for gitt økt
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (session med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `200 OK` - Velykket og returnerer de oppdaterte utdøver sin session
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **DELETE** - Sletter gitt økt
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (session med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler (id'en for session som skal fjernes)
  - `204 No Content` - Velykket og sletter session
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen

### `/users/user/{id}/sessions/session/templates`

- **GET** - Hente ut alle maler som kan benyttes av gitt utdøver
  - `200 OK` - Velykket og returnerer data om utøver(id) sin tilgjengelige templates
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
  - `404 Not found` - Velykket og returnerer en side med 404 Not found (utdøver med den id'en ikke funnet)

### `/users/user/{id}/sessions/session/templates/{id}`

- **GET** - Henter data knyttet til den spesifikke malen
  - `200 OK` - Velykket og returnerer data om utøver(id) sin template(id)
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
  - `404 Not found` - Velykket og returnerer en side med 404 Not found (template med den id'en ikke funnet)
- **PUT/PATCH** - Endrer/oppdaterer en gitt mal
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (template med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler, og spesifiserer hvilken data som er obligatorisk
  - `200 OK` - Velykket og returnerer de oppdaterte utdøver sin template
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen
- **DELETE** - Sletter en gitt mal
  - `404 Not Found` - Velykket og returnerer en side med 404 Not Found (template med den id'en ikke funnet)
  - `400 Bad request` - Ikke velykket og returnerer at data mangler (id'en for template som skal fjernes)
  - `204 No Content` - Velykket og sletter template
  - `500 Internal Server Error` - Ikke velykket og returnerer JSON.stringify av feilen

## Sider

Alle sidene skal vise Navbaren som skal linke til

- Siden `/questions`
- Siden `/questions/create`
- Siden `/templates`
- Siden `/templates/create`
- Siden `/users`
- Siden `/users/user/create`

For å se hvilke endepunkter hører til hver side se [skissen](#sider-som-linker-til-hvor)

### Utdøvere

#### `/users`

Viser listen over alle utdøverne\
Når en utdøver trykkes på så går man til siden for den spesifikke utdøveren `/users/user/{id}`\
Hver utdøver skal også ha en tre knapper på siden av seg

- en som leder til stats `/users/user/{id}/stats`
- en til mål `/users/user/{id}/goals`
- og en som sletter utdøveren

#### `/users/user/create`

Side for å legge til ny utdøver\
Her skal det være felter for å fylle inn TODO:\
Skal også være en tilbakeknapp som tar bruker tilbake til `/users` siden
og en create kanpp som tar deg til den opprettede utdøveren `/users/user/{id}`

#### `/users/user/{id}`

Side som viser utdøverens informasjon, som userID, kjønn, sport.\
Under informasjonen ^^ så skal det være en knapp for å slette utdøver, og en for å endre utdøver `/users/user/{id}/edit`\
Viser også utdøverens tre mål for året, og om de blir trykket på så linkes det til siden `/users/user/{id}/goals`.\
Viser utdøvers nærende stats med knapp på siden som leder til `/users/user/{id}/stats`\
Har en liste over utdøvers 3 siste økter, knapp på siden som lar bruker gå til den spesifikke økten `/users/user/{id}/sessions/session/{id}`, også knapp over(ved liste/tabell-tittel) som går til alle utdøverens økter `/users/user/{id}/sessions`\
Ved økt listen/tabellen så skal det være en knapp for å opprette ny økt, som går til `/users/user/{id}/sessions/session/templates`

#### `/users/user/{id}/edit`

Side for å kunne endre informasjonen til en utdøver\
Ligner på siden for å lage bruker, men istedet for tomme tekstfelter så er det utfylte som kan endres på.\
Har en tilbake knapp som leder tilbake til `/users/user/{id}`, knappen for å lagre endringene går samme sted.

### Maler og spørsmål

#### `/templates`

Viser en rutenett over alle templates (av de som er tilgjenglig for alle)\
Skal være en knapp over rutenettet som lar bruker opprette en ny global mal `/templates/create`\
Hver mal i tabellen skal ha en knapp for å vise malen `/templates/template/{id}`\
Og en for å endre malen `/templates/template/{id}/edit`

#### `/templates/create`

Side for å lage en ny template\
Skal ha innfyllingsfelt for

- hva malen skal hete(økt den hører til)
- tags for mal
- en slug
- Hvilken aktivitet malen er laget for (dropdown meny)
- muligheten til å legge til x antall spørsmål som skal svares på
- hvilke måleparameter som skal rapporteres
- Antall intervaller med varighet og intensitetssoner

Skal være en tilbakeknapp til `/templates`\
og en create knapp som viser deg den spesifikke malen `/templates/template/{id}`

#### `/templates/template/{id}`

Side som viser en spesifikk mal\
Skal ha en tilbakeknapp som leder til `/templates`\
og en knapp som lar deg endre malen `/templates/template/{id}/edit`

#### `/templates/template/{id}/edit`

Side for endre på en global template\
Har en tilbakeknapp og en lagreknapp som leder til `/templates/template/{id}`

#### `/questions`

Viser liste over alle eksempelspørsmål som kan legges til økter og maler\
Skal ha en knapp som lar deg lage nye eksempelspørsmål `/questions/create`\
og en som lar deg endre på ett spesifikt allerede eksisterende spørsmål `/questions/question/{id}/edit`

#### `/questions/create`

Side for å oprette nytt eksempelspørsmål\
Består av en tom tekstboks og en mulighet til å velge hvordan den skal kunne svares på.
Har to knapper, en for å lage og en tilbakekanpp.\
Begge leder til `/questions`

#### `/questions/question/{id}/edit`

Side for å endre på ett eksempelspørsmål\
Består av en allerede utfylt tekstboks som kan endres på og muligheten til å endre hvilket svaralternativ som skal benyttes\
Har to knapper, en for å lagre og en tilbakekanpp.\
Begge leder til `/questions`

### Trenings-stats

#### `/users/user/{id}/stats`

Side som viser til dataen som max-hjertefrekvens, terskelwatt, terskelfart og intensitetssonene, en tabell for nåværende og en for akriv\

#### `/users/user/{id}/stats/create` - side for å legge inn dataen/stats\

#### `/users/user/{id}/stats/edit` - side for å endre på dataen/stats

### Mål og konkurangser

#### `/users/user/{id}/goals` - side med en tabell over alle utdøverens treningsmål/konkurangser\

#### `/users/user/{id}/goals/create` - side for å legge til nye treningsmål/konkurangser

#### `/users/user/{id}/goals/edit` - side for å legge til nye treningsmål/konkurangser

### Økter

#### `/users/user/{id}/sessions` - Side med en tabell over alle økter med denne utdøveren\

#### `/users/user/{id}/sessions/session/create` - side for å oprette en økt uten template\

#### `/users/user/{id}/sessions/session/templates/{id}/create` - side for å opprette økt med en template

#### `/users/user/{id}/sessions/session/templates` - side som viser alle malene som utdøveren kan benytte, eller heller velge å oprette økt uten mal\

#### `/users/user/{id}/sessions/session/templates/{id}` - side som viser hvordan en spesifikk mal ser ut\

#### `/users/user/{id}/sessions/session/templates/{id}/edit` - side for å tilpasse/endre på en mal

#### `/users/user/{id}/sessions/session/{id}` - viser data knyttet til den enkelte økten\

#### `/users/user/{id}/sessions/session/{id}/edit` - side for å endre en økt\

#### `/users/user/{id}/sessions/session/{id}/rapport` - side for å rapportere hvordan økten gikk\

#### `/users/user/{id}/sessions/analysis` - Side som sammenligner 2 eller flere økter

## Sider som linker til hvor

![Et noe rotete diagramm over hvor ting skal linkes til hverandre i oppgave](./oppg_2-1.drawio.png)

## Datamodell

```jsx
model User {
    id              String          @id @default(uuid())
    userID          String
    gender          String
    sport           String
    meta            Meta[]
    activities?     Activities[]
}

model Meta{
    id          String      @id @default(uuid())
    date        DateTime    @default(now())
    heartrate   Int
    watt        Int
    speed       Int
}

model Activities{
    id          String @id @default(uuid())
    date        DateTime @default(now())
    updatedAt   DateTime @updatedAt
    name        String?
    tags        Tag[]?
    question    Question[]?
    intervals   Interval[]?

    Goal        Goal? @relation(fields: [goalId], references: [id], onDelete: Cascade)
    goalId      String?

}

model Tag{
    id      String @id @default(uuid())
    tag     String
}

model Goal{
    id              String @id @default(uuid())
    name            String
    deadline        DateTime @default(now())
    comment         String?

    Competition     Competition? @relation(fields: [compId], references: [id], onDelete: Cascade)
    compId          String?

    User            User? @relation(fields: [userId], references: [id], onDelete: Cascade)
    userId          String?
}

model Competition{
    id          String @id @default(uuid())
    name        String
    date        DateTime @default(now())
    place       String?
    goal        String?
    type        String?
    priority    CompPriority
    comment     String?
}
model Question{
    id          String @id @default(uuid())
    question    String
    type        QuestionAnswerType
}

model Interval{
    id          String @id @default(uuid())
    duration    Int
    intensity   Int
}



enum CompPriority{
    A
    B
    C
}
enum QuestionAnswerType{
    TEXT
    RANGE
    MOOD
}
```

### Databasemodell

![En veldig så rotete databasemodell](./databasemodell.png)
