const paginationBuilder = ({ limit, page, count, rowLength }) => {
	const pagination = {
		limit,
		page: page + 1,
		totalResult: count,
		foundResult: rowLength,
	};

	return pagination;
};

module.exports = paginationBuilder;
