import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { id: '1', title: 'Project One', description: 'A short description of project one.', tag: 'Web', image: 'https://images.pexels.com/photos/6474458/pexels-photo-6474458.jpeg' },
  { id: '2', title: 'Project Two', description: 'A short description of project two.', tag: 'Design', image: 'https://images.pexels.com/photos/6474451/pexels-photo-6474451.jpeg' },
  { id: '3', title: 'Project Three', description: 'A short description of project three.', tag: 'App', image: 'https://images.pexels.com/photos/6474461/pexels-photo-6474461.jpeg' },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-8 py-16">
      <h1 className="text-3xl font-semibold text-black dark:text-white mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{project.tag}</span>
                <h2 className="text-lg font-semibold text-black dark:text-white mt-2">{project.title}</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}