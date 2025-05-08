import Button from "@/app/_components/button";
import { Badge, Card, Image } from "antd";
import { useSelector } from "react-redux";

const products = [
    {
        id: 1,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    // More products...
];

export default function BookSection() {
    const { category } = useSelector((store) => store.categories);

    console.log("categorycategory", category);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                    Customers also bought
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {category?.activity_categories?.map((category) => {
                        console.log("categorycategory", category);
                        return (
                            <Badge.Ribbon
                                className="shadow-xl"
                                text={`$ ${parseFloat(
                                    category.activity.per_person
                                ).toFixed(2)}`}
                            >
                                <Card
                                    title={category.activity.name}
                                    size="small"
                                >
                                    <Image.PreviewGroup>
                                        <Image
                                            width="100%"
                                            height={288}
                                            className="rounded-lg object-cover"
                                            src={
                                                category.uploads?.[0]?.file ||
                                                "https://via.placeholder.com/300"
                                            }
                                            alt={`${category.activity.name}`}
                                        />
                                        {category.uploads
                                            ?.slice(1)
                                            .map((upload, i) => (
                                                <Image
                                                    key={i}
                                                    style={{ display: "none" }}
                                                    src={upload?.file}
                                                    alt={`${
                                                        category.activity.name
                                                    } ${i + 2}`}
                                                />
                                            ))}
                                    </Image.PreviewGroup>

                                    <Button variant="danger" className="w-full">
                                        BOOK NOW
                                    </Button>
                                </Card>
                            </Badge.Ribbon>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
