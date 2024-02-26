import { Layout } from "@/components/core/layout";
import { AddNewProject } from "@/components/projects/add-new-project/add-new-project";
import ProjectTable from "@/components/projects/project-table/project-table";
import { prisma } from "@/lib/client";
import { Suspense } from "react";

async function fetchProjectLists() {
	return prisma.projects.findMany();
}

export default async function ProjectPage() {
	const projects = await fetchProjectLists();

	return (
		<>
			<Layout.Header title="Projects" />
			<Layout.Content>
				<Suspense fallback="loading...">
					<div className="flex justify-end pr-10 pt">
						<AddNewProject />
					</div>
					<ProjectTable projects={projects} />
				</Suspense>
			</Layout.Content>
		</>
	);
}
