import { Link } from "react-router-dom";

export default function GoBack({back}: {back: string}) {
  return (
    <div>
        <Link to={back} className="dark:text-white material-symbols-outlined mt-4 ml-4">
            reply
        </Link>
    </div>
  )
}
