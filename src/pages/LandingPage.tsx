import { isMobile } from "react-device-detect";

export default function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        paddingTop: isMobile ? "60px" : "86px",
      }}
    >
      {isMobile
        ? mobileImages.map((image, idx) => (
            <img
              src={image}
              alt="image"
              style={{
                width: "100vw",
                objectFit: "contain",
                cursor: idx === 0 ? "pointer" : "default",
              }}
              onClick={() => {
                if (idx === 0) {
                  window.location.href = "/form";
                }
              }}
            />
          ))
        : desktopImages.map((image, idx) => (
            <img
              src={image}
              alt="image"
              style={{
                width: "100vw",
                objectFit: "contain",
                cursor: idx === 0 ? "pointer" : "default",
              }}
              onClick={() => {
                if (idx === 0) {
                  window.location.href = "/form";
                }
              }}
            />
          ))}
    </div>
  );
}

const mobileImages = [
  "/mobile/1.png",
  "/mobile/2.png",
  "/mobile/3.png",
  "/mobile/4.png",
  "/mobile/5.png",
];

const desktopImages = [
  "/desktop/1.png",
  "/desktop/2.png",
  "/desktop/3.png",
  "/desktop/4.png",
  "/desktop/5.png",
];
