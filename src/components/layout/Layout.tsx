interface LayoutI {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <>
      {/*Navigation*/}
      {/*Main*/}
      <main>{children}</main>
      {/*Footer*/}
    </>
  );
};

export default Layout;
