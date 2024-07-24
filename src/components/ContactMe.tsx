import { contacts } from "../utils/constants";

export default function ContactMe() {
  return (
    <div className="p-8 dark:text-gray-300">
        <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400"><span className="text-violet-600">{`>`}</span> Contact Me:</span>
        <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <ul className="pl-20 mt-4 space-y-2 text-lg dark:text-gray-300">
        {
            contacts.map((contact) => (
            <li key={contact.id}><span className="text-violet-600">{'>'}</span> <a href={contact.link}>{contact.name}</a></li>
            ))
        }
        </ul>
    </div>
  )
}
