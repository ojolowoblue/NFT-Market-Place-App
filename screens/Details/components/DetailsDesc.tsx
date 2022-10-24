import * as React from "react";
import { Text, View } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { NFT } from "../../Home";
import { EthPrice, NFTTitle } from "../../Home/components";

export const DetailsDesc = ({ data }: { data: NFT }) => {
  const [text, setText] = React.useState<string>(
    data.description.slice(0, 100)
  );
  const [readMore, setReadMore] = React.useState<boolean>(false);

  const handleReadMore = () => {
    if (!readMore) {
      setText(data.description);
      setReadMore(true);
      return;
    }
    setText(data.description.slice(0, 100));
    setReadMore(false);
  };

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
            }}
          >
            {text}
            {!readMore && "..."}

            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={handleReadMore}
            >
              {readMore ? "Show Less" : "Read More "}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};
