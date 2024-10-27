const Heading = ({ className, level = 1, color = 'black', children }) => {
	const HeadingTag = `h${level}`;
	const headingStyle = {
		color: color,
	};

	return <HeadingTag className={className} style={headingStyle}>{children}</HeadingTag>;
}

export default Heading;
