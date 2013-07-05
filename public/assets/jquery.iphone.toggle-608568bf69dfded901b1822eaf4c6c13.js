!function(){var e,t=Array.prototype.slice;e=function(){function e(t,i){var n,s,a;this.elem=$(t),s=$.extend({},e.defaults,i);for(n in s)a=s[n],this[n]=a;this.elem.data(this.dataName,this),this.wrapCheckboxWithDivs(),this.attachEvents(),this.disableTextSelection(),this.resizeHandle&&this.optionallyResize("handle"),this.resizeContainer&&this.optionallyResize("container"),this.initialPosition()}return e.prototype.isDisabled=function(){return this.elem.is(":disabled")},e.prototype.wrapCheckboxWithDivs=function(){return this.elem.wrap("<div class='"+this.containerClass+"' />"),this.container=this.elem.parent(),this.offLabel=$("<label class='"+this.labelOffClass+"'>\n  <span>"+this.uncheckedLabel+"</span>\n</label>").appendTo(this.container),this.offSpan=this.offLabel.children("span"),this.onLabel=$("<label class='"+this.labelOnClass+"'>\n  <span>"+this.checkedLabel+"</span>\n</label>").appendTo(this.container),this.onSpan=this.onLabel.children("span"),this.handle=$("<div class='"+this.handleClass+"'>\n  <div class='"+this.handleRightClass+"'>\n    <div class='"+this.handleCenterClass+"' />\n  </div>\n</div>").appendTo(this.container)},e.prototype.disableTextSelection=function(){return $.browser.msie?$([this.handle,this.offLabel,this.onLabel,this.container]).attr("unselectable","on"):void 0},e.prototype._getDimension=function(e,t){return null!=$.fn.actual?e.actual(t):e[t]()},e.prototype.optionallyResize=function(e){var t,i,n;return n=this._getDimension(this.onLabel,"width"),i=this._getDimension(this.offLabel,"width"),"container"===e?(t=n>i?n:i,t+=this._getDimension(this.handle,"width")+this.handleMargin,this.container.css({width:t})):(t=n>i?n:i,this.handle.css({width:t}))},e.prototype.onMouseDown=function(t){var i;return t.preventDefault(),this.isDisabled()?void 0:(i=t.pageX||t.originalEvent.changedTouches[0].pageX,e.currentlyClicking=this.handle,e.dragStartPosition=i,e.handleLeftOffset=parseInt(this.handle.css("left"),10)||0)},e.prototype.onDragMove=function(t,i){var n,s;if(e.currentlyClicking===this.handle)return s=(i+e.handleLeftOffset-e.dragStartPosition)/this.rightSide,0>s&&(s=0),s>1&&(s=1),n=s*this.rightSide,this.handle.css({left:n}),this.onLabel.css({width:n+this.handleRadius}),this.offSpan.css({marginRight:-n}),this.onSpan.css({marginLeft:-(1-s)*this.rightSide})},e.prototype.onDragEnd=function(t,i){var n;if(e.currentlyClicking===this.handle&&!this.isDisabled())return e.dragging?(n=(i-e.dragStartPosition)/this.rightSide,this.elem.prop("checked",n>=.5)):this.elem.prop("checked",!this.elem.prop("checked")),e.currentlyClicking=null,e.dragging=null,this.didChange()},e.prototype.refresh=function(){return this.didChange()},e.prototype.didChange=function(){var e;return"function"==typeof this.onChange&&this.onChange(this.elem,this.elem.prop("checked")),this.isDisabled()?(this.container.addClass(this.disabledClass),!1):(this.container.removeClass(this.disabledClass),e=this.elem.prop("checked")?this.rightSide:0,this.handle.animate({left:e},this.duration),this.onLabel.animate({width:e+this.handleRadius},this.duration),this.offSpan.animate({marginRight:-e},this.duration),this.onSpan.animate({marginLeft:e-this.rightSide},this.duration))},e.prototype.attachEvents=function(){var e,t,i;return i=this,e=function(){return i.onGlobalMove.apply(i,arguments)},t=function(){return i.onGlobalUp.apply(i,arguments),$(document).unbind("mousemove touchmove",e),$(document).unbind("mouseup touchend",t)},this.elem.change(function(){return i.refresh()}),this.container.bind("mousedown touchstart",function(){return i.onMouseDown.apply(i,arguments),$(document).bind("mousemove touchmove",e),$(document).bind("mouseup touchend",t)})},e.prototype.initialPosition=function(){var e,t;return e=this._getDimension(this.container,"width"),this.offLabel.css({width:e-this.containerRadius}),t=this.containerRadius+1,$.browser.msie&&$.browser.version<7&&(t-=3),this.rightSide=e-this._getDimension(this.handle,"width")-t,this.elem.is(":checked")?(this.handle.css({left:this.rightSide}),this.onLabel.css({width:this.rightSide+this.handleRadius}),this.offSpan.css({marginRight:-this.rightSide})):(this.onLabel.css({width:0}),this.onSpan.css({marginLeft:-this.rightSide})),this.isDisabled()?this.container.addClass(this.disabledClass):void 0},e.prototype.onGlobalMove=function(t){var i;if(!this.isDisabled()&&e.currentlyClicking)return t.preventDefault(),i=t.pageX||t.originalEvent.changedTouches[0].pageX,!e.dragging&&Math.abs(e.dragStartPosition-i)>this.dragThreshold&&(e.dragging=!0),this.onDragMove(t,i)},e.prototype.onGlobalUp=function(t){var i;if(e.currentlyClicking)return t.preventDefault(),i=t.pageX||t.originalEvent.changedTouches[0].pageX,this.onDragEnd(t,i),!1},e.defaults={duration:200,checkedLabel:"ON",uncheckedLabel:"OFF",resizeHandle:!0,resizeContainer:!0,disabledClass:"iPhoneCheckDisabled",containerClass:"iPhoneCheckContainer",labelOnClass:"iPhoneCheckLabelOn",labelOffClass:"iPhoneCheckLabelOff",handleClass:"iPhoneCheckHandle",handleCenterClass:"iPhoneCheckHandleCenter",handleRightClass:"iPhoneCheckHandleRight",dragThreshold:5,handleMargin:15,handleRadius:4,containerRadius:5,dataName:"iphoneStyle",onChange:function(){}},e}(),$.iphoneStyle=this.iOSCheckbox=e,$.fn.iphoneStyle=function(){var i,n,s,a,r,o,l,c,h,u,d,p;for(i=1<=arguments.length?t.call(arguments,0):[],s=null!=(h=null!=(u=i[0])?u.dataName:void 0)?h:e.defaults.dataName,d=this.filter(":checkbox"),l=0,c=d.length;c>l;l++)n=d[l],a=$(n).data(s),null!=a?(r=i[0],o=2<=i.length?t.call(i,1):[],null!=(p=a[r])&&p.apply(a,o)):new e(n,i[0]);return this},$.fn.iOSCheckbox=function(e){var t;return null==e&&(e={}),t=$.extend({},e,{resizeHandle:!1,disabledClass:"iOSCheckDisabled",containerClass:"iOSCheckContainer",labelOnClass:"iOSCheckLabelOn",labelOffClass:"iOSCheckLabelOff",handleClass:"iOSCheckHandle",handleCenterClass:"iOSCheckHandleCenter",handleRightClass:"iOSCheckHandleRight",dataName:"iOSCheckbox"}),this.iphoneStyle(t)}}.call(this);