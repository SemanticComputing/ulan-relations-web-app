const perspectiveID = 'directed'

export const directedProperties = `
    {
      ?id rdfs:label ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      #BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      #BIND(?id as ?uri__id)
      #BIND(?id as ?uri__dataProviderUrl)
      #BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id rel:relationSubject ?personAName__id .
      ?personAName__id rdfs:label ?personAName__prefLabel .
      ?personAName__id skos:exactMatch ?personAName__dataProviderUrl .

    }
    UNION
    {
      ?id rel:relationObject ?personBName__id .
      ?personBName__id rdfs:label ?personBName__prefLabel .
      ?personBName__id skos:exactMatch ?personBName__dataProviderUrl .

    }
`

export const undirectedProperties = `
    {
      ?id rdfs:label ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    }
    UNION
    {
      ?id rel:connectedEntity ?connectedPerson__id .
      ?connectedPerson__id rdfs:label ?connectedPerson__prefLabel .
      ?connectedPerson__id skos:exactMatch ?connectedPerson__dataProviderUrl .
    }
`

export const consolidatedProperties = `
    {
      ?id rdfs:label ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    }
    UNION
    {
      ?id rel:connectedEntity ?connectedPerson__id .
      ?connectedPerson__id rdfs:label ?connectedPerson__prefLabel .
      ?connectedPerson__id skos:exactMatch ?personName__dataProviderUrl .
    }
    UNION
    {
      ?id rel:connectingEntity ?connectingPerson__id .
      ?connectingPerson__id__id rdfs:label ?connectingPerson__prefLabel .
      #?connectingPerson__id skos:exactMatch ?connectingPerson__dataProviderUrl .

    }
`

export const personProperties = `
    {
      ?id rdfs:label ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    }
    UNION
    {
      ?id rel:connectedEntity ?connectedPerson__id .
      ?connectedPerson__id rdfs:label ?connectedPerson__prefLabel .
      ?connectedPerson__id skos:exactMatch ?personName__dataProviderUrl .
    }
    UNION
    {
      ?id rel:connectingEntity ?connectingPerson__id .
      ?connectingPerson__id__id rdfs:label ?connectingPerson__prefLabel .
      #?connectingPerson__id skos:exactMatch ?connectingPerson__dataProviderUrl .

    }
`

export const knowledgeGraphMetadataQuery = `
  SELECT * 
  WHERE {
    ?id a sd:Dataset ;
        dct:title ?title ;
        dct:publisher ?publisher ;
        dct:rightsHolder ?rightsHolder ;
        dct:modified ?modified ;
        dct:source ?databaseDump__id .
    ?databaseDump__id skos:prefLabel ?databaseDump__prefLabel ;
                      mmm-schema:data_provider_url ?databaseDump__dataProviderUrl ;
                      dct:modified ?databaseDump__modified .
  }
`
