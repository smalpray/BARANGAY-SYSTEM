import React, { useState } from "react";
import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import {
    CheckCircleIcon,
    FaceFrownIcon,
    FaceSmileIcon,
    FireIcon,
    HandThumbUpIcon,
    HeartIcon,
    PaperClipIcon,
    XMarkIcon as XMarkIconMini,
} from "@heroicons/react/24/outline";
import TextArea from "@/app/_components/textarea";
import Button from "@/app/_components/button";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const moods = [
    {
        name: "Excited",
        value: "excited",
        icon: FireIcon,
        iconColor: "text-white",
        bgColor: "bg-red-500",
    },
    {
        name: "Loved",
        value: "loved",
        icon: HeartIcon,
        iconColor: "text-white",
        bgColor: "bg-pink-400",
    },
    {
        name: "Happy",
        value: "happy",
        icon: FaceSmileIcon,
        iconColor: "text-white",
        bgColor: "bg-green-400",
    },
    {
        name: "Sad",
        value: "sad",
        icon: FaceFrownIcon,
        iconColor: "text-white",
        bgColor: "bg-yellow-400",
    },
    {
        name: "Thumbsy",
        value: "thumbsy",
        icon: HandThumbUpIcon,
        iconColor: "text-white",
        bgColor: "bg-blue-500",
    },
    {
        name: "I feel nothing",
        value: null,
        icon: XMarkIconMini,
        iconColor: "text-gray-400",
        bgColor: "bg-transparent",
    },
];

export default function AddCommentSection() {
    const [selected, setSelected] = useState(moods[5]);
    return (
        <>
            <div className="mt-6 flex gap-x-3">
                <form action="#" className="relative flex-auto">
                    <div className="rounded-lg pb-12 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <TextArea rows={1} name="notes" label="Notes" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 ">
                        <Button type="submit" className="w-full">
                            Comment
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
