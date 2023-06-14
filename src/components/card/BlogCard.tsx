import { BlogPost } from "../../App";

interface Props extends BlogPost {}

function BlogCard({ author, content, date, img, title, id }: Props) {
  return (
    <div className="w-[350px] max-h-[600px] bg-white rounded-md overflow-hidden shadow-md cursor-pointer transition ease-in-out duration-300  hover:scale-105">
      <div className="relative">
        <img src={img} alt="" className="w-full" />
        <time className="absolute left-0 top-6 bg-secondary text-white py-2 px-6 shadow-sm rounded-r-md">
          {date}
        </time>
      </div>
      <div className="px-4 py-8">
        <h3 className="text-slate-700 text-2xl mb-3">{title}</h3>
        <p className="text-slate-500">{content}</p>
      </div>
    </div>
  );
}

export default BlogCard;
