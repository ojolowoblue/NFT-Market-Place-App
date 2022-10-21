import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../../constants";

export type ImgUrl = React.ComponentProps<typeof Image>["source"];

interface CircleButtonProps {
  imgUrl: ImgUrl;
  handlePress?: () => void;
}

interface RectButtonProps extends TouchableOpacityProps {
  minWidth: number;
  handlePress?: () => void;
}

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...rest
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        right: 10,
        top: 10,
        ...SHADOWS.light,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  handlePress,
  ...rest
}: RectButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...rest,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.regular,
          fontSize: SIZES.font,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
