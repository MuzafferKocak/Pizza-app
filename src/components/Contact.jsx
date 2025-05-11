import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-32 sm:pt-24 px-6"
    >
      <h2 className="text-4xl font-bold text-center text-red-700 mb-4 italic">
        Kontaktieren Sie uns
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-6 rounded-xl shadow-md">
        
        <div className="space-y-6 text-lg text-gray-800">
          <div className="flex items-start gap-3">
            <MapPinIcon className="h-6 w-6 text-red-600" />
            <span>Musterstraße 12, 12345 Berlin</span>
          </div>
          <div className="flex items-start gap-3">
            <PhoneIcon className="h-6 w-6 text-red-600" />
            <span>030 123 456</span>
          </div>
          <div className="flex items-start gap-3">
            <EnvelopeIcon className="h-6 w-6 text-red-600" />
            <span>kontakt@pizzatime.de</span>
          </div>
          <div className="flex items-start gap-3">
            <ClockIcon className="h-6 w-6 text-red-600" />
            <span>Mo–So: 11:00 – 22:00 Uhr</span>
          </div>
        </div>

        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Nachricht
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition"
          >
            Senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
