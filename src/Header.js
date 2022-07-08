const Header = () => {
  const headerTitle = "Arun's Todo List";
  const headerTitleStyle = {
    fontSize: "24px",
    backgroundColor: "#61dbfb",
    color: "#fff",
    margin: "0",
    textAlign: "center",
    padding: "15px 0px",
  };

  return (
    <>
      <h1 style={headerTitleStyle}>{headerTitle}</h1>
    </>
  );
};

export default Header;
