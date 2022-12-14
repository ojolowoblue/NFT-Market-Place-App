import { View, Image } from "react-native";
import { NFT } from "..";
import { COLORS, SHADOWS, SIZES, assets } from "../../../constants";
import { NFTTitle, EthPrice } from "../../../components/SubInfo";
import { useNavigation } from "@react-navigation/native";

import { CircleButton, RectButton } from "../../../components/Buttons";
import { SubInfo } from "../../../components/SubInfo";

type NFTCardProps = {
  data: NFT;
};

export const NFTCard = (props: NFTCardProps) => {
  const { data } = props;

  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />

          <RectButton
            minWidth={120}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};
