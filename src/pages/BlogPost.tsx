import Beans from "../articles/Beans";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  category: string;
}

export default function BlogPost({ title, date, content, category }: BlogPostProps) {
  const record: Record<string, React.ReactNode> = {
    "Beans": <Beans />
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-8">{title}</h1>

      {record[content] || <p>No content found</p>}
      <hr />
      <p>Published {date}</p>
      <p>{category}</p>
    </div>
  );
}
