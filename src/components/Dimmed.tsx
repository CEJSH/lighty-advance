function Dimmed({ children }: { children: React.ReactNode }) {
  return <div style={dimmedStyle}>{children}</div>;
}

const dimmedStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: "var(--dimmed-zindex)",
} as React.CSSProperties;

export default Dimmed;
