const SocialLink = ({ SVGComponent, link, email = false, phone = false }) => {
  return (
    <a
      href={email ? "mailto: " + link : link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SVGComponent className="fill-gray-500 transition duration-150 ease-in-out hover:scale-110 hover:fill-gray-900" />
    </a>
  );
};

export default SocialLink;
