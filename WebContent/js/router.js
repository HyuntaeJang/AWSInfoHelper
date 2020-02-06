var router = new VueRouter({
	routes :[
		{
			path : '/',
			component : httpVueLoader('components/main/main.vue')
		},
		{
			path : '/board_main',
			component : httpVueLoader('components/board/board_main.vue')
		}, 
		{
			path : '/board_main2',
			component : httpVueLoader('components/board/board_main2.vue')
		}, 
		{
			path : '/board_main3',
			component : httpVueLoader('components/board/board_main3.vue')
		}, 
		{
			path : '/board_main4',
			component : httpVueLoader('components/board/board_main4.vue')
		}
	]
})