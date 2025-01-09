"use client";
import React from "react";
import Konva from "konva";
import downloadURI from "../utils/downloadURI";
import Flex from "./shared/Flex";
import Spacing from "./shared/Spacing";
import Button from "./shared/Button";
import DecoratingSection from "./DecoratingSection";

export interface Sticker {
  id: number;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function Decorate() {
  const stageRef = React.useRef<Konva.Stage | null>(null);

  const handleExport = () => {
    if (!stageRef.current) return;
    const scale = 4;
    const uri = stageRef.current.toDataURL({ pixelRatio: scale });
    downloadURI(uri, "card.png");
  };

  return (
    <div className="flex justify-center">
      <Flex direction="column">
        <DecoratingSection stageRef={stageRef} />
        <Spacing size={16} />
        <Flex justify="center">
          <Button className={styles.button} onClick={handleExport}>
            사진 저장하기
          </Button>
        </Flex>
        <Spacing size={100} />
      </Flex>
    </div>
  );
}

const styles = {
  button:
    "w-[120px] px-[12px] py-[6px] rounded-[12px] border border-[#D8D8D8] text-[#D8D8D8] bg-base-white text-B4 cursor-pointer",
};
