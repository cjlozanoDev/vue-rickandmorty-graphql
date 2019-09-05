import gql from 'graphql-tag';

const obtenerPersonajes = (payload, pagina = 1) => payload.apollo.query({
  query: gql`{
        characters(page: ${pagina},filter: {name: "${payload.nombre}", status: "${payload.estado}"}) {
          info {
            count
            next
            pages
          }
          results {
            name
            status
            species
            gender
            image
          }
        }
    }`,
});

export default {
  obtenerPersonajes,
};
