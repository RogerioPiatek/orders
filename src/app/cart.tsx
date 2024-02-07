import { Text, View } from "react-native";

import { useCartStore } from "@/stores/cart-store";

import { formatCurrency } from "@/utils/functions/format-currency";

import { Header } from "@/components/header";
import { Product } from "@/components/product";

export default function Cart() {
  const cartStore = useCartStore();

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  );

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      {cartStore.products.length > 0 ? (
        <View className="p-5 flex-1">
          {cartStore.products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </View>
      ) : (
        <Text className="font-body text-slate-400 text-center my-8">
          Seu carrinho está vazio!
        </Text>
      )}

      <View className="flex-row gap-2 items-center mt-5 mb-4">
        <Text className="text-white text-xl font-subtitle">Total:</Text>

        <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
      </View>
    </View>
  );
}
