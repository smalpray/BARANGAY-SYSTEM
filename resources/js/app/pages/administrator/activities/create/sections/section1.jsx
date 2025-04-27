import Checkbox from "@/app/_components/checkbox";
import Input from "@/app/_components/input";
import Select from "@/app/_components/select";
import TextArea from "@/app/_components/textarea";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Section1() {
    return (
        <div className="w-full flex flex-col gap-5 lg:max-w-2xl">
            <div className="flex gap-3 w-full">
                <Input
                    label="Activity Name"
                    name="name"
                    value=""
                    type="text"
                    required
                />
                <Input
                    label="Product Code"
                    name="product_code"
                    value=""
                    type="text"
                    required
                />
            </div>
            <TextArea
                label="Description"
                name="description"
                value=""
                placeholder="Write a description"
                required
                className=""
            />
            <Select
                label="Category"
                name="category"
                // value=""
                options={[
                    { value: "hello", label: "hello" },
                    { value: "world", label: "world" },
                ]}
                required
            />
            <Checkbox
                label="isVisible?"
                name="isVisible"
                // checked={true}
                required
            />
        </div>
    );
}
