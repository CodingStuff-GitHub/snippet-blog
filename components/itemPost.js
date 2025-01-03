import Link from "next/link";
import DateElement from "./DateElement";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faMedapps,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faAws,
  faAngular,
  faGithub,
  faGit,
  faConnectdevelop,
} from "@fortawesome/free-brands-svg-icons";

/**
 * A component that displays a single post item in a list.
 *
 * @param {string} props.id - The post id.
 * @param {string} props.date - The post date.
 * @param {string} props.title - The post title.
 * @param {string} props.description - The post description.
 * @param {string} props.language - The programming language used in the post.
 * @param {Array<string>} props.categories - The categories of the post.
 * @returns {ReactElement} - The component.
 */
export default function ItemPost({
  id,
  date,
  title,
  description,
  language,
  categories,
}) {
  return (
    <div
      key={id}
      className="p-4 transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"
    >
      <article className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-5 text-gray-500">
          <span
            className="bg-primary-100 text-primary-800 dark:bg-primary-200
          dark:text-primary-800 inline-flex items-center justify-center
          rounded px-2.5 py-0.5 text-xl font-medium"
          >
            <svg
              className="w-6 h-6 mb-1 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {getLanguageIcon()}
            </svg>
          </span>
          <span className="text-xl select-none">
            <DateElement dateString={date} />
          </span>
        </div>
        <Link href={`/posts/${id}`}>
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 cursor-pointer hover:underline dark:text-white">
            {title}
          </h2>
        </Link>
        <p className="mb-5 text-xl font-light text-gray-500 grow dark:text-gray-400">
          {description}
        </p>
        <div className="flex select-none">
          {categories.map((category) => (
            <span className="p-2" key={category}>
              <Link key={category} href={`/category/${category}`}>
                <span className="text-s mr-2 rounded bg-gray-100 px-2.5 py-0.5 font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  #{category}
                </span>
              </Link>
            </span>
          ))}
        </div>
      </article>
    </div>
  );

  /**
   * Returns a FontAwesomeIcon component representing the icon for the given programming language.
   * The icon is determined based on the language's name.
   *
   * @returns {JSX.Element} A FontAwesomeIcon component for the specified language.
   * If the language is not recognized, a default icon is returned.
   */
  function getLanguageIcon() {
    switch (language.toLowerCase()) {
      case "python":
        return <FontAwesomeIcon icon={faPython} />;
      case "aws":
        return <FontAwesomeIcon icon={faAws} />;
      case "javascript":
        return <FontAwesomeIcon icon={faJs} />;
      case "html":
        return <FontAwesomeIcon icon={faHtml5} />;
      case "css":
        return <FontAwesomeIcon icon={faCss3Alt} />;
      case "react":
        return <FontAwesomeIcon icon={faReact} />;
      case "angular":
        return <FontAwesomeIcon icon={faAngular} />;
      case "git":
        return <FontAwesomeIcon icon={faGit} />;
      case "github":
        return <FontAwesomeIcon icon={faGithub} />;
      case "ai":
        return <FontAwesomeIcon icon={faConnectdevelop} />;
      default:
        return <FontAwesomeIcon icon={faMedapps} />;
    }
  }
}

ItemPost.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  categories: PropTypes.array,
};
