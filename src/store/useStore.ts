import { create } from 'zustand';
import { products } from '../data/mockData';

export interface CartItem {
  productId: string;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  cartTotal: () => number;
  cartCount: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],
  addToCart: (productId, quantity = 1) => set((state) => {
    const existingItem = state.cart.find(item => item.productId === productId);
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
        )
      };
    }
    return { cart: [...state.cart, { productId, quantity }] };
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.productId !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  })),
  clearCart: () => set({ cart: [] }),
  toggleWishlist: (productId) => set((state) => {
    if (state.wishlist.includes(productId)) {
      return { wishlist: state.wishlist.filter(id => id !== productId) };
    }
    return { wishlist: [...state.wishlist, productId] };
  }),
  cartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  },
  cartCount: () => {
    const { cart } = get();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
}));
