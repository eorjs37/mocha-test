function Video(ele){
	this.videoEle = ele;
}

Video.prototype.onPlay = function(){
	if(this.videoEle){
		return this.videoEle.play()
	}
	throw Error('not exists Video Element')
}

Video.prototype.onPause = function(){
	if(this.videoEle){
		return this.videoEle.pause()
	}
	throw Error('not exists Video Element')
}

Video.prototype.videoAddEventListener = function(eventName,fn){
	if(this.videoEle){
		this.videoEle.addEventListener(eventName,fn)
	}
	throw Error('not exists Video Element')
}
Video.prototype.videoRemoveEventListener = function(){
	if(this.videoEle){
		this.videoEle.removeEventListener(eventName,fn)
	}
	throw Error('not exists Video Element')
}
