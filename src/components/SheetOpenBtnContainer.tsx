import { useSetRecoilState } from "recoil";
import LightyDeco from "../icons/LightyDeco";
import BottomSheetOpenButton from "./shared/BottomSheetOpenButton";
import { cardDecorateModalStateAtom } from "../atoms/card";
import Tooltip from "./shared/Tooltip";
import { useLocation } from "react-router-dom";

export default function SheetOpenBtnContainer({
  tooltip = false,
}: {
  tooltip?: boolean;
}) {
  const location = useLocation();
  const pathname = location.pathname;
  const getModalStateAtom = () => {
    if (pathname.startsWith("/card")) return cardDecorateModalStateAtom;
    else return cardDecorateModalStateAtom;
  };

  const getModalTooltip = () => {
    if (pathname.startsWith("/home")) return "추억 피드를 등록해보세요!";
    if (pathname.startsWith("/card")) return "👀 스티커로 꾸며보세요!";
  };

  const getIcon = () => {
    if (pathname.startsWith("/card")) return <LightyDeco />;
  };

  const setModalOpen = useSetRecoilState(getModalStateAtom());

  return (
    <>
      <BottomSheetOpenButton
        icon={getIcon()}
        className={styles.plusButton}
        onClick={() => setModalOpen(true)}
      />
      {tooltip ? (
        <div className={styles.toolTipWrapper}>
          <Tooltip
            direction="right"
            closeButton={true}
            title={getModalTooltip()}
          />
        </div>
      ) : null}
    </>
  );
}

const styles = {
  plusButton:
    "absolute bottom-[86px] right-[16px] z-10 shadow-lg transition-transform duration-300 cursor-pointer hover:animate-shrink-grow-less",
  toolTipWrapper: "absolute bottom-[92px] right-[84px] z-14",
};
