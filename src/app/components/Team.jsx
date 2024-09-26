import Image from 'next/image';

export default function Team() {
  const profiles = [
    {
      name: 'Pravash Dey',
      title: 'Curator At US India Blockchain Council',
      imgSrc: '/Pravash.png', // Adjust the image path accordingly
    },
    {
      name: 'Navdeep Chobhiyal',
      title: 'Co-Founder & CBO @GydeXP',
      imgSrc: '/navdeep.png',
    },
    {
      name: 'Ishita Garg',
      title: 'UI/UX Designer',
      imgSrc: '/ishita.png',
    },
    {
      name: 'Adarsh Gautam',
      title: 'Curator At US India Blockchain Council',
      imgSrc: '/Adarsh.png',
    },
    {
      name: 'Kush Kalra',
      title: 'Graphic Designer',
      imgSrc: '/kush.png', 
    },
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-around items-center">
            <div className="relative w-52 h-52 md:w-72 md:h-72 mb-4">
              <Image 
                src={profile.imgSrc} 
                alt={profile.name} 
                fill 
                className="" 
              />
            </div>
            <h2 className="text-lg font-semibold">{profile.name}</h2>
            <p className="text-gray-500">{profile.title}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}
