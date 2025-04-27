import Spacing from "../components/shared/Spacing";
import AppleIcon from "../icons/AppleIcon";
import InstaIcon from "../icons/InstaIcon";
import Lighty from "../icons/lighty";
import LightyLetter from "../icons/LightyLetter";

export default function LandingPage() {
  return (
    <div
      style={{
        maxWidth: "430px",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        paddingTop: "60px",
      }}
    >
      {mobileImages.map((image, idx) => (
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
              window.location.href =
                "https://apps.apple.com/kr/app/%EB%9D%BC%EC%9D%B4%ED%8B%B0-lighty/id6743096554";
            }
          }}
        />
      ))}
      <footer className="flex flex-col bg-grayscale-800 p-8 h-[240px]">
        <div style={{ display: "flex", gap: "5.97px" }}>
          <Lighty width="14.86" height="14.86" color="white" />
          <LightyLetter width="51.17" height="17.28" color="white" />
        </div>
        <Spacing size={32} />
        <div style={{ display: "flex", flexDirection: "column", gap: "19px" }}>
          <span className="text-base-white text-[12px]">서비스 명: 라이티</span>
          <span className="text-base-white text-[12px]">
            문의: myteamlighty@gmail.com
          </span>
        </div>
        <Spacing size={48} />
        <div style={{ display: "flex", gap: "32px" }}>
          <div
            className="pl-[1.98px] pr-[1.77px] cursor-pointer"
            onClick={() => {
              window.location.href =
                "https://apps.apple.com/kr/app/%EB%9D%BC%EC%9D%B4%ED%8B%B0-lighty/id6743096554";
            }}
          >
            <AppleIcon />
          </div>
          <InstaIcon />
        </div>
      </footer>
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
