(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{148:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(36),s=(a(163),function(){return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"macbook"}),r.a.createElement("div",{className:"ipad"}),r.a.createElement("div",{className:"pencil"})),r.a.createElement("div",{className:"information"},r.a.createElement("h2",null,"Hello there!"),r.a.createElement("p",null,"I'm ",r.a.createElement("span",null,"Edwin Chen")," a front-end web developer & UI designer. Tech enthusiast. Currently working as freelancer.")))}),l=a(150),o=a(1),d=a.n(o),c=a(164),u=a.n(c),f=(a(165),function(e){var t=e.title,a=e.date,i=e.cover;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"picture"},r.a.createElement(u.a,{fluid:i,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:-100}})),r.a.createElement("h4",null,t),r.a.createElement("span",{className:"date"},a))});f.propTypes={title:d.a.string,date:d.a.string,cover:d.a.string};var p=f,m=a(149);a(166);a.d(t,"listQuery",function(){return h});t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement("div",{className:"container"},r.a.createElement(l.a,null),r.a.createElement(s,null),r.a.createElement("div",{className:"posts"},r.a.createElement("h3",null,"Posts"),r.a.createElement("div",{className:"content"},t.edges.map(function(e,t){var a=e.node;return r.a.createElement(n.Link,{to:a.fields.slug,className:"link"},r.a.createElement(p,{title:a.frontmatter.title,date:a.frontmatter.date,cover:a.frontmatter.image.childImageSharp.fluid}))}))),r.a.createElement(m.a,null))};var h="1051501764"},149:function(e,t,a){"use strict";var i=a(36),r=a(0),n=a.n(r);t.a=function(){return n.a.createElement("div",{style:{width:"100%",maxWidth:"1024px",margin:"20px auto",textAlign:"center",fontSize:"0.85rem",color:"#979797"}},n.a.createElement("div",{className:"social_media"},n.a.createElement("i",{className:"fab fa-twitter"}),n.a.createElement("i",{className:"fab fa-codepen"})),n.a.createElement(i.Link,{to:"/",replace:!0,style:{background:"#FFCA71",color:"#ffffff",textDecoration:"none",padding:"0 5px",margin:"0 5px"}},"Edwin Chen"),n.a.createElement("span",null,"— Powered by GatsbyJS"))}},150:function(e,t,a){"use strict";var i=a(151),r=a(0),n=a.n(r),s=a(1),l=a.n(s),o=a(152),d=a.n(o),c=a(36);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,l=e.title;return n.a.createElement(c.StaticQuery,{query:f,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s · "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:e.site.siteMetadata.title},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:e.site.siteMetadata.title},{name:"twitter:description",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[],title:"Home"},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var f="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Edwin Chen",description:"I'm Edwin Chen a front-end web developer & UI designer. This is my personal blog.",author:"@edwinchen26"}}}}},163:function(e,t,a){},164:function(e,t,a){"use strict";var i=a(7);t.__esModule=!0,t.default=void 0;var r,n=i(a(8)),s=i(a(37)),l=i(a(76)),o=i(a(77)),d=i(a(0)),c=i(a(1)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:o,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,w="boolean"==typeof b?"lightgray":b,E=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),L={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(m){var I=m;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(y,(0,o.default)({src:I.base64},L)),I.tracedSVG&&d.default.createElement(y,(0,o.default)({src:I.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,src:I.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},I))}}))}if(h){var N=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},N.base64&&d.default.createElement(y,(0,o.default)({src:N.base64},L)),N.tracedSVG&&d.default.createElement(y,(0,o.default)({src:N.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),d.default.createElement(y,{alt:a,title:t,width:N.width,height:N.height,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:N.width,height:N.height},N))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var E=b;t.default=E},165:function(e,t,a){},166:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-3b6c9174c6f06e64dcca.js.map