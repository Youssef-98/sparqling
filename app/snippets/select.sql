-- BEGIN-SNIPPET select
PREFIX ext: <http://mu.semte.ch/vocabularies/ext/>
PREFIX schema: <http://schema.org/>

SELECT ?book ?bookTitle {
  GRAPH <http://mu.semte.ch/application> {
    ?book a schema:Book.
    ?book schema:title ?bookTitle.
  }
}
-- END-SNIPPET
