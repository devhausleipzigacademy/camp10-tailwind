import BlogCard from "./components/card/BlogCard";
import Navbar from "./components/navbar/Navbar";

function App() {
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
        <div className="bg-neutral-100 mt-10 h-screen p-6">
          <BlogCard />
        </div>
      </main>
    </>
  );
}

export default App;
