function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-md gap-3 rounded-md border-2 bg-white p-3">
      {children}
    </div>
  );
}

export default ContentWrapper;
