<template>
	<div>
		<div class="content d-flex align-items-center text-center">
			<div class="container-sm">
				<div class="row">
					<div class="col-md-6 mb-3">
						<router-link to="/speak">
							<div class="card p-5">
								<h1><i class="fas fa-volume-up"></i> Speaking</h1>
							</div>
						</router-link>
					</div>
					<div class="col-md-6">
						<router-link to="/write">
							<div class="card p-5">
								<h1><i class="fas fa-marker"></i> Writing</h1>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	a{
		text-decoration: none;
		color: #4b4b4b;
	}
	.card{
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
	}
	.card:hover{
		background: #4b4b4b;
		color: #fff;
		box-shadow: 0.5rem 1rem 1rem rgba(0, 0, 0, 0.15) !important;
	}
</style>
