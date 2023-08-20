import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendListList } from './FriendList.styled';
export default function FriendList({friends}) {
  return (
    <FriendListList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline ={friend.isOnline}
        />
      ))}
    </FriendListList>
  );
}
