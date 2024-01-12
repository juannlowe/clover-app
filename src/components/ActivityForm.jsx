import { useState } from 'react';

const ActivityForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, activity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Activity</h2>

      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="activity">Activity Name:</label>
      <input
        type="text"
        id="activity"
        name="activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        required
      />

      <button type="submit">Join Activity</button>
    </form>
  );
};

export default ActivityForm;
