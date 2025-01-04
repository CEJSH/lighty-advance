import LightyLetter from "../icons/LightyLetter";
import Lighty from "../icons/lighty";
import { isMobile } from "react-device-detect";

export default function Header() {
  if (isMobile) {
    return (
      <div
        style={{
          display: "flex",
          height: "60px",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "0 20px",
          backgroundColor: "white",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <div
          style={{ display: "flex", gap: "6.63px", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Lighty width="16.51" height="16.51" />
          <LightyLetter width="56.86" height="19.19" />
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "16px",
            lineHeight: "19.09px",
            letterSpacing: "-0.32px",
          }}
        >
          <span style={{ cursor: "pointer" }}>
            <a href="/form">사전 예약</a>
          </span>
          <span style={{ cursor: "pointer" }}>문의</span>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        height: "86px",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "0 80px",
        backgroundColor: "white",
        position: "fixed",
        zIndex: 1,
      }}
    >
      <div
        style={{ display: "flex", gap: "10.61px", cursor: "pointer" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <Lighty width="26.42" height="26.42" />
        <LightyLetter />
      </div>
      <div style={{ display: "flex", gap: "40px" }}>
        <span style={{ cursor: "pointer" }}>
          <a href="/form">사전 예약</a>
        </span>
        <span style={{ cursor: "pointer" }}>문의</span>
      </div>
    </div>
  );
}
