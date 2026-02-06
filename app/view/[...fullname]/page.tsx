import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define User type for clarity
type User = {
  id: string;
  name: string;
  section: string;
  email: string;
  hobbies: string[];
};

// Simulated database (replace with real API/database call in production)
const userDb: User[] = [
  {
    id: 'jameboy',
    name: 'Jameboy Escartin',
    section: 'BSIT - 3A',
    email: 'escartinjameboy@gmail.com',
    hobbies: ['Chess', 'Guitar', 'Hobby 3'],
  },
];

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ fullname: string[] }>; 
}) {
  const { fullname } = await params; 

 
  if (!fullname || fullname.length === 0) {
    return (
      <div className="border p-4 mb-4 rounded-md">
        Not Found User
      </div>
    );
  }

  const userId = fullname[0]; // First slug is the user ID
  const user = userDb.find((u) => u.id === userId); // Find user (replace with async DB call)

  // If user not found, show error
  if (!user) {
    return (
      <div className="border p-4 mb-4 rounded-md">
        Not Found User
      </div>
    );
  }

  // Check if "hobbies" is in the slug array
  if (fullname.includes('hobbies')) {
    return (
      <div className="border p-4 mb-4 rounded-md">
        <h1>{user.name}'s Hobbies</h1>
        <ul>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li> 
          ))}
        </ul>
        <Link href={`/view/${user.id}`}>
          <Button>Back to Profile</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="border p-4 mb-4 rounded-md">
        <h1>{user.name}</h1>
        <h2>{user.section}</h2>
        <p className="mb-4">Email: {user.email}</p>
        <Link href={`/view/${user.id}/hobbies`}>
          <Button>View Hobbies</Button>
        </Link>
      </div>
    </div>
  );
}