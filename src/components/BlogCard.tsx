import { Link } from "react-router-dom"

interface BlogCardProps {
    title: string, 
    date: string,
    category: string,
    description: string,
    id: string
}

export default function BlogCard({id, title, date, category, description}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} key={id} className="cursor-pointer transition-all duration-300 w-[90%] flex flex-col mx-auto dark:bg-zinc-800 bg-violet-200 p-6">
      <div className="flex justify-between mb-8">
          <p className="text-base">{category}</p>
          <p className="text-base text-violet-400">{date}</p>
      </div>
      <h3 className="text-3xl">{title}</h3>
      <p className="mb-6 text-base mt-4">{description}</p>
    </Link>
  )
}
