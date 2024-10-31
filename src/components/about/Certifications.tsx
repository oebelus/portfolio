import { certifications } from "../../utils/constants";

export default function Certifications() {
  return (
    <section className="p-8 dark:text-gray-300">
      <main className="text-xl space-y-10">
        {/* Section Divider */}
        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-400" />
          <span className="mx-4 flex-shrink text-3xl font-semibold">
            <span className="text-violet-600">&gt;</span> Certifications:
          </span>
          <div className="flex-grow border-t border-gray-400" />
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="border rounded-lg p-6 shadow-md  dark:border-gray-700">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </a>
              <h3 className="text-2xl font-semibold">{cert.name}</h3>
              <p className="text-lg text-gray-500">{cert.organization}</p>
              <p className="text-sm text-gray-400">{cert.date}</p>
              
              {/* Credential ID if available */}
              {cert.credential && (
                <p className="text-sm mt-2 text-gray-400">
                  Credential ID: <span className="text-gray-300">{cert.credential}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
