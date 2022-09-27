import React from "react";

const Menu = ({ menuItems, show }) => {
	const [isVisible, setIsVisible] = React.useState(false);
	const [style, setStyle] = React.useState("default");

	const handleClickMenu = () => {
		setIsVisible(!isVisible);
		setStyle("moove");
	};

	React.useEffect(() => {
		// setIsVisible(show);
	}, show);

	return (
		<div style={{ width: 100 }}>
			{!isVisible && (
				<div className="menuParent" onClick={handleClickMenu}>
					{menuItems.title}
				</div>
			)}
			{isVisible &&
				menuItems?.subMenus?.map((subMenu) => {
					return (
						<div key={subMenu.id} style={{}}>
							<Menu menuItems={subMenu} />
						</div>
					);
				})}
		</div>
	);
};

export default Menu;
