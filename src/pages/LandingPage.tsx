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
