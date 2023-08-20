import {
  List,
  ListItem,
  ListItemText,
  ListItemQuantity,
  ProfileContainer,
  ProfileText,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) {
  return (
    <ProfileContainer>
      <ProfileContainer className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="300" />
        <ProfileText>{username}</ProfileText>
        <ProfileText>{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileContainer>

      <List>
        <ListItem>
          <ListItemText>Followers: </ListItemText>
          <ListItemQuantity>{stats.followers}</ListItemQuantity>
        </ListItem>
        <ListItem>
          <ListItemText>Views: </ListItemText>
          <ListItemQuantity>{stats.views}</ListItemQuantity>
        </ListItem>
        <ListItem>
          <ListItemText>Likes: </ListItemText>
          <ListItemQuantity>{stats.likes}</ListItemQuantity>
        </ListItem>
      </List>
    </ProfileContainer>
  );
}
