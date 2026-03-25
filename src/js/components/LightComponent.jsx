
function LightComponent({ color, isActive, onClick }) {
	return (
		<button onClick={onClick}>
			<div className={`light ${color} ${isActive ? "active" : ""}`}></div>
		</button>
	);
}

export default LightComponent;