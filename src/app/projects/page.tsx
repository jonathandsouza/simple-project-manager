import ProjectData from "@/components/project-data/project-data";
import { prisma } from "@/lib/client";
import { Suspense } from "react";

async function fetchProjectLists() {
	return prisma.projects.findMany();
}

export default async function ProjectPage() {
	const projectsList = await fetchProjectLists();

	return (
		<>
			<h1>Project Page</h1>
			<code>{projectsList.map((e) => e.project_name).join()}</code>
			<Suspense fallback={<span>loading...</span>}>
				<ProjectData />
			</Suspense>
		</>
	);
}
