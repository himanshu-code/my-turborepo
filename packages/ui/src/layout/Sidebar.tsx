export function Sidebar() {
  return (
    <aside
      style={{
        width: 200,
        background: "#f4f4f4",
        padding: 20,
        height: "100%",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
      </nav>
    </aside>
  );
}
