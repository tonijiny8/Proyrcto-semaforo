import { useState } from "react";
import LightComponent from "./LightComponent";
import "./index.css";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");

	return (
		<div className="semaforoContainer">
			<LightComponent
				color="red"
				isActive={selectedColor === "red"}
				onClick={() => setSelectedColor("red")}
			/>

			<LightComponent
				color="yellow"
				isActive={selectedColor === "yellow"}
				onClick={() => setSelectedColor("yellow")}
			/>

			<LightComponent
				color="green"
				isActive={selectedColor === "green"}
				onClick={() => setSelectedColor("green")}
			/>
		</div>
	);
};

export default Home;