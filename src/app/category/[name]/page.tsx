import { getCategory } from "@/lib/category";

type Props = {
	params: {
		name: string;
	};
};

export default async function Category({ params }: Props) {
	const { name } = await params;
	const category = await getCategory(name);
	return (
		<>
			<h1 className="font-extrabold text-3xl mb-1">{category.name}</h1>
			<p>category</p>
		</>
	);
}
