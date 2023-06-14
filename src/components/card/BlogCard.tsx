function BlogCard() {
  return (
    <div className="w-[350px] max-h-[600px] bg-white rounded-md overflow-hidden shadow-md cursor-pointer transition ease-in-out duration-300  hover:scale-105">
      <div className="relative">
        <img
          src="https://source.unsplash.com/featured/300x201"
          alt=""
          className="w-full"
        />
        <time className="absolute left-0 top-6 bg-secondary text-white py-2 px-6 shadow-sm rounded-r-md">
          12.08.2023
        </time>
      </div>
      <div className="px-4 py-8">
        <h3 className="text-slate-700 text-2xl mb-3">Some Title</h3>
        <p className="text-slate-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, excepturi, illo optio impedit accusantium quidem
          commodi, ullam ab laudantium harum doloremque beatae ratione
          voluptatem vero adipisci. Libero harum perspiciatis at.
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
