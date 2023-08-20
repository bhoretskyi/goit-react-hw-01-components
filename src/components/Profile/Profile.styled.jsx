import styled from 'styled-components';

export const ProfileText = styled.p`
  font-size: 44px;
  font-weight: bold;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
`;

export const ListItem = styled.li`
  width: 200px;
  padding: 20px;
  justify-content: space-around;
  border: 2px solid black;
  display: flex;
  border-radius: ${p => p.theme.radius.small};

  align-items: flex-end;
`;

export const ListItemText = styled.span`
  font-size: large;
`;

export const ListItemQuantity = styled.span``;

export const ProfileContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
