import { isMobile } from "react-device-detect";
import Input from "../components/Input";
import { useState } from "react";
import useReservationMutation from "../hooks/useReservationMutation";
import { useAlertContext } from "../contexts/AlertContext";

export default function FormPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { mutate, isError, isSuccess } = useReservationMutation();
  const { open } = useAlertContext();

  if (isError) {
    open({
      title: "카드를 신청하지 못했습니다. 나중에 다시 시도해 주세요",
      onButtonClick: () => {
        window.history.back();
      },
    });
  }
  if (isSuccess) {
    open({
      title: "선예약 신청이 성공적으로 완료되었습니다!",
      onButtonClick: () => {
        window.history.back();
      },
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        paddingTop: isMobile ? "60px" : "86px",
      }}
    >
      <img
        src="/desktop/event.png"
        alt="event/form"
        style={{ width: "100vw", objectFit: "contain" }}
      />
      <div
        style={{
          padding: "118px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          gap: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "58px",
          }}
        >
          <Input
            label="사전 예약할 이름을 입력해 주세요"
            placeholder="이름 입력하기"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            label="사전 예약할 이메일을 입력해 주세요"
            placeholder="이메일 입력하기"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <img
          src="/desktop/button.png"
          alt="button"
          width={234}
          height={69}
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            mutate({ name, email, reservedAt: new Date() });
          }}
        />
      </div>
    </div>
  );
}
