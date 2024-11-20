import SongDetail from "./SongDetail";
import { SongData } from "../utils/utils";

interface SongListProps {
  songs: SongData[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <ul>
      {songs.map(() => (
        <SongDetail  />
      ))}
    </ul>
  );
};

export default SongList;
