import { View, FlatList } from "react-native";

import { CATEGORIES } from "@/utils/data/products";
import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategoryClick(selectedCategory: string) {
    console.log(selectedCategory);
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1">
      <Header title="Faça seu pedido!" cartQuantityItems={5} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategoryClick(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
