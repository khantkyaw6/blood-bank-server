const mongoose = require("mongoose");

const serviceAsyncWrapper = (serviceFunction) => {
	return async (req) => {
		try {
			return await serviceFunction(req);
		} catch (error) {
			console.log("Error in service wrapper",error)
			throw error;
		}
	};
};

const serviceAsyncWrapperWithTransaction = (serviceFunction) => {
	return async (req) => {
		const session = await mongoose.startSession();
		session.startTransaction();
		try {
			const response = await serviceFunction(req, session);
			await session.commitTransaction();
			session.endSession();
			return response;
		} catch (error) {
			console.log("Error in service transaction wrapper",error)
			await session.abortTransaction();
			session.endSession();
			throw error;
		}
	};
};

module.exports = { serviceAsyncWrapper, serviceAsyncWrapperWithTransaction };
