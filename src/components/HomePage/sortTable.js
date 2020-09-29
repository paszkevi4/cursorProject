import React from "react";

 const useSortTableData = (items, item, config = null) => {
	const [sortConfig, setSortConfig] = React.useState(config);

	const sortedItems = React.useMemo(() => {
		let sortableItems = [...items];
		let sortedName = [...item];

		if (sortConfig !== null) {
			sortableItems.sort((a, b) => {
				if(sortConfig.key === "category" ){
					if (sortedName[a[sortConfig.key]]["name"] < sortedName[b[sortConfig.key]]["name"]) {
						return sortConfig.direction === 'ascending' ? -1 : 1;
					}
					if (sortedName[a[sortConfig.key]]["name"] > sortedName[b[sortConfig.key]]["name"]) {
						return sortConfig.direction === 'ascending' ? 1 : -1;
					}
					return 0;
				} else {
					if (a[sortConfig.key] < b[sortConfig.key]) {
						return sortConfig.direction === 'ascending' ? -1 : 1;
					}
					if (a[sortConfig.key] > b[sortConfig.key]) {
						return sortConfig.direction === 'ascending' ? 1 : -1;
					}
					return 0;
				}
			});
		}
		return sortableItems;
	}, [items, item, sortConfig]);

	const requestSort = (key) => {
		let direction = 'ascending';
		if (
				sortConfig &&
				sortConfig.key === key &&
				sortConfig.direction === 'ascending'
		) {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	return { items: sortedItems, requestSort, sortConfig };
};

export default useSortTableData;
