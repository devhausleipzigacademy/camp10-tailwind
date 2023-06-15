import { useEffect, useState, useRef } from "react";
import BlogCard from "./components/card/BlogCard";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
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
  title: "",
  content: "",
  img: "",
  date: "",
  author: "",
};

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [formState, setFormState] = useState(initalState);
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

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/posts",
        formState
      );
      setBlogPosts([...blogPosts, data]);
      setFormState(initalState);
    } catch (err) {
      console.log(err);
    }
  }

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
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => onSubmitHandler(e)}
          >
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
            <Input
              label="date"
              id="date"
              type="date"
              value={formState.date}
              onChange={(e) =>
                setFormState({ ...formState, date: e.target.value })
              }
            />
            <Input
              label="image"
              id="image"
              placeholder="https://some-url.de/example.jpg"
              type="string"
              value={formState.img}
              onChange={(e) =>
                setFormState({ ...formState, img: e.target.value })
              }
            />
            <label htmlFor="content" className="flex flex-col">
              <span>Content: </span>
              <textarea
                id="content"
                cols={5}
                rows={10}
                value={formState.content}
                onChange={(e) =>
                  setFormState({ ...formState, content: e.target.value })
                }
              ></textarea>
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
