function Container({ children }) {
  return (
    <main className='mx-auto p-4 w-full md:w-5/6 lg:w-4/5 xl:w-3/5'>
      {children}
    </main>
  );
}
export default Container;
