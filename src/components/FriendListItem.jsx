import friends from 'friends'

export default function FriendListItem (props) {
    return (
       friends.map(friend => ( <li key={friend.id}>
        <span>{friend.isOnline}</span>
        <img  src={friend.avatar} alt="User avatar" width="48" />
        <p>{friend.name}</p>
      </li>))
     )
} 