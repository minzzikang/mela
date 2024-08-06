import styled from "styled-components";

const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.fontcolor};
  background: ${(props) => props.backgroundcolor};
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

const Index = (props) => {
  return (
    <>
      <Container
        backgroundcolor={props.backgroundcolor}
        fontcolor={props.fontcolor}
        width={props.width}
        height={props.height}
        onClick={props.onClick}
      >
        {props.text}
      </Container>
    </>
  );
};

Index.defaultProps = {
  text: "default",
  backgroundcolor: "#254ef8",
  fontcolor: "white",
  width: "1rem",
  height: "50px",
  onClick: () => {},
};

export default Index;
