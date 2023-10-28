    import { useState } from 'react';
    import '../components/profile.css'

    function Profile() {
      const [name, setName] = useState("Temirlan");
      const [age, setAge] = useState(19);
      const [location, setLocation] = useState("Almaty, KZ");
      const [bio, setBio] = useState("Student at KBTU");
      const [isEditing, setIsEditing] = useState(false);
      const [isDisplayed, setIsDisplayed] = useState(true);

      const handleEditClick = () => {
        setIsEditing(true);
        setIsDisplayed(false);
      };

      const handleSaveClick = () => {
        setIsEditing(false);
        setIsDisplayed(true);
      };

      return (
        <div className="profile">
              <img src="./miras.png"></img>

          {isDisplayed && (
            
            <div className='displayed-block'>
              <h1>{name}</h1>
              <p>Age: {age}</p>
              <p>Location: {location}</p>
              <p>Bio: {bio}</p>
            </div>
          )}
          {isEditing ? (
            <div>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              </label>
    
              <label>
                Bio:
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
              </label>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      );
    }

    export default Profile;
