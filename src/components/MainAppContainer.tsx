function MainAppContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 mt-3 mb-3 ms-8 overflow-auto">{children}</div>;
}
export default MainAppContainer;
