import * as React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  Text,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CircleButton, RectButton } from "../../components/Buttons";
import { FocusedStatusBar } from "../../components/FocusedStatusBar";
import { SubInfo } from "../../components/SubInfo";

import { COLORS, SHADOWS, SIZES, FONTS, assets } from "../../constants";
import { DetailsBid, DetailsDesc } from "./components";
import { RootStackParamList } from "../../App";
import { NFT } from "../Home";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export const Details = ({ route, navigation }: Props) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5 )",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={(item) => <DetailsBid bid={item.item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />

            <SubInfo />

            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export const DetailsHeader = ({
  data,
  navigation,
}: {
  data: NFT;
  navigation: Props["navigation"];
}) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};
