import { Counter } from "./posts/Counter";

export default function PostsLayout({ children }) {
  return (
    <div>
      <Counter />
      <small>Home &bull; Posts</small>
      {children}
    </div>
  );
}
