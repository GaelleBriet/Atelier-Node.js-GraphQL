import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { Ref, ref } from "vue";

export const apolloService = {
  getPointOfSales: (): Ref<IPointOfSalesReponse | undefined> => {
    const { result } = useQuery<IPointOfSalesReponse>(gql`
      query getPointOfSales {
        point_of_sales {
          id
          label
        }
      }
    `);
    return result;
  },
  getBikes: () => {
    const { result, fetchMore } = useQuery<IBikesReponse>(
      gql`
        query getBikes($offset: Int, $limit: Int) {
          bikes(offset: $offset, limit: $limit) {
            id
            number
            status
            kind {
              label
            }
            shop {
              label
            }
          }
        }
      `,
      {
        variables: {
          offset: 0,
          limit: 10
        }
      }
    );

    const loadMore = () => {
      fetchMore({
        variables: {
          offset: result.value?.bikes.length,
          limit: 10
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
          const previousBikes = Array.isArray(previousResult.bikes) ? previousResult.bikes : [];
          return {
            bikes: [...previousBikes, ...fetchMoreResult.bikes]
          };
        }
      });
    };
    return { result, loadMore };
  }
};
