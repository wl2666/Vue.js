var app = new Vue({
	el: '#app',
	data: {
		description: 'Type any color name, rgb, hex or hsl in the input below and see what happens!',
		bgc: {
			backgroundColor: ''
		}
	},
	methods: {
		displayColor: function (event) {
			this.bgc.backgroundColor = event.target.value;
		}
	}
})
