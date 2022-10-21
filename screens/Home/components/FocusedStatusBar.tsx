import { useIsFocused } from "@react-navigation/native";
import { StatusBar, StatusBarProps } from "react-native";

export const FocusedStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};
