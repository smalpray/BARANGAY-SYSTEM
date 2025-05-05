import React, { useState } from "react";
import { Image } from "antd";
import { useSelector } from "react-redux";

export default function ActivitiesTableSection() {
    const { activities } = useSelector((store) => store.activities);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            activity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Is Visible on Website?
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, index) => {
                        console.log("activity", activity);
                        return (
                            <tr
                                key={index}
                                className="bg-white border-b border-gray-200 hover:bg-gray-50"
                            >
                                <td className="p-4">
                                    <Image.PreviewGroup>
                                        <Image
                                            width={50}
                                            src={
                                                activity?.activity_uploads[0]
                                                    ?.file
                                            }
                                            alt={`${activity.alt} 1`}
                                        />
                                        {activity?.activity_uploads.map(
                                            (src, i) => (
                                                <Image
                                                    key={i}
                                                    style={{ display: "none" }}
                                                    src={src?.file}
                                                    alt={`${activity.alt} ${
                                                        i + 2
                                                    }`}
                                                />
                                            )
                                        )}
                                    </Image.PreviewGroup>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    {activity.name}
                                </td>
                                <td className="px-6 py-4">
                                    {activity.product_code}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    {activity.isVisible}
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-red-600 hover:underline"
                                    >
                                        Remove
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
