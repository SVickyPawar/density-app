import * as React from "react";
import './index.css'
import frame from '../images/Frame.png';
import iphoneOne from '../images/iPhone first.png';
import iphoneMiddle from '../images/iPhone middle.png';
import iphoneLast from '../images/iPhone last.png';
import iphone_one from '../images/iPhone_one.png';
import iphone_two from '../images/iPhone_two.png';
import iphone_three from '../images/iPhone_three.png';
import card_one from '../images/card_one.png';
import card_two from '../images/card_two.png';
import card_three from '../images/card_three.png';
import trade_graph from '../images/trade_graph.png';
import graph from '../images/graph.png';
import info_box from '../images/info_box.png';
import steps_info from '../images/steps_info.png';
import users_box from '../images/users_box.png';
import comments_box from '../images/comment_box.png';
import community_box from '../images/community_box.png';
import owner_box from '../images/owner_box.png';
import trading_box from '../images/trading_box.png';
import footer_box from '../images/footer_box.png';
import announcement_box from '../images/announcement-box.png';

import styled from "styled-components";
const Header = styled.div`
width: 100%;

`

const Navbar = styled.div`
width: 80%;
  border: 1px solid transparent;
  display:flex;
  justify-content: space-between;
  padding:5px 20px;
  margin:auto;
`

const TradeBox = styled.div`
  width:100%;
  height:auto;
  margin:auto;
`
const TextBox = styled.div`
  width:70%;
  margin:auto;
  color:#FFFFFF;
  line-height:100px;
  text-align:center;
  font-size:70px;
  height:270px;
`
const IphoneBox= styled.div`
  width:100%;
  height:600px;
`

const IphoneContent= styled.div`
  width:75%;
  margin:auto;
  height:580px;

  margin-top:10px;
`


const NumericDiv = styled.div`
  width:100%;
  height:150px;
 
  display:flex
`

const IphoneDivs= styled.div`
width:100%;
height:auto;
margin-top:100px;
`

const CardBox = styled.div`
width:100%;
height:auto;
margin-top:100px;
`

const TextCardBox = styled.div`
width:58%;
margin:auto;
text-align:center;
`

const ParentCardBox = styled.div`
width:100%;
height:400px;
margin-top:100px;
`
const CardSectionBox = styled.div`
  width:820px;
  height:350px;
  display:flex;
  margin:auto;
`

const TradeGraph = styled.div`
  width:60%;
  margin:auto;
  height:400px;
`


const IndexPage = () => {
  return (
		<div className={`container`}>
      <Header className={`nav`}>

				<Navbar >
					<img className={`navbarLogo`} src={frame} alt="" />
					<div className={`navigate-text`}>
						<p>Career</p>
						<p>Blogs</p>
						<p>Leaderboards</p>
						<p>Fees</p>
						<button className={`nav-button`}>TRADE NOW</button>
					</div>
				</Navbar>
      </Header>
			<div className={`density`}>
				<TradeBox>
					<TextBox>
						<h2>It’s time to trade, the <span className={`future`}>future</span>.</h2>
					</TextBox>
            <div  className={`goal`}><p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p></div>
				</TradeBox>
        <IphoneBox>
          <IphoneContent>
              <div style={{margin:'auto',display:'flex',alignItems:'center',justifyContent:'center',placeContent:'center',borderRadius:'25%'}}>
                <div style={{width:'260px',height:'480px',marginRight:'-15px',zIndex:'1'}}>
                  <img src={iphoneOne} alt="" style={{width:'100%',height:'100%'}} />
                </div>
                <div style={{width:'290px',height:'550px',zIndex:'2'}}>
                <img src={iphoneMiddle} alt="" style={{width:'100%',height:'100%'}} />
                </div>
                <div style={{width:'260px',height:'480px',marginLeft:'-15px',zIndex:'1'}}>
                <img src={iphoneLast} alt="" style={{width:'100%',height:'100%'}} />
                </div>
              </div>
          </IphoneContent>   
        </IphoneBox>
        <NumericDiv>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'25%',borderRight:'1px solid yellow'}}>
            <p style={{fontSize:'40px',fontWeight:'700',color:'#EBFF25'}}>00</p>
            <p style={{marginTop:'-35px',fontWeight:'500',fontSize:'16px',color:'#E7E7EA'}}>Conversion fee</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'25%',borderRight:'1px solid yellow'}}>
            <p style={{fontSize:'40px',fontWeight:'700',color:'#EBFF25'}}>500Mn+</p>
            <p style={{marginTop:'-35px',fontWeight:'500',fontSize:'16px',color:'#E7E7EA'}}>Conversion fee</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'25%',borderRight:'1px solid yellow'}}>
            <p style={{fontSize:'40px',fontWeight:'700',color:'#EBFF25'}}>250+</p>
            <p style={{marginTop:'-35px',fontWeight:'500',fontSize:'16px',color:'#E7E7EA'}}>Conversion fee</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'25%'}}>
            <p style={{fontSize:'40px',fontWeight:'700',color:'#EBFF25'}}>15000+</p>
            <p style={{marginTop:'-35px',fontWeight:'500',fontSize:'16px',color:'#E7E7EA'}}>Conversion fee</p>
          </div>         
        </NumericDiv>
        <IphoneDivs>
        <div style={{width:'260px',height:'550px',margin:'auto'}}>
                <img src={iphone_one} alt="" style={{width:'100%',height:'100%'}} />
                </div>
                <div style={{width:'260px',height:'550px',margin:'auto',marginTop:'100px'}}>
                <img src={iphone_two} alt="" style={{width:'100%',height:'100%'}} />
                </div>
                <div style={{width:'260px',height:'550px',margin:'auto',marginTop:'100px'}}>
                <img src={iphone_three} alt="" style={{width:'100%',height:'100%'}} />
                </div>
        </IphoneDivs>
        <CardBox>
          <TextCardBox>
            <p style={{fontSize:'58px',color:'#FFFFFF',fontWeight:'700'}}>Trade More. <span style={{color:'#EBFF25'}}>Pay Less.</span></p>
            <p style={{color:'#FFFFFF',fontSize:'24px',marginTop:'-40px'}}>Our low Fees Supercharge Your Profits</p>
          </TextCardBox>
        </CardBox>
        <ParentCardBox>
        <CardSectionBox>
          
          <div style={{width:'250px',height:'83%',marginTop:'30px'}}>
              <img src={card_one} alt="" style={{height:'100%'}} />
          </div>
          <div style={{width:'310px',height:'100%'}}>
              <img src={card_two} alt="" style={{height:'100%'}} />
          </div>
          <div style={{width:'250px',height:'83%',marginTop:'30px'}}>
              <img src={card_three} alt="" style={{height:'100%'}} />
          </div>
          
        </CardSectionBox>
        </ParentCardBox>
        {/* <TextCardBox>
            <p style={{fontSize:'58px',color:'#FFFFFF',fontWeight:'700'}}>Explore the Markets
like it is your  <span style={{color:'#EBFF25'}}>Playground</span>.</p>
            <p style={{color:'#FFFFFF',fontSize:'24px',marginTop:'-40px'}}>Search for your favorite coins and stay ahead of the market</p>
          </TextCardBox> */}
          <TradeBox>
            <img src={trade_graph} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={graph} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={info_box} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={steps_info} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={info_box} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={users_box} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={comments_box} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={announcement_box} alt="" width='100%' height="100%" />
          </TradeBox>
          <TradeBox>
            <img src={community_box} alt="" width='100%' height="100%" />
          </TradeBox>
          <div style={{width:'100%'}}>

          <TradeBox>
            <img src={owner_box} alt="" width='100%' height="100%" />
          </TradeBox>
          </div>
          <TradeBox>
            <img src={trading_box} alt="" width='100%' height="100%" />
          </TradeBox>
			</div>
          <TradeBox>
            <img src={footer_box} alt="" width='100%' height="100%" />
          </TradeBox>
		</div>
	);
}

export default IndexPage

export const Head = () => <title>Home Page</title>
