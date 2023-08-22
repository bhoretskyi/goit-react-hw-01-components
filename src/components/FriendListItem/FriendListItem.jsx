import { FriendListItemStyled } from './FriendListItem.styled';
import { TextIsOnline } from './FriendListItem.styled';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListItemStyled>
      <TextIsOnline 
       $eventStats = {isOnline ? 'true' : 'false'}>
        {isOnline ? 'online' : 'offline'}
      </TextIsOnline>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListItemStyled>
  );
}
