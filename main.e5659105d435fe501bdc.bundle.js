webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},cDNt:function(e,t,n){"use strict";function o(e){return c["\u0275vid"](2,[(e()(),c["\u0275ted"](-1,null,["\n"])),(e()(),c["\u0275ted"](-1,null,["\n"])),(e()(),c["\u0275eld"](2,0,null,null,2,"div",[["appDragable",""],["class","card"]],[[4,"background-image",null],[4,"z-index",null]],[[null,"mousedown"],[null,"mouseup"],[null,"locationChange"]],function(e,t,n){var o=!0,r=e.component;if("mousedown"===t){o=!1!==c["\u0275nov"](e,3).onMouseDown(n)&&o}if("mousedown"===t){o=!1!==r.onClick(n)&&o}if("mouseup"===t){o=!1!==r.onClick(n)&&o}if("locationChange"===t){o=!1!==r.onLocationChange(n)&&o}return o},null,null)),c["\u0275did"](3,1196032,null,0,g,[c.ElementRef,c.Renderer2],{containerId:[0,"containerId"],location:[1,"location"]},{locationChange:"locationChange"}),(e()(),c["\u0275ted"](-1,null,["\n\n"])),(e()(),c["\u0275ted"](-1,null,["\n"]))],function(e,t){e(t,3,0,"table",t.component.card.location)},function(e,t){var n=t.component;e(t,2,0,n.currentPicPath,n.card.z)})}function r(e){return c["\u0275vid"](0,[(e()(),c["\u0275eld"](0,0,null,null,1,"app-card",[],null,null,null,o,R)),c["\u0275did"](1,1163264,null,0,C,[E.NgRedux],{card:[0,"card"]},null)],function(e,t){e(t,1,0,t.context.$implicit)},null)}function i(e){return c["\u0275vid"](2,[(e()(),c["\u0275ted"](-1,null,["\n\n"])),(e()(),c["\u0275and"](16777216,null,null,1,null,r)),c["\u0275did"](2,802816,null,0,y.NgForOf,[c.ViewContainerRef,c.TemplateRef,c.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),c["\u0275ted"](-1,null,["\n\n\n"]))],function(e,t){var n=t.component;e(t,2,0,n.deck.cards,n.getKey)},null)}function l(e){return c["\u0275vid"](2,[(e()(),c["\u0275ted"](-1,null,["\n"])),(e()(),c["\u0275eld"](1,0,null,null,1,"button",[],null,[[null,"click"]],function(e,t,n){var o=!0,r=e.component;if("click"===t){o=!1!==r.onClick()&&o}return o},null,null)),(e()(),c["\u0275ted"](-1,null,["Change location"])),(e()(),c["\u0275ted"](-1,null,["\n"])),(e()(),c["\u0275eld"](4,0,null,null,4,"div",[["class","container"],["id","table"]],null,null,null,null,null)),(e()(),c["\u0275ted"](-1,null,["\n\t"])),(e()(),c["\u0275eld"](6,0,null,null,1,"app-deck",[],null,null,null,i,A)),c["\u0275did"](7,114688,null,0,_,[],{deck:[0,"deck"]},null),(e()(),c["\u0275ted"](-1,null,["\n"])),(e()(),c["\u0275ted"](-1,null,["\n"]))],function(e,t){e(t,7,0,t.component.deck)},null)}function u(e){return c["\u0275vid"](2,[(e()(),c["\u0275ted"](-1,null,["\n\n"])),(e()(),c["\u0275eld"](1,0,null,null,2,"app-table",[],null,null,null,l,O)),c["\u0275did"](2,114688,null,0,f,[E.NgRedux],{deck:[0,"deck"]},null),c["\u0275pid"](131072,y.AsyncPipe,[c.ChangeDetectorRef]),(e()(),c["\u0275ted"](-1,null,["\n\n"]))],function(e,t){var n=t.component;e(t,2,0,c["\u0275unv"](t,2,0,c["\u0275nov"](t,3).transform(n.$deck)))},null)}Object.defineProperty(t,"__esModule",{value:!0});var c=n("/oeL"),a=function(){return function(){}}(),s=n("kKZY"),d=function(){function e(e){this._ngRedux=e,this.title="app",this.$deck=e.select(function(e){return e.deck})}return e.ctorParameters=function(){return[{type:s.NgRedux}]},e}(),p=function(){function e(){}return e.ChangeZAction=function(t,n){return{type:e.CARD_CHANGE_Z,value:t,id:n}},e.ChangeIsFaceUpAction=function(t,n){return{type:e.CARD_CHANGE_ISFACEUP,value:t,id:n}},e.ChangeLocationAction=function(t,n){return{type:e.CARD_CHANGE_LOCATION,value:t,id:n}},e}();p.CARD_CHANGE_Z="CARD_CHANGE_Z",p.CARD_CHANGE_ISFACEUP="CARD_CHANGE_ISFACEUP",p.CARD_CHANGE_LOCATION="CARD_CHANGE_LOCATION";var f=function(){function e(e){this._ngRedux=e}return e.prototype.ngOnInit=function(){},e.prototype.onClick=function(){var e=this;this.deck.cards.forEach(function(t){return e._ngRedux.dispatch(p.ChangeLocationAction({x:0,y:0},t.id))})},e.ctorParameters=function(){return[{type:s.NgRedux}]},e}(),m=function(){function e(){}return e.id2Name=function(t){var n=e.suiteId2NameMap.get(t%13==0?t/13|0:1+(t/13|0)),o=t%13;return o>1&&o<11?{numberName:""+o,suite:n}:{numberName:e.numberId2NameMap.get(o),suite:n}},e.cardPicPath=function(t){var n=e.id2Name(t);return"./assets/svg-cards/"+n.numberName+"_of_"+n.suite+".svg"},e}();m.suiteId2NameMap=new Map([[1,"clubs"],[2,"diamonds"],[3,"hearts"],[4,"spades"]]),m.numberId2NameMap=new Map([[1,"ace"],[11,"jack"],[12,"queen"],[0,"king"]]);var h=function(){function e(){}return e.ChangeSelectionAction=function(t){return{type:e.SELECTION_SERVICE_CHANGE_SELECTED_CARD,value:t}},e.ChangeMaxZAction=function(t){return{type:e.SELECTION_SERVICE_CHANGE_MAXZ,value:t}},e}();h.SELECTION_SERVICE_CHANGE_SELECTED_CARD="SELECTION_SERVICE_CHANGE_SELECTED_CARD",h.SELECTION_SERVICE_CHANGE_MAXZ="SELECTION_SERVICE_CHANGE_MAXZ";var C=function(){function e(e){this._ngRedux=e}return Object.defineProperty(e.prototype,"card",{get:function(){return this._card},set:function(e){this._card=e,this.currentPicPath='url("'+(this.card.isFaceUp?m.cardPicPath(this.card.id):"./assets/svg-cards/Red_Back.svg")+'")'},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.currentPicPath='url("'+(this.card.isFaceUp?m.cardPicPath(this.card.id):"/assets/svg-cards/Red_Back.svg")+'")'},e.prototype.ngAfterContentInit=function(){},e.prototype.onClick=function(e){if("mousedown"===e.type)this.clickDuration=(new Date).getTime(),this._ngRedux.dispatch(h.ChangeSelectionAction(this.card));else{if("mouseup"!==e.type)throw new Error("The events we listenning to suppose to be mouseDown and mouseUp only");this.clickDuration=(new Date).getTime()-this.clickDuration}"mouseup"===e.type&&this.clickDuration<100&&this._ngRedux.dispatch(p.ChangeIsFaceUpAction(!this.card.isFaceUp,this.card.id))},e.prototype.onLocationChange=function(e){void 0!==e&&e.x===this.card.location.x&&e.y===this.card.location.y||this._ngRedux.dispatch(p.ChangeLocationAction(e,this.card.id))},e.ctorParameters=function(){return[{type:s.NgRedux}]},e}(),g=function(){function e(e,t){var n=this;this.el=e,this.renderer=t,this.containerId="container",this._location={x:0,y:0},this.locationChange=new c.EventEmitter,this.translateVector={x:0,y:0},this.isMouseDown=!1,this.onMouseUpFnc=function(e){return n.onMouseUp(e)},this.mouseMoveFnc=function(e){return n.onMouseMove(e)}}return Object.defineProperty(e.prototype,"location",{get:function(){return this._location},set:function(e){e.x===this._location.x&&e.y===this._location.y||(this.changeElPositionTo(e),this._location=e,this.locationChange.emit(this._location))},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this.containerElement=this.el.nativeElement.closest("#"+this.containerId),this.containerCoor=this.getCoords(this.containerElement);var e=this.getCoords(this.el.nativeElement);this._location={x:e.left,y:e.top}},e.prototype.onMouseDown=function(e){this.isMouseDown=!0,this.elMouseClickCoor={left:e.pageX,top:e.pageY},this.translateVector=this.getElementTranslateProperty(this.el.nativeElement),this.registerContainersOnMouseMoveEvent()},e.prototype.onMouseMove=function(e){this.isMouseDown&&this.moveElToMousePose(e.pageX,e.pageY)},e.prototype.onMouseUp=function(e){this.unregisterContainersOnMouseMoveEvent(),this.isMouseDown=!1;var t=this.getCoords(this.el.nativeElement);this.location={x:t.left,y:t.top}},e.prototype.moveElToMousePose=function(e,t){var n={x:e-this.elMouseClickCoor.left+this.translateVector.x,y:t-this.elMouseClickCoor.top+this.translateVector.y};this.renderer.setStyle(this.el.nativeElement,"transform","translate("+n.x+"px,"+n.y+"px)")},e.prototype.getCoords=function(e){var t=e.getBoundingClientRect(),n=document.body,o=document.documentElement,r=window.pageYOffset||o.scrollTop||n.scrollTop,i=window.pageXOffset||o.scrollLeft||n.scrollLeft,l=o.clientTop||n.clientTop||0,u=o.clientLeft||n.clientLeft||0;return{top:t.top+r-l,left:t.left+i-u,width:t.width,height:t.height}},e.prototype.isPoseInsideContainer=function(e,t){return e>this.containerCoor.left&&e<this.containerCoor.left+this.containerCoor.width&&t>this.containerCoor.top&&t<this.containerCoor.top+this.containerCoor.height},e.prototype.registerContainersOnMouseMoveEvent=function(){document.addEventListener("mousemove",this.mouseMoveFnc),document.addEventListener("mouseup",this.onMouseUpFnc)},e.prototype.unregisterContainersOnMouseMoveEvent=function(){document.removeEventListener("mousemove",this.mouseMoveFnc),document.removeEventListener("mouseup",this.onMouseUpFnc)},e.prototype.getElementTranslateProperty=function(e){var t=window.getComputedStyle(e).getPropertyValue("transform");if("none"===t)return{x:0,y:0};var n=t.split("(")[1],o=(n=n.split(")")[0]).split(",");return{x:+o[4],y:+o[5]}},e.prototype.changeElPositionTo=function(e){var t=this.getElementTranslateProperty(this.el.nativeElement),n=this.getCoords(this.el.nativeElement),o={x:e.x-n.left+t.x,y:e.y-n.top+t.y};this.renderer.setStyle(this.el.nativeElement,"transform","translate("+o.x+"px,"+o.y+"px)")},e.prototype.ngOnDestroy=function(){this.unregisterContainersOnMouseMoveEvent()},e.ctorParameters=function(){return[{type:c.ElementRef},{type:c.Renderer2}]},e}(),E=n("mkgw"),v=[[".card[_ngcontent-%COMP%]{position:absolute;display:inline-block;width:97px;height:140px;background-color:#fff;background-size:contain;background-repeat:no-repeat;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.15);cursor:move;-webkit-transform:translate(0);transform:translate(0);will-change:transform}"]],R=c["\u0275crt"]({encapsulation:0,styles:v,data:{}}),y=(c["\u0275ccf"]("app-card",C,function(e){return c["\u0275vid"](0,[(e()(),c["\u0275eld"](0,0,null,null,1,"app-card",[],null,null,null,o,R)),c["\u0275did"](1,1163264,null,0,C,[E.NgRedux],null,null)],function(e,t){e(t,1,0)},null)},{card:"card"},{},[]),n("qbdv")),_=function(){function e(){}return e.prototype.ngOnInit=function(){},e.prototype.getKey=function(e,t){return t.id},e.ctorParameters=function(){return[]},e}(),N=[[""]],A=c["\u0275crt"]({encapsulation:0,styles:N,data:{}}),I=(c["\u0275ccf"]("app-deck",_,function(e){return c["\u0275vid"](0,[(e()(),c["\u0275eld"](0,0,null,null,1,"app-deck",[],null,null,null,i,A)),c["\u0275did"](1,114688,null,0,_,[],null,null)],function(e,t){e(t,1,0)},null)},{deck:"deck"},{},[]),[["#table[_ngcontent-%COMP%]{position:fixed;top:calc(50% + 1.5rem);left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}"]]),O=c["\u0275crt"]({encapsulation:0,styles:I,data:{}}),x=(c["\u0275ccf"]("app-table",f,function(e){return c["\u0275vid"](0,[(e()(),c["\u0275eld"](0,0,null,null,1,"app-table",[],null,null,null,l,O)),c["\u0275did"](1,114688,null,0,f,[E.NgRedux],null,null)],function(e,t){e(t,1,0)},null)},{deck:"deck"},{},[]),[[""]]),M=c["\u0275crt"]({encapsulation:0,styles:x,data:{}}),b=c["\u0275ccf"]("app-root",d,function(e){return c["\u0275vid"](0,[(e()(),c["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,u,M)),c["\u0275did"](1,49152,null,0,d,[E.NgRedux],null,null)],null,null)},{},{},[]),T=n("fc+i"),P=n("BkNc"),S=function(){return function(){}}(),D=n("ALdi"),L=n("Ixc3"),k=n("5ySN"),w=n("QD/M"),U=n("AP4T"),F=(n("+DIC"),n("Wi6i"),n("HECM"),function(e,t){return e.ofType(h.SELECTION_SERVICE_CHANGE_SELECTED_CARD).flatMap(function(e){return U.Observable.of(p.ChangeZAction(t.getState().selectionService.maxZ+1,e.value.id),h.ChangeMaxZAction(t.getState().selectionService.maxZ+1))})}),H=n("dgUq"),j=function(){function e(){}return e.prototype.createEpics=function(){return[Object(H.a)(F)]},e}(),Z=n("vLxn"),G=n("jyBq"),V=n("UUc0"),z=n("mwHn"),B=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),X=function(e){function t(t,n,o,r){return e.call(this,{id:t,isFaceUp:n,z:-1===o?t:o,location:r})||this}return B(t,e),t}(Object(z.b)({id:-1,isFaceUp:!1,z:-1,location:{x:0,y:0}})),Y=function(e){function t(t,n){return e.call(this,{id:t,cards:n})||this}return B(t,e),t}(Object(z.b)({id:-1,cards:Object(z.a)()})),q=function(e){function t(t,n){return e.call(this,{selectedCard:t,maxZ:n})||this}return B(t,e),t}(Object(z.b)({selectedCard:null,maxZ:-1})),K=function(e){function t(t,n,o){return e.call(this,{router:t,deck:n,selectionService:o})||this}return B(t,e),t}(Object(z.b)({router:"",deck:null,selectionService:new q})),J=function(e,t){void 0===e&&(e=new X);var n=e;if(null!==e&&e.id===t.id)switch(t.type){case p.CARD_CHANGE_ISFACEUP:n=n.set("isFaceUp",t.value);break;case p.CARD_CHANGE_LOCATION:n=n.set("location",t.value);break;case p.CARD_CHANGE_Z:n=n.set("z",t.value)}return n},$=Object(G.composeReducers)(Object(G.defaultFormReducer)(),function(e,t){void 0===e&&(e=new K);var n=function(e,t){void 0===e&&(e=new Y);var n=e,o=n.cards.update(e.cards.findIndex(function(e){return J(e,t)!==e}),function(e){return J(e,t)});return o!==n.cards&&(n=n.set("cards",o)),n}(e.deck,t),o=Object(Z.b)(e.router,t),r=function(e,t){void 0===e&&(e=new q);var n=e;switch(t.type){case h.SELECTION_SERVICE_CHANGE_SELECTED_CARD:n=n.set("selectedCard",t.value);break;case h.SELECTION_SERVICE_CHANGE_MAXZ:n=n.set("maxZ",t.value)}var o=J(n.selectedCard,t);return n=n.set("selectedCard",o)}(e.selectionService,t);return e.set("deck",n).set("router",o).set("selectionService",r)}),Q=function(){function e(e,t,n,o){this.store=e,e.configureStore($,this.initialAppState(),[Object(V.createLogger)()].concat(o.createEpics()),t.isEnabled()?[t.enhancer()]:[]),n&&n.initialize(),Object(G.provideReduxForms)(e)}return e.prototype.initialAppState=function(){for(var e=[],t=1;t<=52;t++)e.push(new X(t,!1,t));var n=new Y(1,Object(z.a)(e));return new K("",n,new q(null,52))},e.ctorParameters=function(){return[{type:s.NgRedux},{type:s.DevToolsExtension},{type:Z.a},{type:j}]},e}(),W=c["\u0275cmf"](a,[d],function(e){return c["\u0275mod"]([c["\u0275mpd"](512,c.ComponentFactoryResolver,c["\u0275CodegenComponentFactoryResolver"],[[8,[b]],[3,c.ComponentFactoryResolver],c.NgModuleRef]),c["\u0275mpd"](5120,c.LOCALE_ID,c["\u0275m"],[[3,c.LOCALE_ID]]),c["\u0275mpd"](4608,y.NgLocalization,y.NgLocaleLocalization,[c.LOCALE_ID]),c["\u0275mpd"](5120,c.APP_ID,c["\u0275f"],[]),c["\u0275mpd"](5120,c.IterableDiffers,c["\u0275k"],[]),c["\u0275mpd"](5120,c.KeyValueDiffers,c["\u0275l"],[]),c["\u0275mpd"](4608,T.b,T.s,[y.DOCUMENT]),c["\u0275mpd"](6144,c.Sanitizer,null,[T.b]),c["\u0275mpd"](4608,T.e,T.f,[]),c["\u0275mpd"](5120,T.c,function(e,t,n,o){return[new T.k(e),new T.o(t),new T.n(n,o)]},[y.DOCUMENT,y.DOCUMENT,y.DOCUMENT,T.e]),c["\u0275mpd"](4608,T.d,T.d,[T.c,c.NgZone]),c["\u0275mpd"](135680,T.m,T.m,[y.DOCUMENT]),c["\u0275mpd"](4608,T.l,T.l,[T.d,T.m]),c["\u0275mpd"](6144,c.RendererFactory2,null,[T.l]),c["\u0275mpd"](6144,T.p,null,[T.m]),c["\u0275mpd"](4608,c.Testability,c.Testability,[c.NgZone]),c["\u0275mpd"](4608,T.g,T.g,[y.DOCUMENT]),c["\u0275mpd"](4608,T.i,T.i,[y.DOCUMENT]),c["\u0275mpd"](5120,P.ActivatedRoute,P["\u0275f"],[P.Router]),c["\u0275mpd"](4608,P.NoPreloading,P.NoPreloading,[]),c["\u0275mpd"](6144,P.PreloadingStrategy,null,[P.NoPreloading]),c["\u0275mpd"](135680,P.RouterPreloader,P.RouterPreloader,[P.Router,c.NgModuleFactoryLoader,c.Compiler,c.Injector,P.PreloadingStrategy]),c["\u0275mpd"](4608,P.PreloadAllModules,P.PreloadAllModules,[]),c["\u0275mpd"](5120,P.ROUTER_INITIALIZER,P["\u0275i"],[P["\u0275g"]]),c["\u0275mpd"](5120,c.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[P.ROUTER_INITIALIZER]),c["\u0275mpd"](512,y.CommonModule,y.CommonModule,[]),c["\u0275mpd"](1024,c.ErrorHandler,T.q,[]),c["\u0275mpd"](1024,c.NgProbeToken,function(){return[P["\u0275b"]()]},[]),c["\u0275mpd"](512,P["\u0275g"],P["\u0275g"],[c.Injector]),c["\u0275mpd"](1024,c.APP_INITIALIZER,function(e,t,n){return[T.r(e,t),P["\u0275h"](n)]},[[2,T.h],[2,c.NgProbeToken],P["\u0275g"]]),c["\u0275mpd"](512,c.ApplicationInitStatus,c.ApplicationInitStatus,[[2,c.APP_INITIALIZER]]),c["\u0275mpd"](131584,c["\u0275e"],c["\u0275e"],[c.NgZone,c["\u0275Console"],c.Injector,c.ErrorHandler,c.ComponentFactoryResolver,c.ApplicationInitStatus]),c["\u0275mpd"](2048,c.ApplicationRef,null,[c["\u0275e"]]),c["\u0275mpd"](512,c.ApplicationModule,c.ApplicationModule,[c.ApplicationRef]),c["\u0275mpd"](512,T.a,T.a,[[3,T.a]]),c["\u0275mpd"](1024,P["\u0275a"],P["\u0275d"],[[3,P.Router]]),c["\u0275mpd"](512,P.UrlSerializer,P.DefaultUrlSerializer,[]),c["\u0275mpd"](512,P.ChildrenOutletContexts,P.ChildrenOutletContexts,[]),c["\u0275mpd"](256,P.ROUTER_CONFIGURATION,{},[]),c["\u0275mpd"](1024,y.LocationStrategy,P["\u0275c"],[y.PlatformLocation,[2,y.APP_BASE_HREF],P.ROUTER_CONFIGURATION]),c["\u0275mpd"](512,y.Location,y.Location,[y.LocationStrategy]),c["\u0275mpd"](512,c.Compiler,c.Compiler,[]),c["\u0275mpd"](512,c.NgModuleFactoryLoader,c.SystemJsNgModuleLoader,[c.Compiler,[2,c.SystemJsNgModuleLoaderConfig]]),c["\u0275mpd"](1024,P.ROUTES,function(){return[[]]},[]),c["\u0275mpd"](1024,P.Router,P["\u0275e"],[c.ApplicationRef,P.UrlSerializer,P.ChildrenOutletContexts,y.Location,c.Injector,c.NgModuleFactoryLoader,c.Compiler,P.ROUTES,P.ROUTER_CONFIGURATION,[2,P.UrlHandlingStrategy],[2,P.RouteReuseStrategy]]),c["\u0275mpd"](512,P.RouterModule,P.RouterModule,[[2,P["\u0275a"]],[2,P.Router]]),c["\u0275mpd"](512,S,S,[]),c["\u0275mpd"](512,D.NgReduxModule,D.NgReduxModule,[]),c["\u0275mpd"](512,L.NgReduxRouterModule,L.NgReduxRouterModule,[]),c["\u0275mpd"](1024,E.NgRedux,D._ngReduxFactory,[c.NgZone]),c["\u0275mpd"](512,k.DevToolsExtension,k.DevToolsExtension,[c.ApplicationRef,E.NgRedux]),c["\u0275mpd"](512,w.NgReduxRouter,w.NgReduxRouter,[P.Router,E.NgRedux,c.ApplicationRef,y.Location]),c["\u0275mpd"](512,j,j,[]),c["\u0275mpd"](512,Q,Q,[E.NgRedux,k.DevToolsExtension,w.NgReduxRouter,j]),c["\u0275mpd"](512,a,a,[])])});Object(c.enableProdMode)(),Object(T.j)().bootstrapModuleFactory(W).catch(function(e){return console.log(e)})},gFIY:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="gFIY"}},[0]);