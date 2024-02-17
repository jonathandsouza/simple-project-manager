import { prisma } from "@/lib/client";

function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function fakeData() {
	await sleep(10000);
	return prisma.projects.findMany();
}

export default async function ProjectData() {
	const data = await fakeData();

	return <h2>{data.map((e) => e.project_name).join()}</h2>;
}
