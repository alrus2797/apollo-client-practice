import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { Column, Table } from "../table";
import { Post } from "../gql/graphql";

const allPosts = graphql(/* GraphQL */ `
  query getAllPosts {
    posts {
      nextPage
      results {
        id
        title
        user {
          name
        }
      }
    }
  }
`);

export const Posts = () => {
  const { data } = useQuery(allPosts);
  const columns: Column<Post>[] = [
    {
      value: "id",
      name: "ID",
    },
    {
      value: "title",
      name: "Title",
    },
    {
      value: "user.name",
      name: "User",
    },
  ];

  return (
    <section>
      <h4>Posts</h4>
      <Table
        items={data?.posts.results ?? []}
        columns={columns}
        extraColumns={[(item) => <a> Open {item.id}</a>]}
      />
    </section>
  );
};
