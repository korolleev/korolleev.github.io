// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: 123.ggsk
// Generated 2025-11-24T21:16:40

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nO3SQUoEQRAF0X9CByWTWujZBReijEdQUAZmNbQ7hcgiHtSiVx8yOpEkSZIk/ZX7JG9JPpLUBjujrSSfSb6v7zx8Z7R1c6TLex+8M9o6ONLl+2Hozmh9cKSvJI9Dd0ZrY3C0MTjaGBxtDI42Bkcbg6ONwdHG4GhjcLQxONoYHG0MjjYGRxuDo43B0cbgMAaIMUCMAWIMEGOAGAPEGCDGADEGiDFAjAFiDBBjgBgDxBggxgAxBogxQIwBYgwQY8DUL4d6GrqzBaMAGQXIKEBGATIKkFGAjAJkFCCjABkFyChARgEyCpBRgIwCZBQgowAZBcgoQEYBKqPwlFF4yig8ZRSeMgpPGYWnjMJTRuEpo/CUUX'+
			'jKKDxlFJ4yCk8ZhaeMwlNG4Smj8KyDY12+T0N3trAOjvUyeGcL6+ZYr8N3tnBK8nz9a+822JEkSZKk/Icf/safSmuxrh4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   1";
		el.ggDy=-21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 65px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((65px + 0px) / 2) - 21px);';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3dwUrDUBRF0eMXVsq9OKjfLliIUOofVNBJBiIKnbywX9wLCpkduBuSYRNJkiRJmk8luSZ5S/I4cKfXnWXwztQekrwn+Vx/tyRPE+/swuXboUYe67LRzvSO63FGH+u40c5uviM/j/WR5HnSnV0wCpBRgIwCZBQgowAZBcgoQEYBMgqQUYCMAmQUIKMAGQXIKEBGASqj8JRReMooPGUUnjIKTxmFp4zCU0bhKaPwlFF4yig8ZRSeMgpPGYWnjMJTRuEpo/CUUXjKKDxlFJ4yCkv/cajTpDtTa2NwtDE42hgcbQyONgZHG4OjjcHRxuBoY3C0MTjaGBxtDI42Bkcbg6ONwdHG4GhjcLQxONoYHG0MDm'+
			'OAGAPEGCDGADEGiDFAjAFiDBBjgBgDxBggxgAxBogxQIwBYgwQY4AcfjnSiD8NPmy0M73zRkc6G+M+y0ZHWoxx/6vkNcnL+jz7jiRJkiTlP/kClFefUuALbw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   2";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : calc(50% - ((63px + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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'+
			'j9U37iZtkAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 4px;';
		hs+='height : 67px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADyElEQVR4nO3ay0tUURwH8G8mSElaEkYPqSiCoBaalK16mEmgbpqei8qKcFELKZBaBkbQX1CLIlq1KijaiAjtKjcVlRQ9LJDMFAsStMfEge/Aj8t15t5pHndu3w8ccO7cc87vd34z9zUCIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIlLyDgN4DGAcwISnPQNwFkAZ4mMugHPMzZvvONfiULGCOwkgGaBdRnxcCZjz8WIE956T3wOwB8Au01oBXOP7MwDmo/TNB/CTOV1ljjZntwb3+f7bQgdXaT4Nm2fZZ6HZpx6lr97kUz3LPlvMPm6NCqbaTNzwD0UrJZsDLHZDgKJFsiDu29MCYF+I1gygKotYq9g3zF'+
			'wtjPG/KMh+AJMBT45JT3NXMu0h4uxgn2zmmmRxYlkQ9wldBGAjgGlum/a5dJxI02bY7weAdRwvXXP7TJkLizBz2Rg3cLzmOBXE24Z9DgmZLAYwmsUn/TP7huFi+5hmzNgV5DWAiiwuOz9lURC3sPNCzuViexPnghwBsInH/9/cNgJgMEQbNYef3RwvNWZqnnazvdUc5j6HnGuE/X6ZMY+UekHKzVVLjdl+xixU2Dbtcxe82rzv/rZOmPNB2OZiPG3GqjH5uNwiW5AbAC4B2BviudUqLmxPiHYMwAqfsdIVxKlj3zBzudhWBsyljLn3ci2KXhDbngBYU8hAkLkg+bSWOfutRdEK0gdggMdb9/rVLF/ppoA3Zeu5/xK+TuSwIAmO6cYG5woSk4vdq5y5JvmMa4BrEZlzyFZzvO706XM74LH7AvdvMcnmqiCph4PuYSA4'+
			'V5CYXOxenea81hTVk/otbuv36XM94E1ZN/ffztdfMsSyKcAFRsoXjrmNr7sDxuRi9+rnnC5nRLUgbeZysTaP8y8DcNH8BGDbO763NI/z15pDtMs5sgWpMM+puvLwa91OflpTj0TStSnuu4N9c6mLc0x6bnAjVxDnJrePhbwZG0zThs3xP9VGeanZwCe6Vfy71+cRi+v7IYfxjHFclyuiXpADWd6IJQO0PwAeAjiV4QegSt7UPc1jLEnmGvmCtJmrj54ctS4+Sl+eRax17NuVw3imfc4fRS3IAjNxo+e9Dm7/jvj6xhxdrlajWRe3RgUzx/zw08dHEwn+J8ojbnf/KhNXz5njI+ac4Bqkbgy/FiOo8xmO9e7paFwdZY6z5e8Oa0VxEMADAEP8xrwAcIf/EhN3ewDcBfCSuQ9xLbwnehERERERERERERERERERERERER'+
			'ERERERERERERFBifkLcNySbdzinxsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   4";
		el.ggDx=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -16px;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 9px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image   5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2px;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 201px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_5);
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};