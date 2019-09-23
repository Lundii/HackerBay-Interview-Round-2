import styled from 'styled-components';

export const SquareContainer = styled.div`
  width: 1cm;
  height: 1cm;
  border: 1px solid black;
  background-image: ${props => 
    {
      if (props.mainSquare) return "url('../../src/public/images/red.png')";
      if (props.selected) return "url('../../src/public/images/green.jpg')";
      return 'white';
    }
  };
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
