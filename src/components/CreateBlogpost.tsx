import React, { useState } from "react";
import Input from "./form/Input";
import axios from "axios";
import { BlogPost } from "../App";

const initalState = {
  title: "",
  content: "",
  img: "",
  date: "",
  author: "",
};

type Props = {
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  test: (data: string) => void;
};

function CreateBlogpost({ setBlogPosts, blogPosts, test }: Props) {
  const [formState, setFormState] = useState(initalState);
  console.log(test);
  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/posts",
        formState
      );
      setBlogPosts([...blogPosts, data]);
      setFormState(initalState);
      test("hello");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => onSubmitHandler(e)}>
      <Input
        label="title"
        id="title"
        placeholder="some title here"
        type="text"
        value={formState.title}
        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
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
        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
      />
      <Input
        label="image"
        id="image"
        placeholder="https://some-url.de/example.jpg"
        type="string"
        value={formState.img}
        onChange={(e) => setFormState({ ...formState, img: e.target.value })}
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
  );
}

export default CreateBlogpost;
