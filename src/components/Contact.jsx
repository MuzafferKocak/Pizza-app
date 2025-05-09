const Contact = () => {
    return (
      <div id="contact" className="pt-32 sm:pt-24 ">
        <h2 className="text-3xl text-center mb-8">Kontaktieren Sie uns</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg">Name:</label>
            <input type="text" id="name" className="w-full p-3 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg">E-Mail:</label>
            <input type="email" id="email" className="w-full p-3 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg">Nachricht:</label>
            <textarea id="message" className="w-full p-3 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded-full">Senden</button>
        </form>
      </div>
    );
  };
  
  export default Contact;