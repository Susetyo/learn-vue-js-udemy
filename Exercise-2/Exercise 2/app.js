new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods:{
    	handleOnClick:function(){
    		alert('Alert')
    	},
    	onPageDown:function(){
    		this.value = $event.target.onPageDown;
    	}
    }
});