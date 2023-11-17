import { HeaderTable, TableRow } from "./";
import PH1 from "../../assets/desktop/PH1.png";
import PH2 from "../../assets/desktop/PH2.png";
import PH3 from "../../assets/desktop/PH3.png";
import PH4 from "../../assets/desktop/PH4.png";

const users = [
  {
    id: 1,
    username: "GoddesEirene",
    url_min_size: PH1,
    type: "ETH",
    foor_Price: 41,
    floor_change: 5,
  },
  {
    id: 2,
    username: "Winter Madagascar",
    url_min_size: PH2,
    type: "ETH",
    foor_Price: 9.2,
    floor_change: 13,
  },
  {
    id: 3,
    username: "SpaceExplorer",
    url_min_size: PH3,
    type: "ETH",
    foor_Price: 10.1,
    floor_change: 0,
  },
  {
    id: 4,
    username: "Madman",
    url_min_size: PH4,
    type: "ETH",
    foor_Price: 4.6,
    floor_change: 2,
  },
];

export const Table = () => {
  return (
    <div className="hidden md:grid md:grid-cols-[60px_minmax(100px,_1fr)_200px] md:items-center gap-y-3">
      <HeaderTable />
      <div className="md:col-span-3">
        {users.map((user) => (
          <TableRow key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};
