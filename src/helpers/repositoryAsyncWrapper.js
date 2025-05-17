const repositoryAsyncWrapper = (repositoryFunction) => {
	return async (...arg) => {
		try {
			return await repositoryFunction(...arg);
		} catch (error) {
			throw error;
		}
	};
};

module.exports = { repositoryAsyncWrapper };
