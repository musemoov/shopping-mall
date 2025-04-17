'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartIcon() {
  const { totalItems } = useCart();
  
  return (
    <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
      <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-gray-900" />
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 bg-[#FF4500] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  );
} 