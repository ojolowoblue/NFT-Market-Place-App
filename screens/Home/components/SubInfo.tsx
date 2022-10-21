import { View, Text, Image } from "react-native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../../../constants";
import { ImgUrl } from "./Button";

interface ImageCmpProps {
  imgUrl: ImgUrl;
  index: number;
}

interface NFTTitleProps {
  title: string;
  subtitle: string;
  titleSize: number;
  subTitleSize: number;
}
export const NFTTitle = ({
  title,
  subtitle,
  titleSize,
  subTitleSize,
}: NFTTitleProps) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }: { price: number }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }: ImageCmpProps) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 40,
        height: 40,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending In
      </Text>

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 45m
      </Text>
    </View>
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person01, assets.person02, assets.person03].map((asset, idx) => (
        <ImageCmp imgUrl={asset} index={idx} key={`people-${idx}`} />
      ))}
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
