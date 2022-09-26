const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
	numOfCake: 10,
};

const cakeSlice = createSlice({
	name: "cake",
	//we can use shorthand if key & value are the same
	initialState,
	reducers: {
		ordered: state => {
			state.numOfCake--;
		},
		restocked: (state, action) => {
			state.numOfCake += action.payload;
		},
	},
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
