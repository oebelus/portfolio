import { Link } from "react-router-dom"

interface BlogCardProps {
    title: string, 
    date: string,
    category: string[],
    description: string,
    id: string
}

export default function BlogCard({id, title, date, category, description}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} key={id} className="cursor-pointer w-[90%] rounded-lg flex flex-col mx-auto dark:bg-zinc-800 bg-violet-200 p-4 md:p-6">
      <div className="md:flex justify-between gap-2">
          <h3 className="md:text-2xl text-xl">{title}</h3>
          <p className="text-base dark:text-violet-400 text-violet-800">{date}</p>
      </div>
      
      <p className="text-md mt-2"><span className="text-violet-600">{"> "}</span>{description}</p>

      <div className="flex flex-row flex-wrap md:gap-2 gap-1 justify-end">
        {category.map((c, i) => (
          <p key={i} className="md:text-base bg-violet-400 dark:text-zinc-800 text-white w-fit px-4 py-1 rounded-xl mt-4">
            {c}
          </p>
        ))}
      </div>
    </Link>
  )
}
