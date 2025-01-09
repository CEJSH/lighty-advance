import { ChangeEvent } from "react";

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  isMobile,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        display: "flex",
        gap: isMobile ? "16px" : "31px",
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: isMobile ? "16px" : "24px",
          lineHeight: isMobile ? "20px" : "28.64px",
        }}
      >
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{
          fontSize: isMobile ? "14px" : "18px",
          boxSizing: "border-box",
          width: isMobile ? "100%" : "500px",
          height: isMobile ? "50px" : "64px",
          padding: isMobile ? "15px 20px" : "15px 32px",
          backgroundColor: "#F4F4F4",
          border: "none",
          borderRadius: "9999px",
        }}
        placeholder={placeholder}
      />
    </div>
  );
}
