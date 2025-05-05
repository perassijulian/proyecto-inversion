export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-4">
        Bienvenido al Analizador de Proyectos de Inversión
      </h1>
      <p className="text-center mb-6 max-w-xl">
        Aquí podrás evaluar diversos proyectos de inversión de manera sencilla,
        usando una serie de preguntas que te ayudarán a entender la viabilidad y
        el riesgo de cada proyecto.
      </p>
      <a
        href="/evaluacion"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Comenzar Evaluación
      </a>
    </main>
  );
}
