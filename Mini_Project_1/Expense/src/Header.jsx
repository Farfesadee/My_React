function Header() {
  const today = new Date().toDateString();
  return (
    <header className="header">
      <h1>My Expenses Tracker</h1>
      <p><strong>{today}</strong></p>
    </header>
  );
}
export default Header;