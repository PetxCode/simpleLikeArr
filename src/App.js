import React from "react";
import data1 from "./newData.json";
import data from "./data.json";
import { useState, useEffect } from "react";

const App = () => {
	const [myData, setMyData] = useState([]);
	const [dislayMyData, setDisplayMyData] = useState([]);

	const arrangeData = () => {
		data1.map((props) => {
			return (props.likes = props.like.length);
		});
	};

	const sortData = (props) => {
		return (a, b) => {
			if (a[props] > b[props]) {
				return -1;
			} else {
				return 0;
			}
		};
	};

	const displayed = () => {
		setDisplayMyData(data1.sort(sortData("likes")));
	};

	useEffect(() => {
		setDisplayMyData(data1.sort(sortData("likes")));
		arrangeData();
		console.log(data1);
		console.log(dislayMyData);
	}, [dislayMyData]);

	return (
		<div>
			App data
			<div>
				<div>
					{dislayMyData.map((props, i) => (
						<dev
							key={props.i}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							{props.comment} like: {props.likes}
						</dev>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
