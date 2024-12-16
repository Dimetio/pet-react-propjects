function Form({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) {
  return (
    <form className="grid gap-3" onSubmit={onSubmit}>
      <input
        type="number"
        name="time"
        placeholder="Введите число, максимум 60"
        className="rounded border-2 px-3 py-2 outline-none transition-colors focus:border-blue-400"
      />

      <button className="flex items-center justify-center rounded border px-3 py-2 font-bold text-black outline-none hover:cursor-pointer">
        Старт
      </button>
    </form>
  );
}

export default Form;
