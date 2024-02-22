import { Layout } from "@/components/core/layout";
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
				<ProjectTable projects={projects} />
			</Layout.Content>
		</>
	);
}
