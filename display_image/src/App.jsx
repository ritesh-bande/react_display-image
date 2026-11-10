// 1. Import your local image file at the top
import profileImg from './assets/photo.jpeg'; 

const user = {
  name: 'Ritesh Bande',
  imageUrl: profileImg, // 2. Assign the imported file here
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl} 
        alt={'Photo of ' + user.name}
        style={{ 
          width: user.imageSize, 
          height: user.imageSize,
          objectFit: 'cover'
        }}
      />
    </>
  );
}
