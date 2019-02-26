
if(!Array.prototype.forEach){
	Array.prototype.forEach =function(callback, thisArg){
		var len=this.length;
		for(var i=0,j;i<len && i<this.length; i++){
			j=this[i];
			callback.call(thisArg,j,i,this);
		}
	};
}
if(!Object.defineProperties && Object.prototype.__defineSetter__){
	Object.defineProperties=function(obj,properties){
		for(var key in properties){
			var descriptor=properties[key];
			if(descriptor.get) obj.__defineGetter__(key,descriptor.get);
			if(descriptor.set) obj.__defineSetter__(key,descriptor.set);
		}
	};
}
if(!Object.keys){
	Object.keys=(function () {
		var hasOwnProperty=Object.prototype.hasOwnProperty,
			hasDontEnumBug=!({toString:null}).propertyIsEnumerable('toString'),
			dontEnums=[
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		],
		dontEnumsLength=dontEnums.length;

		return function(obj){
			var result=[];
			for(var prop in obj){
				if(hasOwnProperty.call(obj,prop)) result.push(prop);
			}
			if(hasDontEnumBug){
				for(var i=0;i<dontEnumsLength;i++){
					if(hasOwnProperty.call(obj,dontEnums[i])) result.push(dontEnums[i]);
				}
			}
			return result;
		}
	})();
}
if(!this.Map){
	Map=function(){
		this.data=[];
	};
	Map.prototype.set=function(key,value){
		var i=this.data.length;
		while(i-->0){
			if(this.data[i][0]==key){
				this.data[i][1]=value;
				return ;
			}
		}
		this.data.push(new Array(key,value));
	};
	Map.prototype.get=function(key){
		var i=this.data.length;
		while(i-->0){
			if(this.data[i][0]==key){
				return this.data[i][1];
			}
		}
	};
}