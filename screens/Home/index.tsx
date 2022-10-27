import * as React from "react";
import { SafeAreaView, View, FlatList } from "react-native";

import { NFTCard, HomeHeader } from "./components";
import { FocusedStatusBar } from "../../components/FocusedStatusBar";
import { COLORS, NFTData } from "../../constants";

export type NFT = typeof NFTData[number];

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <HomeHeader onSearch={setSearchTerm} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )}
            renderItem={({ item }: { item: NFT }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />

          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}
