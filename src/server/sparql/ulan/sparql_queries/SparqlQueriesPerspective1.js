const perspectiveID = 'directed'

export const workProperties = `
    {
      ?id rdfs:label ?prefLabel__id .
      BIND(?prefLabel__id AS ?prefLabel__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      BIND(?id as ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id rel:relationSubject ?personAName__id .
      ?personAName__id rdfs:label ?personANAme__prefLabel .
      BIND (?personAName__id AS ?personAName__dataProviderUlr )

    }
    UNION
    {
      ?id rel:relationObject ?personBName__id .
      ?personBName__id rdfs:label ?personBNAme__prefLabel .
      BIND (?personBName__id AS ?personBName__dataProviderUlr )

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
