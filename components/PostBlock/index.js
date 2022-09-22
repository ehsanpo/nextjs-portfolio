import React from "react";
import Box from "../Box";
import Button from "../Button";

const Index = ({ data, onHome = false }) => {
	return (
		<section className="no-bg">
			<div className="wrapper">
				{data.map((Onode) => {
					const node = Onode.node.frontmatter;
					return <Box key={node.id} node={node} image />;
				})}
			</div>
			{onHome && (
				<div className="center">
					<Button className="btn--3">See Portfolio</Button>
				</div>
			)}
		</section>
	);
};

export default Index;
