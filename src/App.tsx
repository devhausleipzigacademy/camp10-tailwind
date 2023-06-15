import { useEffect, useState, useRef } from "react";
import BlogCard from "./components/card/BlogCard";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
import Input from "./components/form/Input";
import CreateBlogpost from "./components/CreateBlogpost";

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

  function test(data: string) {
    console.log(data);
  }

  const ref = useRef(null);
  console.log(ref);

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

  /*  useEffect(() => {
    console.log("inside useEffect");
  }, [formState.title, formState.author]);

  console.log("outside useEffect"); */

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main ref={ref}>
        <h1 className="heading-font px-3">Welcome to the Blog</h1>
        <div className="text-center text-slate-500 max-w-3xl m-auto  px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste
          laudantium fuga cupiditate, explicabo minus consequuntur. Distinctio
          molestias necessitatibus officia iusto veniam quidem odio dolore
          praesentium ut, aspernatur cumque laboriosam!
        </div>
        <div className="bg-neutral-100 mt-10 flex flex-wrap gap-5 justify-center p-6 ">
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
        <div>
          <h2 className="heading-font">Create a Blog Post</h2>
          <CreateBlogpost
            blogPosts={blogPosts}
            setBlogPosts={setBlogPosts}
            test={test}
          />
        </div>
      </main>
    </>
  );
}

export default App;
