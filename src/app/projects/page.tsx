import { Layout } from "@/components/core/layout";
import ProjectTable from "@/components/projects/project-table/project-table";
import { prisma } from "@/lib/client";
import { Suspense } from "react";

async function fetchProjectLists() {
	return prisma.projects.findMany();
}

export default async function ProjectPage() {
	return (
		<>
			<Layout.Header title="Projects" />
			<Layout.Content>
				<Suspense fallback={<span>loading...</span>}>
					<ProjectTable />
				</Suspense>
			</Layout.Content>
		</>
	);
}
