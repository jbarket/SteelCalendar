!function(e){function t(t){function s(e,t){t.series.pie.show&&(t.grid.show=!1,"auto"==t.series.pie.label.show&&(t.series.pie.label.show=t.legend.show?!1:!0),"auto"==t.series.pie.radius&&(t.series.pie.radius=t.series.pie.label.show?.75:1),t.series.pie.tilt>1&&(t.series.pie.tilt=1),t.series.pie.tilt<0&&(t.series.pie.tilt=0),e.hooks.processDatapoints.push(r),e.hooks.drawOverlay.push(C),e.hooks.draw.push(u))}function a(e,t){var i=e.getOptions();i.series.pie.show&&i.grid.hoverable&&t.unbind("mousemove").mousemove(g),i.series.pie.show&&i.grid.clickable&&t.unbind("click").click(m)}function o(e){for(var t=0;t<e.length;++t){var i=parseFloat(e[t].data[0][1]);i&&(F+=i)}}function r(t){$||($=!0,k=t.getCanvas(),S=e(k).parent(),n=t.getOptions(),t.setData(h(t.getData())))}function l(){var e=t.getPlaceholder(),i=e.width(),s=e.height();E=S.children().filter(".legend").children().width(),D=Math.min(i,s/n.series.pie.tilt)/2,M=s/2+n.series.pie.offset.top,T=i/2,"auto"==n.series.pie.offset.left?n.legend.position.match("w")?T+=E/2:T-=E/2:T+=n.series.pie.offset.left,D>T?T=D:T>i-D&&(T=i-D)}function c(e){for(var t=0;t<e.length;++t)"number"==typeof e[t].data?e[t].data=[[1,e[t].data]]:("undefined"==typeof e[t].data||"undefined"==typeof e[t].data[0])&&("undefined"!=typeof e[t].data&&"undefined"!=typeof e[t].data.label&&(e[t].label=e[t].data.label),e[t].data=[[1,0]]);return e}function h(e){e=c(e),o(e);for(var t=0,i=0,s=n.series.pie.combine.color,a=[],r=0;r<e.length;++r)e[r].data[0][1]=parseFloat(e[r].data[0][1]),e[r].data[0][1]||(e[r].data[0][1]=0),e[r].data[0][1]/F<=n.series.pie.combine.threshold?(t+=e[r].data[0][1],i++,s||(s=e[r].color)):a.push({data:[[1,e[r].data[0][1]]],color:e[r].color,label:e[r].label,angle:e[r].data[0][1]*2*Math.PI/F,percent:100*(e[r].data[0][1]/F)});return i>0&&a.push({data:[[1,t]],color:s,label:n.series.pie.combine.label,angle:t*2*Math.PI/F,percent:100*(t/F)}),a}function u(t,i){function s(){ctx.clearRect(0,0,k.width,k.height),S.children().filter(".pieLabel, .pieLabelBackground").remove()}function a(){var e=5,t=15,i=10,s=.02;if(n.series.pie.radius>1)var a=n.series.pie.radius;else var a=D*n.series.pie.radius;if(!(a>=k.width/2-e||a*n.series.pie.tilt>=k.height/2-t||i>=a)){ctx.save(),ctx.translate(e,t),ctx.globalAlpha=s,ctx.fillStyle="#000",ctx.translate(T,M),ctx.scale(1,n.series.pie.tilt);for(var o=1;i>=o;o++)ctx.beginPath(),ctx.arc(0,0,a,0,2*Math.PI,!1),ctx.fill(),a-=o;ctx.restore()}}function o(){function t(t,i,n){0>=t||(n?ctx.fillStyle=i:(ctx.strokeStyle=i,ctx.lineJoin="round"),ctx.beginPath(),Math.abs(t-2*Math.PI)>1e-9?ctx.moveTo(0,0):e.browser.msie&&(t-=1e-4),ctx.arc(0,0,s,a,a+t,!1),ctx.closePath(),a+=t,n?ctx.fill():ctx.stroke())}function i(){function t(t,i,a){if(0!=t.data[0][1]){var o,r=n.legend.labelFormatter,l=n.series.pie.label.formatter;o=r?r(t.label,t):t.label,l&&(o=l(o,t));var c=(i+t.angle+i)/2,h=T+Math.round(Math.cos(c)*s),u=M+Math.round(Math.sin(c)*s)*n.series.pie.tilt,d='<span class="pieLabel" id="pieLabel'+a+'" style="position:absolute;top:'+u+"px;left:"+h+'px;">'+o+"</span>";S.append(d);var p=S.children("#pieLabel"+a),f=u-p.height()/2,g=h-p.width()/2;if(p.css("top",f),p.css("left",g),(0-f>0||0-g>0||k.height-(f+p.height())<0||k.width-(g+p.width())<0)&&(I=!0),0!=n.series.pie.label.background.opacity){var m=n.series.pie.label.background.color;null==m&&(m=t.color);var v="top:"+f+"px;left:"+g+"px;";e('<div class="pieLabelBackground" style="position:absolute;width:'+p.width()+"px;height:"+p.height()+"px;"+v+"background-color:"+m+';"> </div>').insertBefore(p).css("opacity",n.series.pie.label.background.opacity)}}}var i=startAngle;if(n.series.pie.label.radius>1)var s=n.series.pie.label.radius;else var s=D*n.series.pie.label.radius;for(var a=0;a<r.length;++a)r[a].percent>=100*n.series.pie.label.threshold&&t(r[a],i,a),i+=r[a].angle}if(startAngle=Math.PI*n.series.pie.startAngle,n.series.pie.radius>1)var s=n.series.pie.radius;else var s=D*n.series.pie.radius;ctx.save(),ctx.translate(T,M),ctx.scale(1,n.series.pie.tilt),ctx.save();for(var a=startAngle,o=0;o<r.length;++o)r[o].startAngle=a,t(r[o].angle,r[o].color,!0);ctx.restore(),ctx.save(),ctx.lineWidth=n.series.pie.stroke.width,a=startAngle;for(var o=0;o<r.length;++o)t(r[o].angle,n.series.pie.stroke.color,!1);ctx.restore(),d(ctx),n.series.pie.label.show&&i(),ctx.restore()}if(S){ctx=i,l();for(var r=t.getData(),c=0;I&&A>c;)I=!1,c>0&&(D*=P),c+=1,s(),n.series.pie.tilt<=.8&&a(),o();c>=A&&(s(),S.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>')),t.setSeries&&t.insertLegend&&(t.setSeries(r),t.insertLegend())}}function d(e){n.series.pie.innerRadius>0&&(e.save(),innerRadius=n.series.pie.innerRadius>1?n.series.pie.innerRadius:D*n.series.pie.innerRadius,e.globalCompositeOperation="destination-out",e.beginPath(),e.fillStyle=n.series.pie.stroke.color,e.arc(0,0,innerRadius,0,2*Math.PI,!1),e.fill(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.strokeStyle=n.series.pie.stroke.color,e.arc(0,0,innerRadius,0,2*Math.PI,!1),e.stroke(),e.closePath(),e.restore())}function p(e,t){for(var i=!1,n=-1,s=e.length,a=s-1;++n<s;a=n)(e[n][1]<=t[1]&&t[1]<e[a][1]||e[a][1]<=t[1]&&t[1]<e[n][1])&&t[0]<(e[a][0]-e[n][0])*(t[1]-e[n][1])/(e[a][1]-e[n][1])+e[n][0]&&(i=!i);return i}function f(e,i){for(var n=t.getData(),s=t.getOptions(),a=s.series.pie.radius>1?s.series.pie.radius:D*s.series.pie.radius,o=0;o<n.length;++o){var r=n[o];if(r.pie.show){if(ctx.save(),ctx.beginPath(),ctx.moveTo(0,0),ctx.arc(0,0,a,r.startAngle,r.startAngle+r.angle,!1),ctx.closePath(),x=e-T,y=i-M,ctx.isPointInPath){if(ctx.isPointInPath(e-T,i-M))return ctx.restore(),{datapoint:[r.percent,r.data],dataIndex:0,series:r,seriesIndex:o}}else if(p1X=a*Math.cos(r.startAngle),p1Y=a*Math.sin(r.startAngle),p2X=a*Math.cos(r.startAngle+r.angle/4),p2Y=a*Math.sin(r.startAngle+r.angle/4),p3X=a*Math.cos(r.startAngle+r.angle/2),p3Y=a*Math.sin(r.startAngle+r.angle/2),p4X=a*Math.cos(r.startAngle+r.angle/1.5),p4Y=a*Math.sin(r.startAngle+r.angle/1.5),p5X=a*Math.cos(r.startAngle+r.angle),p5Y=a*Math.sin(r.startAngle+r.angle),arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]],arrPoint=[x,y],p(arrPoly,arrPoint))return ctx.restore(),{datapoint:[r.percent,r.data],dataIndex:0,series:r,seriesIndex:o};ctx.restore()}}return null}function g(e){v("plothover",e)}function m(e){v("plotclick",e)}function v(e,i){var s=t.offset(),a=parseInt(i.pageX-s.left),o=parseInt(i.pageY-s.top),r=f(a,o);if(n.grid.autoHighlight)for(var l=0;l<N.length;++l){var c=N[l];c.auto!=e||r&&c.series==r.series||_(c.series)}r&&b(r.series,e);var h={pageX:i.pageX,pageY:i.pageY};S.trigger(e,[h,r])}function b(e,i){"number"==typeof e&&(e=series[e]);var n=w(e);-1==n?(N.push({series:e,auto:i}),t.triggerRedrawOverlay()):i||(N[n].auto=!1)}function _(e){null==e&&(N=[],t.triggerRedrawOverlay()),"number"==typeof e&&(e=series[e]);var i=w(e);-1!=i&&(N.splice(i,1),t.triggerRedrawOverlay())}function w(e){for(var t=0;t<N.length;++t){var i=N[t];if(i.series==e)return t}return-1}function C(e,t){function n(e){e.angle<0||(t.fillStyle="rgba(255, 255, 255, "+s.series.pie.highlight.opacity+")",t.beginPath(),Math.abs(e.angle-2*Math.PI)>1e-9&&t.moveTo(0,0),t.arc(0,0,a,e.startAngle,e.startAngle+e.angle,!1),t.closePath(),t.fill())}var s=e.getOptions(),a=s.series.pie.radius>1?s.series.pie.radius:D*s.series.pie.radius;for(t.save(),t.translate(T,M),t.scale(1,s.series.pie.tilt),i=0;i<N.length;++i)n(N[i].series);d(t),t.restore()}var k=null,S=null,D=null,T=null,M=null,F=0,I=!0,A=10,P=.95,E=0,$=!1,N=[];t.hooks.processOptions.push(s),t.hooks.bindEvents.push(a)}var n={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,offset:{top:0,left:"auto"},stroke:{color:"#FFF",width:1},label:{show:"auto",formatter:function(e,t){return'<div style="font-size:x-small;text-align:center;padding:2px;color:'+t.color+';">'+e+"<br/>"+Math.round(t.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};e.plot.plugins.push({init:t,options:n,name:"pie",version:"1.0"})}(jQuery);