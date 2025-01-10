import { useRecoilState } from "recoil";
import ChooseGatheringToDecorate from "../components/ChooseGatheringToDecorate";
import { cardStepAtom } from "../atoms/card";
import ChooseFrame from "../components/ChooseFrame";
import DecorateWithStickers from "../components/DecorateWithStickers";

export default function Page() {
  const [step, setStep] = useRecoilState<number>(cardStepAtom);
  const handleGatheringChange = () => {
    setStep(step + 1);
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "430px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* <div className={styles.header}>{HeaderReturner()}</div> */}
      {step === 1 && (
        <ChooseGatheringToDecorate onNext={handleGatheringChange} />
      )}
      {step === 2 && <ChooseFrame onNext={handleGatheringChange} />}
      {step === 3 && <DecorateWithStickers onNext={handleGatheringChange} />}
    </div>
  );
}
