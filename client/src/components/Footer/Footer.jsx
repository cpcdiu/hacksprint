import React from "react";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer>
			<div class="container">
				<div class="d-flex justify-content-between align-items-center">
					<div class="copy">&copy; 2020 Hacksprint. All Rights Reserved</div>
					<ul class="footer-nav">
						<li>
							<a href="#">FAQ</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Career</a>
						</li>
						<li>
							<a href="#">Terms & Conditions</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
