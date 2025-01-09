import { CSSProperties } from "react";
import Lighty from "../icons/lighty";
import LightyLetter from "../icons/LightyLetter";

export default function Footer() {
  return (
    <div style={containerStyle}>
      <div style={infoContainerStyle}>
        <div style={iconWrapper}>
          <Lighty width="20.64" height="20.64" color="white" />
          <LightyLetter width="71" color="white" />
        </div>
        <div style={infoWrapper}>
          <span>서비스 명: 라이티</span>
          <span>문의: myteamlighty@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  color: "white",
  backgroundColor: "#0A0A0A",
  display: "flex",
  width: "100vw",
  padding: "76px 100px",
  justifyContents: "space-between",
} as CSSProperties;

const infoContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "48px",
} as CSSProperties;

const iconWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "8.29px",
} as CSSProperties;

const infoWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "19px",
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "21.48px",
} as CSSProperties;
