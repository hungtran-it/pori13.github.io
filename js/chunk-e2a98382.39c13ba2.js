(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e2a98382","chunk-7084030e"],{"006f":function(t,e,a){},"16f7":function(t,e,a){},"23c8":function(t,e,a){t.exports=a.p+"img/Profile_Pori.954d4399.png"},2687:function(t,e,a){},4358:function(t,e,a){},"77be":function(t,e,a){"use strict";a.r(e);var o=a("5530"),n=a("1da1"),i=(a("d81d"),a("7db0"),a("d3b7"),a("caad"),a("96cf"),a("3881")),r=(a("849c"),a("2877")),s=Object(r.a)({},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"no-activity-component"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("7854"),expression:"require(`@/assets/images/NoActivity.png`)"}],attrs:{alt:"no activity"}}),e("div",[t._v(t._s(t.$t("ACTIVITY_NO_ACTIVITIES_YET")))])])},[],!1,null,"dd81e704",null).exports,c=a("b7a6"),l=a("cf45"),u=a("24ab"),d=a("901e"),m=a.n(d),p=a("5a50"),f=p.x.app.token,v={current:1,pageSize:10,total:0},g={components:{Paging:i.a,NoActivity:s,contentLoading:c.default},mixins:[u.a],data:function(){return{metamask:p.A,symbolInGame:f.inGameSymbol,loadingStart:!0,data:[],pagination:v}},computed:{},created:function(){this.initData()},watch:{myAddress:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.onChangePage(1);case 1:case"end":return t.stop()}},t)}))()}},methods:{onChangePage:function(t){this.pagination=Object(l.b)(Object(o.a)(Object(o.a)({},this.pagination),{},{current:t})),this.initData()},onChangePageSize:function(t){this.pagination=Object(o.a)(Object(o.a)({},v),{},{pageSize:t}),this.onChangePage(1)},initData:function(){var s=this;return Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s.loadingStart=!0,t.prev=1,a={pageIndex:s.pagination.current-1,pageSize:s.pagination.pageSize,sortBy:"timestamp",sortOrder:"desc"},t.next=6,s.getActivitiesItemsBE(a);case 6:e=t.sent,r=function(t){return t?s.$options.filters.truncate(t,10,0,7,"Porian "):""},a=e.items.map(function(e){var t=(null==e?void 0:e.event)||"";"sold"==t&&(t=s.myAddress.toLowerCase()===e.sellerAddress.toLowerCase()?"sold":"buy");var a=(null==e||null===(n=e.itemType)||void 0===n?void 0:n.id)||1,i=s.$root.list_items.find(function(t){return t.tokenId==a}),n=s.$root.list_items.find(function(t){return t.tokenId==e.seedId});return["brew","mix"].includes(t)&&8==i.tokenId&&(t+="_an"),Object(o.a)(Object(o.a)({},e),{},{date:s.$moment.unix(e.timestamp).format(" DD/MM/YYYY - HH:mm"),status:t,itemType:i,itemNeed:n,unitPrice:m()(e.unitPrice).div(Math.pow(10,f.inGameDecimal)).toNumber(),tx:(null==e?void 0:e.txid)||(null==e?void 0:e.transaction)||"",buyerName:e.buyerName||r(e.buyerAddress),sellerName:e.sellerName||r(e.sellerAddress)})}),s.data=Object(l.b)(a),s.pagination=Object(l.b)(Object(o.a)(Object(o.a)({},s.pagination),{},{total:e.totalItems})),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),s.data=[];case 18:s.loadingStart=!1;case 19:case"end":return t.stop()}},t,null,[[1,14]])}))()}}},b=Object(r.a)(g,function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"wp-activities-pori"},[a.loadingStart?i("div",{staticClass:"loading-container"},[i("contentLoading")],1):a.data&&a.data.length?i("div",[i("div",{staticClass:"wp-list"},a._l(a.data,function(t,e){return i("div",{key:e,staticClass:"active-item"},[i("div",{staticClass:"active-item-left"},[i("div",{staticClass:"active-item__item-time"},[i("div",{staticClass:"time"},[a._v(a._s(t.date))]),i("div",{staticClass:"line"})]),i("div",{staticClass:"active-item__item-text"},[i("div",{staticClass:"status",domProps:{innerHTML:a._s(a.$t("ACTIVITY_TEXT_ITEMS_STATUS_"+t.status.toUpperCase(),{nameItems:t.itemType.nameSort,nameItemsNeed:t.itemNeed?t.itemNeed.nameSort:"",amount:t.amount||0,buyerName:t.buyerName,sellerName:t.sellerName,unitPrice:a.$options.filters.toCurrency(t.unitPrice||0)+" "+a.symbolInGame}))}})])]),i("div",{staticClass:"active-item-right"},[i("div",{staticClass:"tx"},[i("a",{attrs:{href:a.metamask.blockExplorerUrls[0]+"tx/"+t.tx,target:"_blank"}},[a._v(" "+a._s(t.tx)+" ")])])])])}),0),i("div",{staticClass:"wp-paging"},[i("Paging",{attrs:{pagination:a.pagination},on:{onChangePage:a.onChangePage,onChangePageSize:a.onChangePageSize}})],1)]):i("NoActivity")],1)},[],!1,null,null,null).exports,d=(a("b0c0"),a("2f62")),_=p.x.app.token,h={current:1,pageSize:10,total:0},g={components:{Paging:i.a,NoActivity:s,contentLoading:c.default},mixins:[u.a],data:function(){return{metamask:p.A,symbolInGame:_.inGameSymbol,loadingStart:!0,data:[],pagination:h}},computed:Object(o.a)({},Object(d.e)({publicAddress:function(t){var e,a;return(null===(t=t.wallet)||void 0===t||null===(e=t.auth)||void 0===e||null===(a=e.profile)||void 0===a?void 0:a.publicAddress)||{}}})),created:function(){this.initData()},watch:{publicAddress:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.onChangePage(1);case 1:case"end":return t.stop()}},t)}))()}},methods:{onChangePage:function(t){this.pagination=Object(l.b)(Object(o.a)(Object(o.a)({},this.pagination),{},{current:t})),this.initData()},onChangePageSize:function(t){this.pagination=Object(o.a)(Object(o.a)({},h),{},{pageSize:t}),this.onChangePage(1)},initData:function(){var i=this;return Object(n.a)(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i.loadingStart=!0,t.prev=1,a={pageIndex:i.pagination.current-1,pageSize:i.pagination.pageSize,sortBy:"timestamp",sortOrder:"desc"},t.next=6,i.getActivitiesPoriBE(a);case 6:e=t.sent,a=e.items.map(function(t){var e=i._getStatusActivity(t),a=i._getPriceActivity(Object(o.a)(Object(o.a)({},t),e));if(e)return Object(o.a)(Object(o.a)({},t),{},{date:i.$moment.unix(t.timestamp).format(" DD/MM/YYYY - HH:mm"),status:(null==e?void 0:e.status)||"",price:m()(a).div(Math.pow(10,_.inGameDecimal)).toNumber(),tx:(null==t?void 0:t.txid)||(null==t?void 0:t.transaction)||"",porianId:"#".concat(t.tokenId),porianName:(null===(a=t.assetInfo)||void 0===a?void 0:a.name)||"#".concat(t.tokenId),userName:i._getUserNameActivity(Object(o.a)(Object(o.a)({},t),e)),porianNameDad:t.fatherInfo?t.fatherInfo.name:"",porianNameMom:t.motherInfo?t.motherInfo.name:"",period:"per hour"})}),i.data=Object(l.b)(a),i.pagination=Object(l.b)(Object(o.a)(Object(o.a)({},i.pagination),{},{total:e.totalItems})),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),i.data=[];case 17:i.loadingStart=!1;case 18:case"end":return t.stop()}},t,null,[[1,13]])}))()}}},i={components:{ActivitiesItems:b,ActivitiesPori:Object(r.a)(g,function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"wp-activities-pori"},[a.loadingStart?i("div",{staticClass:"loading-container"},[i("contentLoading")],1):a.data&&a.data.length?i("div",[i("div",{staticClass:"wp-list"},a._l(a.data,function(t,e){return i("div",{key:e,staticClass:"active-item"},[i("div",{staticClass:"active-item-left"},[i("div",{staticClass:"active-item__item-time"},[i("div",{staticClass:"time"},[a._v(a._s(t.date))]),i("div",{staticClass:"line"})]),i("div",{staticClass:"active-item__item-text"},[i("div",{staticClass:"status",domProps:{innerHTML:a._s(a.$t("ACTIVITY_TEXT_STATUS_"+t.status.toUpperCase(),{porianId:t.porianId,porianName:t.porianName,userName:t.userName,price:a.$options.filters.toCurrency(t.price)+" "+a.symbolInGame,period:t.period,porianNameDad:t.porianNameDad,porianNameMom:t.porianNameMom}))}})])]),i("div",{staticClass:"active-item-right"},[i("div",{staticClass:"tx"},[i("a",{attrs:{href:a.metamask.blockExplorerUrls[0]+"tx/"+t.tx,target:"_blank"}},[a._v(" "+a._s(t.tx)+" ")])])])])}),0),i("div",{staticClass:"wp-paging"},[i("Paging",{attrs:{pagination:a.pagination},on:{onChangePage:a.onChangePage,onChangePageSize:a.onChangePageSize}})],1)]):i("NoActivity")],1)},[],!1,null,null,null).exports},data:function(){return{activeTab:1,arrayTabs:[{key:1,text:"Porian"},{key:2,text:"Items"}]}},computed:{},created:function(){var t,e;this.activeTab=(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.a)||1},watch:{},methods:{}},s=(a("bfcd"),Object(r.a)(i,function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"wp-activities white-wrap"},[i("h2",{staticClass:"title"},[a._v(a._s(a.$t("ACTIVITY_ACTIVITIES")))]),i("div",{staticClass:"wp-tab"},a._l(a.arrayTabs,function(e){return i("button",{key:e.key,class:[{active:a.activeTab==e.key}],on:{click:function(t){a.activeTab=e.key}}},[a._v(" "+a._s(e.text)+" ")])}),0),1==a.activeTab?i("ActivitiesPori"):a._e(),2==a.activeTab?i("ActivitiesItems"):a._e()],1)},[],!1,null,"594c01da",null)).exports,c=Object(r.a)({},function(){var t=this.$createElement,t=this._self._c||t;return t("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_2270_10669)"}},[t("path",{attrs:{d:"M9.14203 10.1725C8.98828 10.3262 8.79828 10.4436 8.59237 10.5122L6.60359 11.1751C6.46006 11.223 6.31037 11.2473 6.15894 11.2473C6.15894 11.2473 6.15894 11.2473 6.15891 11.2473C5.78325 11.2473 5.43012 11.101 5.16453 10.8354C4.78544 10.4562 4.65531 9.90484 4.82484 9.39631L5.48778 7.40763C5.55638 7.20166 5.67388 7.01153 5.82747 6.85794L10.1229 2.5625H1.71875C0.771031 2.5625 0 3.33353 0 4.28125V14.2813C0 15.229 0.771031 16 1.71875 16H11.7188C12.6665 16 13.4375 15.229 13.4375 14.2813V5.87706L9.14203 10.1725Z",fill:"currentColor"}}),t("path",{attrs:{d:"M6.49066 7.52076C6.43919 7.57222 6.40044 7.63494 6.37744 7.70397L5.7145 9.69269C5.65835 9.86113 5.70219 10.0468 5.82772 10.1724C5.95328 10.2979 6.13897 10.3418 6.30741 10.2856L8.29616 9.62269C8.36522 9.59969 8.42791 9.56094 8.47938 9.50947L14.3351 3.65376L12.3464 1.66504L6.49066 7.52076Z",fill:"currentColor"}}),t("path",{attrs:{d:"M14.887 0.22882C14.5819 -0.0762734 14.0873 -0.0762734 13.7822 0.22882L13.0088 1.00223L14.9975 2.99098L15.7709 2.21757C16.076 1.91248 16.076 1.41782 15.7709 1.11273L14.887 0.22882Z",fill:"currentColor"}})]),t("defs",[t("clipPath",{attrs:{id:"clip0_2270_10669"}},[t("rect",{attrs:{width:"16",height:"16",fill:"currentColor"}})])])])},[],!1,null,null,null).exports,u=a("0efd"),C=a("2c36"),b={mixins:[u.a],props:{},data:function(){return{isLoadingEmail:!1,email:""}},computed:Object(o.a)({},Object(d.e)({profile:function(t){var e;return(null===(t=t.wallet)||void 0===t||null===(e=t.auth)||void 0===e?void 0:e.profile)||{}}})),created:function(){var t;this.email=(null===(t=this.profile)||void 0===t?void 0:t.email)||""},watch:{profile:function(){var t;this.email=(null===(t=this.profile)||void 0===t?void 0:t.email)||""}},methods:Object(o.a)(Object(o.a)({},Object(d.d)({updateAuthProfile:"wallet/UPDATE_AUTHEN_PROFILE"})),{},{getUserInfoBE:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.getUserInfo();case 3:(e=t.sent)&&a.updateAuthProfile(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))()},updateEmailDB:function(){var e,i=this;this.$refs["form-email"].validate().then((e=Object(n.a)(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return i.isLoadingEmail=!0,t.prev=3,t.next=6,i.updateEmail({email:i.email});case 6:return a=t.sent,i.updateAuthProfile(a),t.next=10,i.getUserInfoBE();case 10:i.$emit("cancel"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),C.a.error(i.$notification,{message:i.$t("ERROR_NOTI_AN_UNKNOWN_ERROR")});case 16:i.isLoadingEmail=!1;case 17:case"end":return t.stop()}},t,null,[[3,13]])})),function(t){return e.apply(this,arguments)}))}})},g=(a("964d"),Object(r.a)(b,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-email"},[a("ValidationObserver",{ref:"form-email",staticClass:"wp-form-email"},[a("a-form",{on:{submit:function(t){return t.preventDefault(),e.updateEmailDB.apply(null,arguments)}}},[a("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){t=t.errors;return[a("div",{staticClass:"wp-form"},[a("div",{staticClass:"wp-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:e.$t("ACCOUT_PLACEHOLDER_EMAIL"),disabled:e.isLoadingEmail},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),t[0]?a("div",{staticClass:"error-mess"},[e._v(" "+e._s(t[0])+" ")]):e._e()]),a("div",{staticClass:"wp-btn"},[a("a-button",{staticClass:"btn-custom btn-primary",attrs:{htmlType:"submit",disabled:e.isLoadingEmail}},[e.isLoadingEmail?a("a-icon",{attrs:{type:"loading"}}):a("span",[e._v(e._s(e.$t("ACCOUT_SAVE")))])],1),e.profile.email?a("a-button",{staticClass:"btn-custom btn-white",attrs:{htmlType:"button",disabled:e.isLoadingEmail},on:{click:function(t){return e.$emit("cancel")}}},[e._v(" "+e._s(e.$t("ACCOUT_CANCEL"))+" ")]):e._e()],1)])]}}])})],1)],1)],1)},[],!1,null,"af19ad56",null)).exports,i={mixins:[u.a],props:{},data:function(){return{isLoadingUsername:!1,username:""}},computed:Object(o.a)({},Object(d.e)({profile:function(t){var e;return(null===(t=t.wallet)||void 0===t||null===(e=t.auth)||void 0===e?void 0:e.profile)||{}}})),created:function(){var t;this.username=(null===(t=this.profile)||void 0===t?void 0:t.fullName)||""},methods:Object(o.a)(Object(o.a)({},Object(d.d)({updateAuthProfile:"wallet/UPDATE_AUTHEN_PROFILE"})),{},{getUserInfoBE:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.getUserInfo();case 3:(e=t.sent)&&a.updateAuthProfile(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))()},updateUsername:function(){var e,i=this;this.$refs["form-username"].validate().then((e=Object(n.a)(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return i.isLoadingUsername=!0,t.prev=3,t.next=6,i.updateProflie({fullName:i.username});case 6:return a=t.sent,i.updateAuthProfile(a),t.next=10,i.getUserInfoBE();case 10:i.$emit("cancel"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),C.a.error(i.$notification,{message:i.$t("ERROR_NOTI_AN_UNKNOWN_ERROR")});case 16:i.isLoadingUsername=!1;case 17:case"end":return t.stop()}},t,null,[[3,13]])})),function(t){return e.apply(this,arguments)}))}})},b=(a("c3bc"),Object(r.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-name"},[a("ValidationObserver",{ref:"form-username",staticClass:"form-container"},[a("a-form",{on:{submit:function(t){return t.preventDefault(),e.updateUsername.apply(null,arguments)}}},[a("ValidationProvider",{attrs:{name:"userName",rules:"required|max:20"},scopedSlots:e._u([{key:"default",fn:function(t){t=t.errors;return[a("div",{staticClass:"wp-form"},[a("div",{staticClass:"wp-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:e.$t("ACCOUT_PLACEHOLDER_USERNAME"),disabled:e.isLoadingUsername},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),t[0]?a("div",{staticClass:"error-mess"},[e._v(" "+e._s(t[0])+" ")]):e._e()]),a("div",{staticClass:"wp-btn"},[a("a-button",{staticClass:"btn-custom btn-primary",attrs:{htmlType:"submit",disabled:e.isLoadingUsername}},[e.isLoadingUsername?a("a-icon",{attrs:{type:"loading"}}):a("span",[e._v(e._s(e.$t("ACCOUT_SAVE")))])],1),a("a-button",{staticClass:"btn-custom btn-white",attrs:{htmlType:"button",disabled:e.isLoadingUsername},on:{click:function(t){return e.$emit("cancel")}}},[e._v(" "+e._s(e.$t("ACCOUT_CANCEL"))+" ")])],1)])]}}])})],1)],1)],1)},[],!1,null,"6b588403",null)).exports,i=a("6eb7"),i={mixins:[u.a],components:{SvgEdit:c,IconCopy:i.a,FormEmailUser:g,FormNameUser:b},data:function(){return{loading:!1,imageUrl:"",file:null,isChangeUsername:!1,isChangeEmail:!1}},computed:Object(o.a)(Object(o.a)({},Object(d.e)({profile:function(t){var e;return(null===(t=t.wallet)||void 0===t||null===(e=t.auth)||void 0===e?void 0:e.profile)||{}}})),{},{avatar:function(){return Object(l.c)(167,this.profile.publicAddress)||null}}),watch:{profile:function(){this.imageUrl="",this.file=null,this.isChangeUsername=!1,this.isChangeEmail=!1}},created:function(){this.getUserInfoBE()},methods:Object(o.a)(Object(o.a)({},Object(d.d)({updateAuthProfile:"wallet/UPDATE_AUTHEN_PROFILE"})),{},{getUserInfoBE:function(){var a=this;return Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.getUserInfo();case 3:(e=t.sent)&&a.updateAuthProfile(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))()},getBase64:function(t,e){var a=new FileReader;a.addEventListener("load",function(){return e(a.result)}),a.readAsDataURL(t)},handleChange:function(t){var e=this;this.loading=!0,"uploading"!==t.file.status?"done"===t.file.status?this.getBase64(t.file.originFileObj,function(t){e.imageUrl=t,e.loading=!1}):this.loading=!1:this.loading=!0},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type;e||this.$message.error("You can only upload JPG/PNG file!");t=t.size/1024/1024<2;return t||this.$message.error("Image must smaller than 2MB!"),e&&t},uploadImage:function(r){var s=this;return Object(n.a)(regeneratorRuntime.mark(function t(){var e,a,i,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.onSuccess,a=r.onError,i=r.file,(n=new FormData).append("file",i),t.prev=3,t.next=6,s.updateAvatar(n);case 6:n=t.sent,s.updateAuthProfile(n),e("Ok"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),C.a.error(s.$notification,{message:s.$t("ERROR_NOTI_AN_UNKNOWN_ERROR")}),a({err:t.t0});case 15:case"end":return t.stop()}},t,null,[[3,11]])}))()},disConnect:function(){this.$root.$emit("btn-wallet-disconnect")}})},g=(a("c759"),Object(r.a)(i,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{staticClass:"wp-profile-user  white-wrap"},[t("div",{staticClass:"wp-info__accout"},[t("div",{staticClass:"wp-info__accout-content"},[t("div",{staticClass:"wp-accout-top"},[t("div",{staticClass:"user-avatar"},[t("a-upload",{staticClass:"avatar-uploader",attrs:{name:"avatar","list-type":"picture-card","show-upload-list":!1,customRequest:e.uploadImage,"before-upload":e.beforeUpload,disabled:e.loading},on:{change:e.handleChange}},[e.imageUrl?t("div",{staticClass:"wp-img"},[t("img",{attrs:{src:e.imageUrl,alt:"avatar"}})]):e.profile.avatarUrl?t("div",{staticClass:"wp-img"},[t("img",{attrs:{src:e.profile.avatarUrl,alt:"avatar"}})]):e.avatar?t("div",{staticClass:"jazzicon",domProps:{innerHTML:e._s(e.avatar)}}):t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v(" Upload ")])],1),e.loading?t("div",{staticClass:"wp-loading"},[t("a-icon",{attrs:{type:"loading"}})],1):e._e(),t("div",{staticClass:"icon-edit"},[t("SvgEdit")],1)])],1),t("div",{staticClass:"uaser-name-address"},[t("div",{staticClass:"user-name"},[e.isChangeUsername?t("FormNameUser",{on:{cancel:function(t){e.isChangeUsername=!1}}}):t("div",{staticClass:"user-name-text"},[e._v(" "+e._s(e.profile.fullName||"")+" "),t("button",{staticClass:"user-name-btn",on:{click:function(t){e.isChangeUsername=!0}}},[t("SvgEdit")],1)])],1),t("div",{staticClass:"user-address"},[t("div",[e._v(e._s(e.$t("ACCOUT_WALLET_ADRESS"))+":")]),e._v(" "+e._s(e._f("truncate")(e.profile.publicAddress,10,14,6))+" "),t("IconCopy",{attrs:{textCopy:e.profile.publicAddress}})],1),t("div",{staticClass:"user-forms"},[t("div",{staticClass:"user-email"},[t("label",[e._v(" "+e._s(e.$t("ACCOUT_EMAIL"))+":")]),e.profile.email&&!e.isChangeEmail?t("div",{staticClass:"text"},[e._v(" "+e._s(e.profile.email)+" "),t("button",{staticClass:"user-name-btn",on:{click:function(t){e.isChangeEmail=!0}}},[t("SvgEdit")],1)]):t("FormEmailUser",{on:{cancel:function(t){e.isChangeEmail=!1}}})],1),e.profile.referalCode?t("div",{staticClass:"user-email user-referral-code"},[t("label",[e._v(" "+e._s(e.$t("ACCOUT_REFERRAL_CODE"))+":")]),t("div",{staticClass:"text"},[e._v(" "+e._s(e.profile.referalCode)+" ")])]):e._e()]),t("div",{staticClass:"logout"},[t("a-button",{staticClass:"btn-custom btn-red",attrs:{icon:"logout"},on:{click:e.disConnect}},[e._v(" "+e._s(e.$t("SIDEBAR_LOG_OUT"))+" ")])],1)])])])])])},[],!1,null,"84b57efc",null)).exports,b=[function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"wp-info__balance-item__img bg-rigy"},[t("img",{attrs:{src:a("6337")}})])},function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"wp-info__balance-item__img bg-riken"},[t("img",{attrs:{src:a("d6b4")}})])},function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"wp-info__balance-item__img bg-pori"},[t("img",{attrs:{src:a("23c8")}})])},function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"wp-info__balance-item__img bg-egg"},[t("img",{attrs:{src:a("e52e")}})])}],i={components:{},data:function(){return{symbol:{inGame:p.x.app.token.inGameSymbol,nativeToken:p.x.app.token.nativeSymbol}}},computed:Object(o.a)(Object(o.a)(Object(o.a)({},Object(d.c)({getBalance:"wallet/getBalance"})),Object(d.e)({price:function(t){return t.price||{}},profile:function(t){var e;return(null===(t=t.wallet)||void 0===t||null===(e=t.auth)||void 0===e?void 0:e.profile)||{}}})),{},{balance:function(){return this.getBalance(this.price)||{}}}),created:function(){this.updateBalance()},methods:Object(o.a)(Object(o.a)({},Object(d.b)({updateBalance:"wallet/updateBalance"})),{},{formatToken:function(t){return this.$options.filters.formatNumber(t,"0")},formatPori:function(t){return this.$options.filters.formatNumber(t,"0","no-decimal")}})},d={components:{Activities:s,ProfileUser:g,InfoBalance:(a("7a75"),Object(r.a)(i,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{},[e("div",{staticClass:"wp-info__balance"},[e("div",{staticClass:"wp-info__balance-item white-wrap"},[e("div",[t._m(0),e("div",{staticClass:"wp-info__balance-item__amout"},[e("number",{ref:"number1",attrs:{from:0,to:t.balance.inGame,format:t.formatToken,duration:2,easing:"Power1.easeOut"}}),e("span",[t._v(t._s(t.symbol.inGame))])],1),e("div",{staticClass:"wp-info__balance-item__value"},[t._v(" $"+t._s(t._f("formatNumber")(t.balance.inGameUSD,"0"))+" ")])])]),e("div",{staticClass:"wp-info__balance-item white-wrap"},[e("div",[t._m(1),e("div",{staticClass:"wp-info__balance-item__amout"},[e("number",{ref:"number2",attrs:{from:0,to:t.balance.nativeToken,format:t.formatToken,duration:2,easing:"Power1.easeOut"}}),e("span",[t._v(t._s(t.symbol.nativeToken))])],1),e("div",{staticClass:"wp-info__balance-item__value"},[t._v(" $"+t._s(t._f("formatNumber")(t.balance.nativeTokenUSD,"0"))+" ")])])]),e("div",{staticClass:"wp-info__balance-item white-wrap"},[e("div",[t._m(2),e("div",{staticClass:"wp-info__balance-item__amout"},[e("number",{ref:"number3",attrs:{from:0,to:t.balance.numOfAdultPorians,format:t.formatPori,duration:2,easing:"Power1.easeOut"}}),e("span",[t._v(t._s(t.$t("OVERVIEW_PORIANS")))])],1),e("div",{staticClass:"wp-info__balance-item__value"},[t._v(" ")])])]),e("div",{staticClass:"wp-info__balance-item white-wrap"},[e("div",[t._m(3),e("div",{staticClass:"wp-info__balance-item__amout"},[e("number",{ref:"number4",attrs:{from:0,to:t.balance.numOfEggs,format:t.formatPori,duration:2,easing:"Power1.easeOut"}}),e("span",[t._v(t._s(t.$t("OVERVIEW_EGGS")))])],1),e("div",{staticClass:"wp-info__balance-item__value"},[t._v(" ")])])])])])},b,!1,null,"d2400c6a",null)).exports},computed:Object(o.a)({},Object(d.e)({profile:function(t){var e;return(null===(t=t.wallet)||void 0===t||null===(e=t.auth)||void 0===e?void 0:e.profile)||null},provider:function(t){return(null===(t=t.wallet)||void 0===t?void 0:t.provider)||null}})),created:function(){if(!this.profile||!this.provider)return this.resetStore(),void this.$router.push("/")},methods:Object(o.a)({},Object(d.d)({resetStore:"wallet/RESET_STATE"}))},d=(a("be22"),Object(r.a)(d,function(){var t=this.$createElement,t=this._self._c||t;return t("div",{attrs:{id:"accountPage"}},[t("div",{staticClass:"main-container"},[t("div",{staticClass:"wp-top"},[t("ProfileUser"),t("InfoBalance")],1),t("div",{staticClass:"wp-bottom"},[t("Activities")],1)])])},[],!1,null,"6363d04e",null));e.default=d.exports},7854:function(t,e,a){t.exports=a.p+"img/NoActivity.fc1ac46e.png"},"7a75":function(t,e,a){"use strict";a("16f7")},"80b5":function(t,e,a){},"849c":function(t,e,a){"use strict";a("f085")},"913c":function(t,e,a){"use strict";a("4358")},"964d":function(t,e,a){"use strict";a("80b5")},af43:function(t,e,a){},b7a6:function(t,e,a){"use strict";a.r(e);var i={props:{isPageLoading:{type:Boolean,default:!1}}},a=(a("913c"),a("2877")),i=Object(a.a)(i,function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"loading-page"},[t("svg",{staticClass:"gegga"},[t("defs",[t("filter",{attrs:{id:"gegga"}},[t("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"7",result:"blur"}}),t("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",result:"inreGegga"}}),t("feComposite",{attrs:{in:"SourceGraphic",in2:"inreGegga",operator:"atop"}})],1)])]),t("svg",{staticClass:"snurra",attrs:{width:"200",height:"200",viewBox:"0 0 200 200"}},[t("defs",[t("linearGradient",{attrs:{id:"linjärGradient"}},[t("stop",{staticClass:"stopp1",attrs:{offset:"0"}}),t("stop",{staticClass:"stopp2",attrs:{offset:"1"}})],1),t("linearGradient",{attrs:{y2:"160",x2:"160",y1:"40",x1:"40",gradientUnits:"userSpaceOnUse",id:"gradient","xlink:href":"#linjärGradient"}})],1),t("path",{staticClass:"halvan",attrs:{d:"m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"}}),t("circle",{staticClass:"strecken",attrs:{cx:"100",cy:"100",r:"64"}})]),t("svg",{staticClass:"skugga",attrs:{width:"200",height:"200",viewBox:"0 0 200 200"}},[t("path",{staticClass:"halvan",attrs:{d:"m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"}}),t("circle",{staticClass:"strecken",attrs:{cx:"100",cy:"100",r:"64"}})])])},[],!1,null,"04e8ea48",null);e.default=i.exports},be22:function(t,e,a){"use strict";a("c56d")},bfcd:function(t,e,a){"use strict";a("af43")},c3bc:function(t,e,a){"use strict";a("006f")},c56d:function(t,e,a){},c759:function(t,e,a){"use strict";a("2687")},e52e:function(t,e,a){t.exports=a.p+"img/Profile_Egg.b97b8bfb.png"},f085:function(t,e,a){}}]);