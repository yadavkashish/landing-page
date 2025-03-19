import React, { useEffect, useState } from 'react';

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch team data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="team py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-lg mb-10">
          Our team consists of talented individuals with diverse expertise. Let the owner tell you more about each one.
        </p>

        {/* Owner's Message */}
        <div className="owner-intro mb-10">
          <h3 className="text-2xl font-semibold mb-4">A Message from the Owner</h3>
          <p>
            As the owner of this business, I am proud to have an amazing team supporting me. Each member brings unique
            skills, and together, we work towards providing top-notch services for our clients. Here are our talented
            teammates and what they specialize in.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="team-member-details text-center">
                <img
                  src={`https://i.pravatar.cc/150?img=${member.id}`} // Dynamic image based on user ID
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.company.name}</p>
                <p className="text-md text-gray-600">{member.company.catchPhrase}</p>
                <p className="mt-4">
                  <strong>Skills:</strong> {member.company.bs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
