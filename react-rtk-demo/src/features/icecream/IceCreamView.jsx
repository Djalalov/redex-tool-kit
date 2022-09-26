import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
	const [value, setValue] = React.useState(1);
	const dispatch = useDispatch();
	const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);

	return (
		<div>
			<h2>Number of IceCreams - {numOfIcecreams}</h2>
			<button onClick={() => dispatch(ordered())}>Order IceCream</button>
			<input
				type="number"
				value={value}
				onChange={e => setValue(parseInt(e.target.value))}
			/>
			<button onClick={() => dispatch(restocked(value))}>
				Restock IceCream
			</button>
		</div>
	);
};

export default IceCreamView;
