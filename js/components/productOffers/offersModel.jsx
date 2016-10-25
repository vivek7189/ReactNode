import React,{Component, PropTypes} from 'react';

const offersAPIEndPoint="";
var productData=[];
class ProductOffers extends React.Component {
    getOffersdata(){
            $.ajax({
        method: "GET",
        url: "proxy",
        success : function (data){
           productData =data;
        }
      })
      //console.log('dataModel',productData);
      return productData;
    }
}

export default ProductOffers;