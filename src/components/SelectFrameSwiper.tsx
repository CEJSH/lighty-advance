import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { useRecoilState, useRecoilValue } from "recoil";
import { cardFrameAtom, cardSelectedGatheringAtom } from "../atoms/card";
import Flex from "./shared/Flex";
import Spacing from "./shared/Spacing";

export default function SelectFrameSwiper() {
  const selectedGathering = useRecoilValue(cardSelectedGatheringAtom);
  const [selectedFrame, setSelectedFrame] = useRecoilState(cardFrameAtom);

  const ref = useRef<HTMLDivElement>(null);

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const frames = ["/frame1.jpeg", "/frame2.jpeg", "/frame3.jpeg"];
  const frameNames = ["ribbon", "zebra", "green"];

  const onClickFrame = (id: number) => {
    setSelectedFrame(id);
  };

  return (
    <div className={styles.swiperContainer}>
      <div ref={prevRef} className={styles.prevButton}>
        <img src="/swiper-left.png" alt="prev" width={56} height={56} />
      </div>
      <div ref={nextRef} className={styles.nextButton}>
        <img src="/swiper-right.png" alt="next" width={56} height={56} />
      </div>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        className="custom-swiper w-[324px] h-[451px]"
      >
        {frames.map((frame, idx) => (
          <SwiperSlide
            className={styles.slide}
            key={`frame${idx}`}
            onClick={() => onClickFrame(idx)}
          >
            <Flex direction="column">
              <div
                ref={ref}
                className={clsx(
                  styles.frameWrapper,
                  idx === selectedFrame && "opacity-60"
                )}
              >
                <div className={styles.cardWrapper}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={selectedGathering.invitation_img_url as string}
                      width={230}
                      height={230}
                      style={{
                        flexGrow: 1,
                      }}
                      alt="img"
                      className={styles.image}
                    />
                  </div>
                  <Flex direction="column" className="px-[20px] py-[15px]">
                    <span className={styles.textWrapper}>
                      {selectedGathering.name}
                    </span>
                    <Spacing size={8} />
                    <span className="text-C5">
                      {selectedGathering.description}
                    </span>
                    <Spacing size={16} />
                    <span className={styles.dateWrapper}>
                      {selectedGathering.date}
                    </span>
                  </Flex>
                </div>
                <img
                  src={frame}
                  width={282}
                  height={372}
                  alt="card"
                  className={styles.frame}
                />
              </div>
              <Spacing size={20} />
              <div className={styles.frameName}>{frameNames[idx]}</div>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const styles = {
  prevButton: "absolute top-[167px] left-[32px] z-10 transform cursor-pointer",
  nextButton: "absolute top-[167px] right-[32px] z-10 transform cursor-pointer",
  frameWrapper: "relative p-[22px] h-[390px] shadow-custom rounded-[20px]",
  frame: "absolute inset-0 h-full w-full z-[-1] rounded-[20px]",
  swiperContainer: "relative w-full bg-gray-100",

  frameName:
    "w-fit bg-base-white text-C1 py-[12px] px-[16px] border rounded-[12px] mx-auto",

  slide: "relative w-[324px] !h-[450px] my-auto overflow-hidden cursor-pointer",
  cardContainer:
    "relative px-[33px] py-[40px] flex bg-base-white rounded-[20px] justify-center items-center border border-[#AEAEAE] border-dotted w-[350px] h-[453px]",
  cardWrapper: "flex flex-col bg-base-white rounded-[12px] w-full h-full",

  imageWrapper:
    "w-full h-full rounded-t-[12px] bg-grayscale-50 overflow-hidden",
  image: "object-cover w-full h-full",
  textWrapper: "flex-grow text-T5 ",
  dateWrapper: "text-C5 text-grayscale-500",
};
