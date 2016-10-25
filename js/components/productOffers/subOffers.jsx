import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {isElementVisible} from './util.js'

export default class SubOffers extends React.Component {

    constructor(props){
        super(props)
    }

        
       render () {
           //
           var load="http://smallenvelop.com/wp-content/uploads/2014/08/Preloader_2.gif";
       var img= (this.props.showImage) ? this.props.subData.offerImageUrl : load;
       //console.log('this sub',img)
           return (
               
               <li className="OffersContentBoxLi  swiper-slide Blockbuster" >
            
            <div className="OffersContentBox">
               <a className="OffersContentBoxLink"  href={this.props.subData.offerPageUrl}>
                  <div className="OffersContentIMG">
                     <div className="comp-animated-icon1 "><span className="animated-icon1" >
                        <i className="sd-icon sd-icon-like-outline heart-icon animated-font-pre"></i></span>
                     </div>
                     <img className="wooble" data-src={this.props.subData.offerImageUrl} src={img}  alt="this.props.subData.offerImageUrl"/> 
                  </div>
                  <div className="OffersContTxt">
                     <div className="wrapCenterCont">
                        <div className="centeredContX">
                           <div className="OfferGoldx"><span className="OfferGold"></span><span className="faquickview facenter">Quick View <i className="sd-icon sd-icon-quick-view "></i></span></div>
                           <div className="OffersTitle ">{this.props.subData.offerName}</div>
                           <div className="rating_Wrap">
                              <div className="OfferHighlights">
                                 <div className="ratingBG_disabled"></div>
                                 <div className="ratingBG_active"> </div>
                              </div>
                           </div>
                           <div className="priceTagline_relWrap">
                              <div className="DoubleOfferTxtWrpr">
                                 <div className="OffeRLft">
                                    <div className="StdFonTBLK tagLine1 truncateX">{this.props.subData.tagLine}</div>
                                 </div>
                              </div>
                              <div className="priceContX"> <span className="OfferMRP_Price"></span> <span className="OfferPrice_Price"></span><span className="OfferDiscount"><span className="OfferDiscount_Discount"></span></span> </div>
                           </div>
                           <div className="cashBackX_priceEffect_heightWrap">
                              <div className="cashBackX_RelWrap">
                                 <div className="cashBackX_wrap"> </div>
                              </div>
                              <div className="PriceEffect_wrap"> </div>
                           </div>
                           <div className="clearfix"></div>
                           <div className="wrap_saveAmt"></div>
                           <div className="cta_Wrap"> <span className="cta_Text">
                              Shop Now
                              </span> 
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="viewAllOnlyX">View All</div>
               </a>
            </div>
         </li>
            
           )
       }
}

 SubOffers.defaultProps = {
      loader: '../img/loader.gif',
      showImage: false
}