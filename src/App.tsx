import { useQuery } from "@apollo/client";
import { graphql } from "./gql";
import { NavBar } from "./navbar/navbar";
import { Column, Table } from "./table";
import { Comment } from "./gql/graphql";
import { Posts } from "./posts/posts";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const allComments = graphql(/* GraphQL */ `
  query getAllComments {
    comments {
      results {
        id
        name
        email
      }
      nextOffset
    }
  }
`);

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Posts />
      </main>
    </>
  );
}

export default App;
