
import { useState } from 'react';

interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

const TeamSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  // Team member details with new uploaded images
  const teamMembers: TeamMember[] = [
    { 
      name: "Debarghya Bhowmick", 
      designation: "Chief Executive Officer", 
      image: "/lovable-uploads/9c344e79-b7e9-485e-9e81-c6e039e3331c.png" 
    },
    { 
      name: "Sahina Sabnam", 
      designation: "Managing Director & AI Engineer", 
      image: "/lovable-uploads/f8ead59f-b99b-4c37-a707-631cdb594c49.png" 
    },
    { 
      name: "Mayank Kumar Jha", 
      designation: "Chief Technology Officer & MERN Stack Developer", 
      image: "/lovable-uploads/c7a3778e-fd52-45cf-84a1-fa12cc18e179.png" 
    },
    { 
      name: "Manik Sharma", 
      designation: "Chief Finance Officer & Full Stack Developer", 
      image: "/lovable-uploads/ff0d63df-3957-4d6a-aa42-f8e1892ffd4d.png" 
    },
    { 
      name: "Tulsi Gupta", 
      designation: "Python Developer", 
      image: "/lovable-uploads/e51b9f08-17e3-4629-9ad6-6e46f598c01c.png" 
    },
    { 
      name: "Rehaan Sharma", 
      designation: "MERN Stack Developer", 
      image: "/lovable-uploads/60b2a214-6f08-47c6-abec-b9c398215014.png" 
    },
    { 
      name: "Suman Kumar", 
      designation: "MERN Stack Developer", 
      image: "/lovable-uploads/860a4c8c-b6c1-4cb4-ac8b-3a0ad50bc3f7.png" 
    },
    { 
      name: "Gopal Kumar Mahto", 
      designation: "Cybersecurity Specialist", 
      image: "/lovable-uploads/06b98725-d47b-4078-b9d9-063b28192f64.png" 
    },
    { 
      name: "Nandini Gupta", 
      designation: "UI/UX Developer", 
      image: "/lovable-uploads/e71924d0-40c6-4809-96fc-9182512c2196.png" 
    },
    { 
      name: "Prodipta Dutta", 
      designation: "Backend Developer", 
      image: "/lovable-uploads/524d9499-1ec4-46c2-9668-75cfa2feefd5.png" 
    },
    { 
      name: "Sumeet Rawat", 
      designation: "App Developer", 
      image: "/lovable-uploads/f8ead59f-b99b-4c37-a707-631cdb594c49.png" // Using same image as placeholder
    },
    { 
      name: "Ashish Ranjan Pathak", 
      designation: "JAVA Full Stack Developer", 
      image: "/lovable-uploads/c62d9159-34d1-45fd-b4f4-c32ceeeae93a.png" 
    }
  ];

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setShowPopup(true);
  };

  const closePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('popup-overlay') || target.classList.contains('close-popup')) {
      setShowPopup(false);
    }
  };

  return (
    <section className="min-h-screen w-full py-24 px-4 flex flex-col justify-center items-center bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold astra-title-gradient mb-16 font-sans">
          The Team
        </h2>
        
        <div className="relative w-full flex justify-center items-center">
          <div className="dial-pad w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-black/80 border-3 border-white/20 shadow-xl shadow-white/30 flex justify-center items-center relative animate-spin-slow">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="member absolute w-20 h-20 rounded-full bg-white/10 flex justify-center items-center flex-col cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ 
                  transform: `rotate(${30 * (index + 1)}deg) translateY(-150px) rotate(${-30 * (index + 1)}deg)` 
                }}
                onClick={() => handleMemberClick(member)}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-16 h-16 rounded-full border-2 border-cyan-400 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popup */}
        {showPopup && selectedMember && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 popup-overlay" onClick={closePopup}>
            <div className="bg-white rounded-lg p-6 w-72 text-center shadow-2xl animate-fade-in">
              <span className="absolute top-2 right-4 text-2xl cursor-pointer text-black close-popup">&times;</span>
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-cyan-500 object-cover"
              />
              <h3 className="text-black font-semibold text-lg">{selectedMember.name}</h3>
              <p className="text-black">{selectedMember.designation}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
