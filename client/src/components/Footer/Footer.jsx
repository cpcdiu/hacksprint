import React from "react";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="d-flex justify-content-between align-items-center">
					<div className="copy">
						&copy; 2020 Hacksprint. All Rights Reserved
					</div>
					<ul className="footer-nav">
						<li key="1">
							<a href="/">FAQ</a>
						</li>
						<li key="2">
							<a href="/">About Us</a>
						</li>
						<li key="3">
							<a href="/">Career</a>
						</li>
						<li key="4">
							<a href="/">Terms & Conditions</a>
						</li>
						<li key="5">
							<a href="/">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
