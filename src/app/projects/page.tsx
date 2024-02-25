import { Layout } from "@/components/core/layout";
import ProjectTable from "@/components/projects/project-table/project-table";
import { db } from "@/drizzle/db";
import { projects } from "@/drizzle/schema";

async function fetchProjectLists() {
	return db.select().from(projects);
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
