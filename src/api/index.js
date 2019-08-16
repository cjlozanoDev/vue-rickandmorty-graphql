import gql from 'graphql-tag';

const obtenerPersonajes = payload => payload.apollo.query({
  query: gql`{
        characters(filter: {name: "${payload.nombre}", status: "${payload.estado}"}) {
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
