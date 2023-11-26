function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-violet-900 border-b border-violet-900"
    : "text-zinc-900";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-2xl font-semibold hover:text-violet-900 ${buttonClasses} cursor-default`}
      >
        {children}
      </p>
    </button>
  );
}

export default TabButton;
