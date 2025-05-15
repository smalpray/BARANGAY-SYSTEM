import Checkbox from "@/app/_components/checkbox";
import Input from "@/app/_components/input";
import TextArea from "@/app/_components/textarea";
import Wysiwyg from "@/app/_components/wysiwyg";
import { CurrencyDollarIcon, PercentBadgeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Controller } from "react-hook-form";

export default function Section3({ register, errors, control }) {
    return (
        <>
            <div className="flex flex-col w-full gap-3">
                <Input
                    label="Price Per Person"
                    name="per_person"
                    register={{
                        ...register("per_person", {
                            required: "Price Per Person is required",
                        }),
                    }}
                   
                    iconLeft={<div className="w-6 h-6 font-black text-gray-500" >&nbsp;$</div>}
                    type="number"
                    error={errors.per_person?.message}
                />
                <Input
                    label="Price Per Package"
                    name="per_package"
                   
                    iconLeft={<div className="w-6 h-6 font-black text-gray-500" >&nbsp;$</div>}
                    register={{
                        ...register("per_package", {
                            required: "Price Per Package is required",
                        }),
                    }}
                    type="number"
                    error={errors.per_package?.message}
                />
                <Input
                    label="Price Per Public"
                    name="per_public"
                    iconLeft={<div className="w-6 h-6 font-black text-gray-500" >&nbsp;$</div>}
                    register={{
                        ...register("per_public", {
                            required: "Price Per Public is required",
                        }),
                    }}
                    type="number"
                    error={errors.per_public?.message}
                />
                <Input
                    label="Price Per Private"
                    name="per_private"
                   
                    iconLeft={<div className="w-6 h-6 font-black text-gray-500" >&nbsp;$</div>}
                    register={{
                        ...register("per_private", {
                            required: "Price Per Private is required",
                        }),
                    }}
                    type="number"
                    error={errors.per_private?.message}
                />
                <Input
                    label="Deposit (fix amount or percentage)"
                    name="deposit"
                   
                    iconLeft={<div className="w-6 h-6 font-black text-gray-500" >&nbsp;$</div>}
                    register={{
                        ...register("deposit", {
                            required: "Deposit is required",
                        }),
                    }}
                    type="number"
                    error={errors.deposit?.message}
                />

                <Checkbox
                    label="With Tax?"
                    name="isTax"
                    register={{
                        ...register("isTax"),
                    }}
                    // checked={true}
                    error={errors.isTax?.message}
                />

                {/* <TextArea
                    label="Tax Description"
                    name="tax_description"
                    register={{
                        ...register("tax_description", {
                            required: "Tax Description is required",
                        }),
                    }}
                    placeholder="Write tax description "
                    className=""
                    error={errors.tax_description?.message}
                /> */}
                <Controller
                    name="tax_description"
                    control={control}
                    rules={{ required: "Tax Description is required" }}
                    render={({ field, fieldState }) => (
                        <Wysiwyg
                            label="Additional Description"
                            name="tax_description"
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                        />
                    )}
                />
                <Input
                    label="Percentage of Tax Price"
                    name="tax_price"
                    register={{
                        ...register("tax_price", {
                            required: "Tax Price is required",
                        }),
                    }}
                    
                    iconLeft={<div className="w-6 h-6 font-black text-gray-500" >&nbsp;%</div>}
                    type="number"
                    error={errors.tax_price?.message}
                />
            </div>
        </>
    );
}
