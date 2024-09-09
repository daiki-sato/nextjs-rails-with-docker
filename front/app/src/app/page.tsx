import React from "react";

type Post = {
  id: number;
  title: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch("http://api:3000/posts", { method: "GET" });
  const posts = await response.json();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h2>POSTの一覧</h2>
      <table>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}.</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
