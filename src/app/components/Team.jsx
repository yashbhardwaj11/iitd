import Image from 'next/image';

export default function Home() {
  const profiles = [
    {
      name: 'Kush Kalra',
      title: 'Graphic Designer',
      imgSrc: '/kush.png', // Adjust the image path accordingly
    },
    {
      name: 'Jane Doe',
      title: 'Web Developer',
      imgSrc: '/jane-doe.png',
    },
    {
      name: 'John Smith',
      title: 'UI/UX Designer',
      imgSrc: '/john-smith.png',
    },
    {
      name: 'Alice Brown',
      title: 'Product Manager',
      imgSrc: '/alice-brown.png',
    },
    {
      name: 'Bob Johnson',
      title: 'Software Engineer',
      imgSrc: '/bob-johnson.png',
    },
    {
      name: 'Charlie White',
      title: 'Data Scientist',
      imgSrc: '/charlie-white.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <Image 
                src={profile.imgSrc} 
                alt={profile.name} 
                fill 
                className="rounded-full object-cover" 
              />
            </div>
            <h2 className="text-lg font-semibold">{profile.name}</h2>
            <p className="text-gray-500">{profile.title}</p>
            <div className="mt-2">
              <Image src="/linkedin-icon.png" alt="LinkedIn" width={20} height={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
