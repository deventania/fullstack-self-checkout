import { notFound } from "next/navigation";

import { getProductById } from "@/data/get-product-by-id";

import ProductHeader from "./components/product-header";

interface ProdutcsPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProdutcsPage = async ({ params }: ProdutcsPageProps) => {
  const { slug, productId } = await params;
  const product = await getProductById(productId);
  if (!product) {
    return notFound();
  }
  return (
    <div>
      <ProductHeader product={product} />
      {slug}
      {productId}
    </div>
  );
};

export default ProdutcsPage;
