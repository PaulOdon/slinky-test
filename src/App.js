import React from "react";
import Menu from "./components/Menu";
import { menuItems } from "./data/menuItems";

function App() {
	const [isShow, setIsShow] = React.useState(false);

	const handleClickBackButton = () => {
		setIsShow(isShow);
		console.log("on click back button : ", isShow);
	};

	return (
		<div className="container">
			<button onClick={handleClickBackButton}>Back</button>
			<Menu menuItems={menuItems} isShow={isShow} />
		</div>
	);
}

export default App;
