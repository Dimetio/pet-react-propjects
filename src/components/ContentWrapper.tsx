/**
 * Компонент обертка для блока с темой упражнения
 * @param children тема упражнения
 * @param title заголовок
 */
function ContentWrapper({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="w-full border-b-2 pb-10">
      <h2 className="mb-10 text-4xl font-bold">{title}:</h2>

      {children}
    </section>
  );
}

export default ContentWrapper;
