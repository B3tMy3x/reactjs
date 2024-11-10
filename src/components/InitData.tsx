import { type FC, useEffect, useMemo } from "react";
import { initData, type User, useSignal } from "@telegram-apps/sdk-react";

export function getUserInfo(user: User) {
  return {
    id: user.id,
    username: user.username,
    photo_url: user.photoUrl,
    last_name: user.lastName,
    first_name: user.firstName,
    is_bot: user.isBot,
    is_premium: user.isPremium,
    language_code: user.languageCode,
    allows_to_write_to_pm: user.allowsWriteToPm,
    added_to_attachment_menu: user.addedToAttachmentMenu,
  };
}

export const InitDataLogger: FC = () => {
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  useEffect(() => {
    if (initDataState && initDataState.user) {
      // Safe to access initDataState now
      console.log("Init Data Raw:", initDataRaw);
      console.log("Init Data State:", initDataState);

      console.log("User Info:", getUserInfo(initDataState.user));

      if (initDataState.receiver) {
        console.log("Receiver Info:", getUserInfo(initDataState.receiver));
      }

      if (initDataState.chat) {
        console.log("Chat Info:", {
          id: initDataState.chat.id,
          title: initDataState.chat.title,
          type: initDataState.chat.type,
          username: initDataState.chat.username,
          photoUrl: initDataState.chat.photoUrl,
        });
      }

      console.log("Auth Date:", initDataState.authDate.toLocaleString());
      console.log("Hash:", initDataState.hash);
      console.log(
        "Can Send After:",
        initData.canSendAfterDate()?.toISOString()
      );
      console.log("Query ID:", initDataState.queryId);
      console.log("Chat Type:", initDataState.chatType);
      console.log("Chat Instance:", initDataState.chatInstance);
      console.log("Start Param:", initDataState.startParam);
    } else {
      console.warn("Init data is missing or user data is unavailable!");
    }
  }, [initDataRaw, initDataState]);

  return null;
};
