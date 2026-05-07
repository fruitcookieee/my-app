const projects: Record<string, { title: string; description: string; tag: string }> = {
  '1': { title: 'Project One', description: 'Full details about project one go here.', tag: 'Web' },
  '2': { title: 'Project Two', description: 'Full details about project two go here.', tag: 'Design' },
  '3': { title: 'Project Three', description: 'Full details about project three go here.', tag: 'App' },
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id];

  if (!project) return <div className="min-h-screen flex items-center justify-center text-zinc-400">Project not found.</div>;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-8 py-16 max-w-2xl mx-auto">
      <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{project.tag}</span>
      <h1 className="text-3xl font-semibold text-black dark:text-white mt-2">{project.title}</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mt-4">{project.description}</p>
    </div>
  );
}