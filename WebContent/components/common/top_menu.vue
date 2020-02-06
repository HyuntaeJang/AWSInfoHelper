<template>
<!-- 상단 메뉴 부분 -->
	<nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top shadow-lg">
		<router-link to='/' class="navbar-brand">WWPS iSendYou</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
	    	    data-target="#navMenu">
			<span class="navbar-toggler-icon"></span>        
		</button>
		<div class="collapse navbar-collapse" id="navMenu">
		
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a href="login.html" class="nav-link">Login</a>
				</li>
				<li class="nav-item">
					<a href="join.html" class="nav-link">Sign-Up</a>
				</li>
				<li class="nav-item">
					<a href="index.html" class="nav-link">Logout</a>
				</li>
			</ul>
		</div>
	</nav>
</template>