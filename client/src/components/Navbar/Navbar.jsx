import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item as={Link} to="/" header>
					Hacksprint
				</Menu.Item>
				<div className="right menu">
					<Menu.Item as={Link} to="/">
						Home
					</Menu.Item>
				</div>
			</Container>
		</Menu>
	);
}
