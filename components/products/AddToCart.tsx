'use client';
import useCartService from '@/lib/hooks/useCartStore';
import { OrderItem } from '@/lib/models/OrderModels';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();
  const { items, increase, decrease } = useCartService();
  const [existItem, SetExistItem] = useState<OrderItem | undefined>();
  useEffect(() => {
    SetExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);
  const addToCartHandler = () => {
    increase(item);
  };
  return existItem ? (
    <div>
      <button className="btn" type="button" onClick={() => decrease(existItem)}>
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary w-full"
      type="button"
      onClick={addToCartHandler}
    >
      Adicionar ao carrinho
    </button>
  );
}
