import SocialLink from "../../components/social-link/social-link.component";

import profilePicture from "../../assets/profile-picture.jpg";

import { ReactComponent as LinkedLogo } from "../../assets/linkedin-icon.svg";
import { ReactComponent as GithubLogo } from "../../assets/github-icon.svg";
import { ReactComponent as MailIcon } from "../../assets/mail-icon.svg";

const SOCIAL_LINKS = [
  {
    SVGComponent: LinkedLogo,
    link: "https://www.linkedin.com/in/marcochacon/",
    key: "linkedin",
  },
  {
    SVGComponent: GithubLogo,
    link: "https://github.com/MarcoC1796",
    key: "github",
  },
  {
    SVGComponent: MailIcon,
    link: "marco.chacon1796@gmail.com",
    key: "email",
    email: true,
  },
];

const AboutMe = () => {
  return (
    <section className="block mt-10 lg:mx-auto lg:mt-28 lg:grid lg:mx-30 grid-cols-5 gap-6 max-w-screen-2xl">
      <div className="col-span-2 flex justify-center rounded-full">
        <img
          className="max-h-72 lg:max-h-[32rem] rounded-full shadow-2xl"
          src={profilePicture}
          alt="Marco Chacon smiling"
        />
      </div>
      <div className="lg:mt-0 col-span-3 flex justify-center">
        <div className="p-10">
          <h1 className="text-gray-600">Hi, my name is</h1>
          <h2 className="text-6xl text-gray-900 font-black py-8">
            Marco Chacon.
          </h2>
          <p className="text-xl text-gray-600">
            I'm an{" "}
            <span className="font-bold text-xl text-gray-900">
              Applied Mathematitcan
            </span>{" "}
            and{" "}
            <span className="font-bold text-xl text-gray-900">
              Software Engineer
            </span>{" "}
            with eperience developing{" "}
            <span className="font-bold text-gray-900">Full Stack Software</span>{" "}
            Products and building{" "}
            <span className="font-bold text-gray-900">ML Models</span>.
            <br />
            <br />
            I've worked for Big Tech Companies, Local Companies and in Freelance
            Projects.
            <br />
            <br />
            Currently, I'm finishing my undergrad theis on Recommender Systems
            and looking for exciting projects to participate in.
          </p>
          <p></p>
        </div>
      </div>
      <div className="px-4 py-8 lg:py-16 col-start-2 col-span-3 flex justify-evenly content-center">
        {SOCIAL_LINKS.map((socialLink) => (
          <SocialLink {...socialLink} />
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
