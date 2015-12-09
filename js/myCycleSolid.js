//»­È¦È¦
			  
			function MyCycleSolid(x,y,rad,color){
			  
				this.sx = x;
				this.sy = y;
				this.rad = rad;
				this.color = color;
				
				this.draw = function(){
					context.beginPath();
					context.globalCompositeOperation = 'lighter';
					var mycolor = context.createRadialGradient(this.sx,this.sy,0,this.sx,this.sy,15);
					mycolor.addColorStop(0, RGB2RGBA(this.color,1));  
					mycolor.addColorStop(0.05, RGB2RGBA(this.color,0.9));  
					mycolor.addColorStop(0.5, RGB2RGBA(this.color,0.6)); 
					mycolor.addColorStop(1, RGB2RGBA(this.color,0.3));
					context.arc(this.sx,this.sy,this.rad, 0, Math.PI*2, true);
					
					
					context.fillStyle = mycolor;
					context.fill();
				}
				this.update = function(index){
					if(this.rad >= 25){
						//myCycles.splice(index,1);
						this.rad = 3;
					}else{
						this.rad ++;
					}
				}
			  
			}
			function createCycleSolid(x,y,color){
				myCycles.push(new MyCycleSolid(x,y,3,color));
			}
			function deleteCycleSolid(index){
				myCycles.splice(index,1);
			}