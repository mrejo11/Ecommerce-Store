import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useMemo } from 'react';

export const useCartTotal = () => {
  const cart = useSelector((state: RootState) => state.productModal.cart);
  const total = useMemo(() => {
    return parseFloat(cart.reduce((sum, product) => sum + product.price * (product.quantity ?? 1), 0).toFixed(2));
  }, [cart]);
  return total;
};