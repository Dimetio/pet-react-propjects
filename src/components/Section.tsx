import Navigation from "./Navigation";

/**
 * Компонент обертка для блока с темой упражнения
 * @param children тема упражнения
 * @param title заголовок
 */
function Section({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] bg-gray-50 p-5">
      <header>
        <Navigation />
      </header>

      <main>
        <section className="w-full border-b-2 pb-10">
          <h2 className="mb-10 text-4xl font-bold">{title}:</h2>

          {children}
        </section>
      </main>
    </div>
  );
}

export default Section;
