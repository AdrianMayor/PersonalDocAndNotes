import Link from "next/link";

async function fetchSinglePosts(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    const data = response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePosts(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/post/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
}
