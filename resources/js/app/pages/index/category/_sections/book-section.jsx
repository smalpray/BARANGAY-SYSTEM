import Button from "@/app/_components/button";
import { setCarts } from "@/app/redux/app-slice";
import { Badge, Card, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function BookSection() {
    const { category } = useSelector((store) => store.categories);
    const { carts } = useSelector((store) => store.app);
    const dispatch = useDispatch();

    function add_to_book(value) {
        const isExist = carts.find((res) => res.id == value.id);
        if (!isExist) {
            dispatch(setCarts([...carts, value]));
            Swal.fire({
                icon: "success",
                title: "Book added to the cart",
                showConfirmButton: false,
                timer: 1500,
            });
        }else{
            Swal.fire({
                icon: "warning",
                title: "The activity already exists",
                showConfirmButton: false,
                timer: 1500,
            });
            
        }
    }
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

                                    <Button
                                        onClick={() => add_to_book(category)}
                                        variant="danger"
                                        className="w-full"
                                    >
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
