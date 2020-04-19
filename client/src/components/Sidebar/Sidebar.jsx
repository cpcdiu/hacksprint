import React from "react";

export default function Sidebar() {
	return (
		<div className="ui vertical menu w-100">
			<a href="/" className="item">
				<h4 className="ui header">Promotions</h4>
				<p>Check out our new promotions</p>
			</a>
			<a href="/" className="item">
				<h4 className="ui header">Coupons</h4>
				<p>Check out our collection of coupons</p>
			</a>
			<a href="/" className="item">
				<h4 className="ui header">Rebates</h4>
				<p>Visit our rebate forum for information on claiming rebates</p>
			</a>
			<a href="/" className="item">
				<h4 className="ui header">Contest</h4>
				<p>Visit our rebate forum for information on claiming rebates</p>
			</a>
		</div>
	);
}
