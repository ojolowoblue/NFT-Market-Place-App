import { View, SafeAreaView, FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RectButton } from "../Home/components";
import { COLORS, SHADOWS, SIZES, FONTS } from "../../constants";
import { FocusedStatusBar } from "../Home/components";
import { DetailsBid } from "./components";
import { RootStackParamList } from "../../App";

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
        renderItem={(item) => <DetailsBid />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
