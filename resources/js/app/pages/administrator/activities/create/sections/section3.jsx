import Input from "@/app/_components/input";
import React from "react";

export default function Section3() {
    return (
        <>
           <div className="flex flex-col w-full gap-3">
           <Input
                label="Price Per Person"
                name="price_per_person"
                value=""
                type="number"
                required
            />
             <Input
                label="Price Per Package"
                name="price_per_package"
                value=""
                type="number"
                required
            />
             <Input
                label="Price Per Public"
                name="price_per_public"
                value=""
                type="number"
                required
            />
             <Input
                label="Price Per Private"
                name="price_per_private"
                value=""
                type="number"
                required
            />
            <Input
                label="Deposit (fix amount or percentage)"
                name="deposit"
                value=""
                type="number"
                required
            />
           </div>
        </>
    );
}
