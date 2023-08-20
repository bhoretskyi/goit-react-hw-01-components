import { styled } from 'styled-components';
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  export const StatisticsSection = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
  `
export const StatisticsList = styled.ul`
    display: flex;
    padding: 0 10px;
    height: 100px;
    width:500px;
    justify-content:center;
    align-items: center;

    
`;
export const StatisticsListItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 1px solid black;
  width: 70px;
  height: 100px;
  padding-top: 30px;
  background-color: ${getRandomColor};

`;
