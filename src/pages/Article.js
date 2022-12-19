import { Link, useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <ul>
      <li>
        <h2>게시글 {id}</h2>
      </li>
    </ul>
  );
};

export default Article;
