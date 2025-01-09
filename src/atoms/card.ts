import { atom } from "recoil";
import { GatheringResponse } from "../models/gathering";
import { Sticker } from "../components/Decorate";

export const cardStepAtom = atom<number>({
  key: "card/step",
  default: 1,
});

export const cardSelectedGatheringAtom = atom<Partial<GatheringResponse>>({
  key: "card/gathering",
  default: {
    id: "",
    name: "",
    description: "",
    invitation_img_url: "",
  },
});

export const cardFrameAtom = atom<number | null>({
  key: "card/frame",
  default: 0,
});

export const stickersAtom = atom<Sticker[]>({
  key: "card/stickers",
  default: [],
});

export const cardImageUrlAtom = atom<string>({
  key: "card/ImageUrl",
  default: "",
});

export const cardDecorateModalStateAtom = atom<boolean>({
  key: "card/decorate",
  default: false,
});

export const silverDecorateStickersAtom = atom<{ [key: number]: boolean }>({
  key: "card/silver_stickers",
  default: {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  },
});
