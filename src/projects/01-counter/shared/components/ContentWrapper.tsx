function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md w-full mx-auto p-3 grid gap-3 bg-white border-2 rounded-md">
      {children}
    </div>
  );
}

export default ContentWrapper;
