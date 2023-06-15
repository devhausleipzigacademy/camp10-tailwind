import { useEffect, useState } from "react";
import BlogCard from "./components/card/BlogCard";
import Navbar from "./components/navbar/Navbar";
import Counter from "./components/Counter";
import UpdateUser from "./components/UpdateUser";

export type BlogPost = {
  id: number;
  title: string;
  author: string;
  img: string;
  date: string;
  content: string;
};

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data: BlogPost[]) => {
        setBlogPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="heading-font px-3">Welcome to the Blog</h1>
        <div className="text-center text-slate-500 max-w-3xl m-auto  px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste
          laudantium fuga cupiditate, explicabo minus consequuntur. Distinctio
          molestias necessitatibus officia iusto veniam quidem odio dolore
          praesentium ut, aspernatur cumque laboriosam!
        </div>
        <div className="bg-neutral-100 mt-10 flex gap-5 justify-center p-6 ">
          {blogPosts.map((post) => (
            <BlogCard
              author={post.author}
              content={post.content}
              title={post.title}
              date={post.date}
              img={post.img}
              id={post.id}
              key={post.id}
            />
          ))}
        </div>
        <UpdateUser />
      </main>
    </>
  );
}

export default App;
