// import React from 'react';

// const Profile = () => {
//   return (
//     <div>
//       <h2>User Profile</h2>
      
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://strangers-things.herokuapp.com/api/users/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchUserActivity = async () => {
      try {
        const response = await axios.get('https://strangers-things.herokuapp.com/api/users/me/activity', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        setActivity(response.data.data);
      } catch (error) {
        console.error('Error fetching user activity:', error);
      }
    };

 
    fetchUserProfile();
    fetchUserActivity();
  }, []);

  const renderActivityDetails = (item) => {
    switch (item.type) {
      case 'post':
        return (
          <div>
            <p>{item.details.title}</p>
            <p>{item.details.description}</p>
          </div>
        );
      case 'message':
        return (
          <div>
            <p>From: {item.details.from}</p>
            <p>To: {item.details.to}</p>
            <p>{item.details.content}</p>
          </div>
        );
      case 'search':
        return (
          <div>
            <p>Searched for: {item.details.query}</p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <h3>Username: {user.username}</h3>
          <h4>Email: {user.email}</h4>
          {/* Additional user details */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}

      <h3>Activity:</h3>
      {activity.length ? (
        <ul>
          {activity.map((item) => (
            <li key={item._id}>
              <h4>{item.type}</h4>
              {renderActivityDetails(item)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No activity to display.</p>
      )}
    </div>
  );
};

export default Profile;
