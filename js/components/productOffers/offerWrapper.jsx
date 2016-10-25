import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import SubOffers from './subOffers.jsx';

export default class OfferWrapper extends React.Component {
      constructor(props){
        super(props);
       
    }


    render (){
        //console.log('this4 ',this);
       var self=this;
        let subWrapper = this.props.mainData.map(function (value,index){
           // console.log('value',value);
                        return(
                            <SubOffers key={index}  subData={value}    showImage={self.props.showImage}/>
                        )
        });
        //console.log("this 3",this);
        return(
            <div className="sectionX" >
                    <div className="captionX99 caption_1 topCatIcon">
                        <div className="centerCaptionInnr">
                            <h2>
                                <span className="decorX">{this.props.mainData[0].categoryName}</span>
                                <ul  className="superDeal_vwAll">
                                </ul>
                            </h2>
                        </div>
                    </div>
                    <div className="offerCont_wrap">
                        <div className="width_ContstraX relFontX resp_LiX dummyHeight_bg innerSection">
                            <ul  className="">
                               {subWrapper}
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}


 OfferWrapper.defaultProps = {
      showImage: false
}