
import { useState } from 'react';

interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

const TeamSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  // Sample team member details
  const teamMembers: TeamMember[] = [
    { name: "Debarghya Bhowmick", designation: "Chief Executive Officer", image: "/db.jpg" },
    { name: "Sahina Sabnam", designation: "Managing Director & AI Engineer", image: "/sah.jpg" },
    { name: "Mayank Kumar Jha", designation: "Chief Technology Officer & MERN Stack Developer", image: "/mayank.png" },
    { name: "Manik Sharma", designation: "Chief Finance Officer & Full Stack Developer", image: "/ms.jpg" },
    { name: "Tulsi Gupta", designation: "Python Developer", image: "/tg.jpg" },
    { name: "Rehaan Sharma", designation: "MERN Stack Developer", image: "/rs.jpg" },
    { name: "Suman Kumar", designation: "MERN Stack Developer", image: "/sk.jpg" },
    { name: "Gopal Kumar Mahto", designation: "Cybersecurity Specialist", image: "/gkm.jpg" },
    { name: "Nandini Gupta", designation: "UI/UX Developer", image: "/ng.jpg" },
    { name: "Prodipta Dutta", designation: "Backend Developer", image: "/pd.jpg" },
    { name: "Sumeet Rawat", designation: "App Developer", image: "/sr.jpg" },
    { name: "Ashish Ranjan Pathak", designation: "JAVA Full Stack Developer", image: "/arp.jpg" }
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
            <div className="bg-white rounded-lg p-6 w-64 text-center shadow-2xl animate-fade-in">
              <span className="absolute top-2 right-4 text-2xl cursor-pointer text-black close-popup">&times;</span>
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cyan-500"
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
