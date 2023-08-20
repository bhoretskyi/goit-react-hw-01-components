import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: ${props => props.theme.radius.large};
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

export const TextIsOnline = styled.span`
  background-color: ${p => 
    p.children === 'online' ? 'green' : 'red'
  };
`;
