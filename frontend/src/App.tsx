import { FiTrash } from "react-icons/fi";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>
        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Name:</label>
          <input
            className="w-full mb-5 p-2 rounded"
            type="text"
            placeholder="Digite seu nome completo..."
          />
          <label className="font-medium text-white">Name:</label>
          <input
            className="w-full mb-5 p-2 rounded"
            type="email"
            placeholder="Digite seu e-mail..."
          />
          <input
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
            type="submit"
            value="Cadastrar"
          />
        </form>

        <section className="flex flex-col">
          <article className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200">
            <p>
              <span className="font-medium">Nome:</span> Wagner
            </p>
            <p>
              <span className="font-medium">E-mail:</span> wagner@wagner.com
            </p>
            <p>
              <span className="font-medium">Status:</span> Ativo
            </p>
            <button className="bg-red-500 w-7 h-7 flex items-center justify-center rounded absolute -right-2 -top-2">
              <FiTrash size={18} color="#FFF" />
            </button>
          </article>
        </section>
      </main>
    </div>
  );
}
