import { useEffect, useState } from "react";
import BlogCard from "./components/card/BlogCard";
import Navbar from "./components/navbar/Navbar";
import Counter from "./components/Counter";
import UpdateUser from "./components/UpdateUser";
import Input from "./components/form/Input";

export type BlogPost = {
  id: number;
  title: string;
  author: string;
  img: string;
  date: string;
  content: string;
};

const initalState = {
  title: "Heeelou",
  content: "",
  image: "",
  date: "",
  author: "",
};

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [formState, setFormState] = useState(initalState);

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

  function onSubmitHandler() {
    console.log("all my input field values");
  }

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
        <div>
          <h2 className="heading-font">Create a Blog Post</h2>
          <form className="flex flex-col gap-3">
            <Input
              label="title"
              id="title"
              placeholder="some title here"
              type="text"
              value={formState.title}
              onChange={(e) =>
                setFormState({ ...formState, title: e.target.value })
              }
            />
            <Input
              label="author"
              id="author"
              placeholder="julian vogel"
              type="string"
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  author: e.target.value,
                }))
              }
            />
            <Input label="date" id="date" type="date" />
            <Input
              label="image"
              id="image"
              placeholder="https://some-url.de/example.jpg"
              type="string"
            />
            <label htmlFor="content" className="flex flex-col">
              <span>Content: </span>
              <textarea id="content" cols={5} rows={10}></textarea>
            </label>
            <button
              type="submit"
              className="text-white bg-primary px-6 py-2 text-center shadow-sm rounded-md"
            >
              Create BlogPost
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
