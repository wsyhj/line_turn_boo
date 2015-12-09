	
		//发射函数
		//画一个拖尾巴的线
 		//该线存在起点和终点，长度，半径大小，颜色
		function MyLine(arr,rad,len,color){
			this.startIndex = 1;
			this.arrLen = arr.length;
			if(this.arrLen >= 2){
				sx = arr[0][0];
				sy = arr[0][1];
				ex = arr[1][0];
				ey = arr[1][1];
			}
			this.sx = sx;
			this.sy = sy;
			this.ex = ex;
			this.ey = ey;
			this.rad = rad;
			this.len = len;
			this.color = color;
			this.tx = this.sx;
			this.ty = this.sy;
			this.tlen = 4;
			//判断大小
			if(sx < ex){
				this.xFlage = 1;
			}else if(sx > ex){
				this.xFlage = 0;
			}else{
				this.xFlage = 2;
			}
			if(sy < ey){
				this.yFlage = 1;
			}else if(sy > ey){
				this.yFlage = 0;
			}else{
				this.yFlage = 2;
			}
			//角度
		  	this.angle = Math.atan2( ey - sy, ex - sx );
			//开始画
			this.draw = function(){
				
				context.beginPath();
				context.fillStyle = this.color;
				context.globalAlpha = 1;
				for(var i = 0; i < this.tlen ; i+=0.5 ){
					context.arc(this.tx,this.ty,((this.tlen - i)/this.tlen) * this.rad, 0, Math.PI*2, true);
					
					this.tx -= Math.cos(this.angle) * this.tlen * 0.02;
					this.ty -= Math.sin(this.angle) * this.tlen * 0.02;
					
				}
				context.closePath();
				context.fill();
			}
			
			this.update = function(index){
				
				
				var tXF = 0;
				var tYF = 0;
				if(this.sx < this.ex){
					tXF = 1;
				}else if(this.sx > this.ex){
					tXF = 0;
				}else{
					tXF = 2;
				}
				if(this.sy < this.ey){
					tYF = 1;
				}else if(this.sy > this.ey){
					tYF = 0;
				}else{
					tYF = 2;
				}
				if((this.xFlage == tXF) && (this.yFlage == tYF)){
					this.sx += Math.cos(this.angle) * this.len * 0.135;
					this.sy += Math.sin(this.angle) * this.len * 0.135;
					if(this.tlen < this.len){
						this.tlen += 4;
					}else{
						this.tlen = this.len;
					}
				}else{
					if(this.tlen > 4){
						this.sx = this.ex;
						this.sy = this.ey;
						this.tlen -= 4;
					}else{
						
						if((this.arrLen > 2) && ((this.startIndex+1) < this.arrLen)){
							this.startIndex ++;	
							sx = arr[this.startIndex - 1][0];
							sy = arr[this.startIndex - 1][1];
							ex = arr[this.startIndex][0];
							ey = arr[this.startIndex][1];
							
							
						}else{
							createParticles(this.ex,this.ey,this.color);
							sx = arr[0][0];
							sy = arr[0][1];
							ex = arr[1][0];
							ey = arr[1][1];
							this.startIndex = 1;
						}
						this.sx = sx;
						this.sy = sy;
						this.ex = ex;
						this.ey = ey;
						this.tlen = 4;
						
						//角度
					  	this.angle = Math.atan2( ey - sy, ex - sx );
					  //判断大小
						if(sx < ex){
							this.xFlage = 1;
						}else if(sx > ex){
							this.xFlage = 0;
						}else{
							this.xFlage = 2;
						}
						if(sy < ey){
							this.yFlage = 1;
						}else if(sy > ey){
							this.yFlage = 0;
						}else{
							this.yFlage = 2;
						}
					}
					
					
					
					
					
				}
				
				
				
				this.tx = this.sx;
				this.ty = this.sy;
			}
		  }
		  function createLine(arr,rad,len,color){
				myLines.push(new MyLine(arr,rad,len,color));
		  }
		   function deleteLine(index){
				myLines.splice(index,1);
		  }