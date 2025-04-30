import Button from "@/app/_components/button";
import Checkbox from "@/app/_components/checkbox";
import Input from "@/app/_components/input";
import Select from "@/app/_components/select";
import TextArea from "@/app/_components/textarea";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Upload } from "antd";
import React from "react";

export default function Section1() {
    const fileList = [
        // {
        //   uid: '0',
        //   name: 'xxx.png',
        //   status: 'uploading',
        //   percent: 33,
        // },
        // {
        //   uid: '-1',
        //   name: 'yyy.png',
        //   status: 'done',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
        {
            uid: "-2",
            name: "zzz.png",
            status: "error",
        },
    ];
    return (
        <div className="w-full flex flex-col gap-5">
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

            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture"
                defaultFileList={fileList}
            >
                {/* <Button type="primary" icon={<UploadOutlined />}>
      Upload
    </Button> */}
                <Button
                    className="border-red-500 border text-red-500"
                    variant="outline"
                >
                    UPLOAD VIDEO AND PICTURE
                </Button>
            </Upload>

            <TextArea
                label="Additional Description"
                name="additional_description"
                value=""
                placeholder="Write an additional description"
                required
                className=""
            />
        </div>
    );
}
