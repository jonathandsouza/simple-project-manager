import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { projects } from "@prisma/client";

export default function ProjectTable({
  projects,
}: Readonly<{
  projects: Array<projects>;
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
        {projects.map(({ id, created_at, name }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">
              {id.toString()}
            </TableCell>
            <TableCell>{created_at.toDateString()}</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
