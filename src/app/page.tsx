import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/features/HeroBanner';
import ProductGrid from '@/components/layout/ProductGrid';
import FeaturedProducts from '@/components/features/FeaturedProducts';
import GamingBanner from '@/components/features/GamingBanner';
import SubscribeSection from '@/components/features/SubscribeSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <ProductGrid />
      <FeaturedProducts />
      <GamingBanner />
      <SubscribeSection />
    </MainLayout>
  );
}
