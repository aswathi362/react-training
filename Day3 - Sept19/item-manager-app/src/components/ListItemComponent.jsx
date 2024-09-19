import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { useSort } from "../hooks/useSort";
import { useSearch } from "../hooks/useSearch";

function ListItemComponent() {
  const { items, dispatch } = useContext(ItemContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("none");

  const handleSort = (column) => {
    if (sortBy !== column) {
      setSortBy(column);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortOrder("none");
    } else {
      setSortOrder("asc");
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const filteredItems = useSearch(items, searchTerm);
  const sortedItems = useSort(sortBy, sortOrder, filteredItems);
  return (
    <div className="mt-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full rounded"
        ></input>
      </div>

      <table className="table-auto w-full">
        <thead> 
          <tr>
            <th className="px-4 py-2 bg-gray-200">ID</th>
            <th
              className="px-4 py-2 cursor-pointer bg-gray-200"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortBy === "name" &&
                (sortOrder === "asc" ? "↑" : sortOrder === "desc" ? "↓" : "")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer bg-gray-200"
              onClick={() => handleSort("description")}
            >
              Description{" "}
              {sortBy === "description" &&
                (sortOrder === "asc" ? "↑" : sortOrder === "desc" ? "↓" : "")}
            </th>
            <th className="px-4 py-2 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-2 py-1 border rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListItemComponent;
