new Vue({
  el: '#exercise',
  data: {
  	effect:{
  		highlight:false,
  		shrink:true
  	},
  	isActive: true,
  	isVisible: false,
  	userClass: "the-effect",
  	one:"",
  	two:"",
  	five:{
  		backgroundColor: 'gray',
  		height: '150px',
  		width: '100px'
  	},
  	float: 'float',
   	progressBar: {
		width: '0px',
      	backgroundColor: 'red'
    }
  },
  computed:{
  	changeProp: function(value){
  		if(this.one){
  			this.two = "";
  			return this.one;
  		}else{
  			this.one = "";
  			return this.two;
  		}
  	}
  },
  methods: {
    startEffect: function() {
    	vm= this;
    	setInterval(function(){
    		vm.effect.highlight = !vm.effect.highlight;
    		vm.effect.shrink = !vm.effect.shrink;
    	},1000)
	},
    startProgress: function() {
	    var vm = this;
	      var width = 0;
	     
	    setInterval(function() {
	      width = width + 10;
	      vm.progressBar.width = width + 'px';
	      }, 500);
    }
  }
});

