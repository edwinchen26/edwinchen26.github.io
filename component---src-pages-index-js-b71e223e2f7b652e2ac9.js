(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{147:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(36),r=(a(149),function(){return n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"information"},n.a.createElement("div",{className:"social_media"},n.a.createElement("i",{className:"fab fa-twitter"}),n.a.createElement("i",{className:"fab fa-instagram"}),n.a.createElement("i",{className:"fab fa-codepen"})),n.a.createElement("h2",null,"Hello there!"),n.a.createElement("p",null,"I'm ",n.a.createElement("span",null,"Edwin Chen")," a front-end web developer & UI designer. Tech enthusiast. Currently working as freelancer."),n.a.createElement("span",{className:"location"},"Living in ",n.a.createElement("i",{class:"fas fa-map-marker-alt"})," Panama City")))}),o=a(150),l=a(1),d=a.n(l),c=a(162),u=a.n(c),f=(a(163),function(e){var t=e.title,a=e.date,i=e.cover;return n.a.createElement("div",{className:"post"},n.a.createElement("div",{className:"picture"},n.a.createElement(u.a,{fluid:i,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:-100}})),n.a.createElement("h4",null,t),n.a.createElement("span",{className:"date"},a))});f.propTypes={title:d.a.string,date:d.a.string,cover:d.a.string};var h=f,p=a(8),m=a.n(p),g=a(37),y=a.n(g),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=a.handleClick.bind(y()(y()(a))),a}m()(t,e);var a=t.prototype;return a.handleClick=function(){alert("boi")},a.render=function(){return n.a.createElement("button",{onClick:this.handleClick},"Hola")},t}(i.Component);function b(e){if(this.hasDeviceMotion="ondevicemotion"in window,this.options={threshold:15,timeout:1e3},"object"==typeof e)for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t]);if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof document.CustomEvent)this.event=new document.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof document.createEvent)return!1;this.event=document.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}b.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},b.prototype.start=function(){this.reset(),this.hasDeviceMotion&&window.addEventListener("devicemotion",this,!1)},b.prototype.stop=function(){this.hasDeviceMotion&&window.removeEventListener("devicemotion",this,!1),this.reset()},b.prototype.devicemotion=function(e){var t,a,i,n=e.accelerationIncludingGravity;if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=n.x,this.lastY=n.y,void(this.lastZ=n.z);t=Math.abs(this.lastX-n.x),a=Math.abs(this.lastY-n.y),i=Math.abs(this.lastZ-n.z),(t>this.options.threshold&&a>this.options.threshold||t>this.options.threshold&&i>this.options.threshold||a>this.options.threshold&&i>this.options.threshold)&&(new Date).getTime()-this.lastTime.getTime()>this.options.timeout&&(window.dispatchEvent(this.event),this.lastTime=new Date),this.lastX=n.x,this.lastY=n.y,this.lastZ=n.z},b.prototype.handleEvent=function(e){if("function"==typeof this[e.type])return this[e.type](e)},new b({threshold:15,timeout:1e3}).start(),window.addEventListener("shake",function(){alert("shake!")},!1);a(164);a.d(t,"listQuery",function(){return w});t.default=function(e){var t=e.data.allMarkdownRemark;return n.a.createElement("div",{className:"container"},n.a.createElement(o.a,null),n.a.createElement(r,null),n.a.createElement(v,null),n.a.createElement("div",{className:"posts"},n.a.createElement("h3",null,"Posts"),n.a.createElement("div",{className:"content"},t.edges.map(function(e,t){var a=e.node;return n.a.createElement(s.Link,{to:a.fields.slug,className:"link"},n.a.createElement(h,{title:a.frontmatter.title,date:a.frontmatter.date,cover:a.frontmatter.image.childImageSharp.fluid}))}))))};var w="1051501764"},149:function(e,t,a){},150:function(e,t,a){"use strict";var i=a(151),n=a(0),s=a.n(n),r=a(1),o=a.n(r),l=a(152),d=a.n(l),c=a(36);function u(e){var t=e.description,a=e.lang,n=e.meta,r=e.keywords,o=e.title;return s.a.createElement(c.StaticQuery,{query:f,render:function(e){var i=t||e.site.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s · "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[],title:"Home"},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Edwin Chen",description:"I'm Edwin Chen a front-end web developer & UI designer. This is my personal blog.",author:"@edwinchen26"}}}}},162:function(e,t,a){"use strict";var i=a(7);t.__esModule=!0,t.default=void 0;var n,s=i(a(8)),r=i(a(37)),o=i(a(76)),l=i(a(77)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},h=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+o+l+t+r+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,s=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},s,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,s=t.fadeIn,o=h(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:h(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,s=void 0===n?{}:n,r=e.imgStyle,o=void 0===r?{}:r,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.placeholderClassName,p=e.fluid,m=e.fixed,v=e.backgroundColor,b=e.Tag,w="boolean"==typeof v?"lightgray":v,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:E,className:h};if(p){var I=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(y,(0,l.default)({src:I.base64},L)),I.tracedSVG&&d.default.createElement(y,(0,l.default)({src:I.tracedSVG},L)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,src:I.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},I))}}))}if(m){var k=m,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},s);return"inherit"===s.display&&delete N.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&d.default.createElement(y,(0,l.default)({src:k.base64},L)),k.tracedSVG&&d.default.createElement(y,(0,l.default)({src:k.tracedSVG},L)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:t,width:k.width,height:k.height,src:k.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(d.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var E=v;t.default=E},163:function(e,t,a){},164:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-b71e223e2f7b652e2ac9.js.map