import React, { Component } from "react";
import Navbar from "../../components/Navbar/DashNav";

export default class Jobs extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<section
					class="search-area"
					style={{
						backgroundImage:
							"url(https://hrcdn.net/fcore/assets/svgs/world_map-e1ca0120b6.svg)",
					}}
				>
					<div class="search-shadow"></div>
				</section>
				<section class="py-5 jobs-area">
					<div class="container">
						<div class="row">
							<div class="col-md-4 my-3">
								<div class="row no-gutters job">
									<div class="col-md-4">
										<div
											class="logo"
											style={{
												backgroundImage:
													"url(https://futurestartup.com/wp-content/uploads/2019/10/augmedix.jpg)",
											}}
										></div>
									</div>
									<div class="col-md-8">
										<div class="job-content">
											<h3 class="title">Android Developer</h3>
											<div class="d-flex mt-1">
												<i class="building outline icon"></i>
												<p class="pl-1">Augmedix Limited</p>
											</div>
											<div class="d-flex mt-1">
												<i class="map marker alternate icon"></i>
												<p class="pl-1">Dhaka, Bangladesh</p>
											</div>
											<div class="d-flex mt-1">
												<i class="briefcase icon"></i>
												<p class="pl-1">Fresher</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 my-3">
								<div class="row no-gutters job">
									<div class="col-md-4">
										<div
											class="logo"
											style={{
												backgroundImage: `url(data:image/png;base64,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)`,
											}}
										></div>
									</div>
									<div class="col-md-8">
										<div class="job-content">
											<h3 class="title">Web Developer</h3>
											<div class="d-flex mt-1">
												<i class="building outline icon"></i>
												<p class="pl-1">Brainstation 23</p>
											</div>
											<div class="d-flex mt-1">
												<i class="map marker alternate icon"></i>
												<p class="pl-1">Dhaka, Bangladesh</p>
											</div>
											<div class="d-flex mt-1">
												<i class="briefcase icon"></i>
												<p class="pl-1">Fresher</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
