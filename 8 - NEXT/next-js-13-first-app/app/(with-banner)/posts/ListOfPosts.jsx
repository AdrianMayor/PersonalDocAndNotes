import Link from "next/link";
import LikeButton from "./LikeButton";

/* const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}; */

async function fetchPosts() {
  try {
    // getStaticProps
    //   --> const response = await fetch("https://jsonplaceholder.typicode.com/posts"});

    // getServerSideProps
    //   --> const response = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: 'no-store'});

    // incremental static regeneration
    //   --> const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next: { revalidate: 60 },});

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });

    const data = response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function ListOfPosts() {
  const post = await fetchPosts();

  return post.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href="/post/[id]" as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
