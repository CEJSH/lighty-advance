import { ChangeEvent } from "react";

export default function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        gap: "31px",
      }}
    >
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{
          width: "600px",
          height: "64px",
          padding: "15px 32px",
          backgroundColor: "#F4F4F4",
          border: "none",
          borderRadius: "9999px",
        }}
        placeholder={placeholder}
      />
    </div>
  );
}
