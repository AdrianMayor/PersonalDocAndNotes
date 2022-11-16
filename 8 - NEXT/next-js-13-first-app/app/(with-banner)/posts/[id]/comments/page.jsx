import Image from "next/image";

async function fetchComments(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            width="50"
            height="50"
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
          ></Image>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
