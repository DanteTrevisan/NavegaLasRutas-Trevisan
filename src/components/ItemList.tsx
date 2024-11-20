import { toUrlFormat } from "../utils/utils";
import Item from "./Item";
import { urls } from "../utils/routes";

interface ItemListProps {
  data: string[];
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
  return (
    <>
      <section>
        {data.map(() =>
          (
            <Item
              url={
                urls.item +
                toUrlFormat("The King Of Fighters '94")
              }
            />
         )
        )}
      </section>
    </>
  );
};

export default ItemList;
