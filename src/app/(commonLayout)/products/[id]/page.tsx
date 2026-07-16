import type { Metadata } from "next";
import ProductDetails from "@/components/productDetails/ProductDetails";
import { getProductById } from "@/helpers/getFilteredProducts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zari.com";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    const canonicalUrl = new URL(`/products/${id}`, siteUrl).toString();

    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  const canonicalUrl = new URL(`/products/${product.id}`, siteUrl).toString();

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      product.name,
      product.category,
      "luxury ethnic wear",
      "fashion house",
      "handcrafted clothing",
    ],
  };
}

const page = () => {
  return <ProductDetails />;
};

export default page;
