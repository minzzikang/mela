import styled from "styled-components";
import Navbar from "../components/Navbar";
import mainImage from '../assets/images/mainImage.png'
import SignupModal from './../components/SignupModal';
import SigninModal from "../components/SigninModal";
// background-color: ${props => props.theme.colours.primary};

const LandingPageContainer = styled.div`  
  min-height: 300vh;
  background-color: ${props => props.theme.colours.primary};
  color: white;
  text-align: center;

`

const LandingImageDiv = styled.div`
  background-image: url(${mainImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  min-height: calc(100vh + 5rem);
  margin-top: -15vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  h1 {
    color: white;
    font-size: 4.4rem;
    margin-bottom: 1.5vh;
    padding: 1%;
    font-family: InterBold;
  }
  > div:nth-child(1) {
  }
  > div:nth-child(3) {
    flex-grow: 0.3;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-bottom: 5%; */
    gap: 3rem;
  }
`;

const SignUp = styled(SignupModal)`
margin:100px;
`

const SignIn = styled(SigninModal)

// console.log(props)
function Landing() {
  return (  
    <>
      <Navbar/>
      <LandingPageContainer>
        <LandingImageDiv>
        <div></div>
        <div>
          <h1>M A T C H</h1>
          <h1>C O L L A B O R A T E</h1>
          <h1>P O R T F O L I O</h1>
        </div>
        <div>
          <SignUp />
          <SigninModal />
        </div>
        </LandingImageDiv>
      <p>여기가 수정되어야 하는 공간임 </p>
      </LandingPageContainer>
    </>
  );
}

export default Landing;