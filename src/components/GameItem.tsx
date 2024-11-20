import { Link } from "react-router-dom";

interface GameItemProps {
    url: string;
}
const GameItem: React.FC<GameItemProps> = ({ url }) => {
    return(
        <Link
            to={url}
        >
            <p>{url}</p>
        </Link>
    );
};

export default GameItem