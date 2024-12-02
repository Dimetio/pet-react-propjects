/**
 * Компонент для обертки в теме упражнения с заголовком
 * @param title заголовок
 * @param children дочерний элемент
 * @returns
 */
function ContentWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-md gap-3 rounded-md border-2 bg-white p-3">
      <h3 className="text-center text-lg font-bold md:text-3xl">{title}</h3>

      {children}
    </div>
  );
}

export default ContentWrapper;
