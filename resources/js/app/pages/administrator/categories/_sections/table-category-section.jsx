import { useSelector } from "react-redux";
import UpdateCategorySection from "./update-category-section";

const people = [
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "000000",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
];

export default function TableTableSection() {
    const { categories } = useSelector((store) => store.categories);
    console.log("categories", categories);
    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    <th
                        scope="col"
                        className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                        Category ID
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        Category Name
                    </th>
                    <th
                        scope="col"
                        className="relative py-3.5 pr-4 pl-3 sm:pr-0"
                    >
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
                {categories.map((res, i) => (
                    <tr key={i}>
                        <td className="w-full max-w-0 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                            {res.category_id}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 lg:table-cell">
                            {res.name}
                        </td>
                        <td className="py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-0">
                           <UpdateCategorySection data={res}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
