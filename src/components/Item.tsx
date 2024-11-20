import { Link } from "react-router-dom";

interface ItemProps {
    url:string;
}

const Item: React.FC<ItemProps> = ({ url }) => {
    return(
        <Link
            to={url}
        >
            <h2>nombre item</h2>
        </Link>
    );
};

export default Item