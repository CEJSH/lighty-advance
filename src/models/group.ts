import { UserInfo } from "./user";

export interface GroupInfo {
  name: string;
  groupImageUrl: string | null;
  description: string;
  groupLeaderId: string;
  friendIds: string[];
}

export interface GroupInfoResponse {
  id: string;
  groupName: string;
  imageUrl: string;
  description: string;
  groupLeader: UserInfo;
  members: UserInfo[];
  gatheringCount: number;
}
