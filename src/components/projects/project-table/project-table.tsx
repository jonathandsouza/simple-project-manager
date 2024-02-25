import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { projects } from "@/drizzle/schema";
import { Project } from "next/dist/build/swc";

export default function ProjectTable({
	projects,
}: Readonly<{
	projects: Project;
}>) {
	return (
		<Table>
			<TableCaption>A list of projects</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Id</TableHead>
					<TableHead>Created On</TableHead>
					<TableHead>Project Name</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{projects.map(({ id, created_at, project_name }) => (
					<TableRow key={id}>
						<TableCell className="font-medium">
							{id.toString()}
						</TableCell>
						<TableCell>{created_at?.toDateString()}</TableCell>
						<TableCell>{project_name}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
