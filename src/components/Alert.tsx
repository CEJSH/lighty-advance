import Dimmed from "./Dimmed";

interface AlertProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick: () => void;
}

function Alert({
  open,
  title,
  description,
  buttonLabel = "확인",
  onButtonClick,
}: AlertProps) {
  if (open === false) {
    return null;
  }
  return (
    <Dimmed>
      <div style={AlertContainer}>
        <span style={{ marginBottom: 6, display: "block", fontWeight: "bold" }}>
          {title}
        </span>
        {description ? (
          <span style={{ display: "block" }}>{description}</span>
        ) : null}
        <div
          style={{
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={onButtonClick}
            style={{ marginTop: 12, border: "none" }}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </Dimmed>
  );
}

const AlertContainer = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: "8px",
  overflow: "hidden",
  zIndex: 10,
  width: "320px",
  padding: "24px",
  boxSizing: "border-box",
} as React.CSSProperties;

export default Alert;
