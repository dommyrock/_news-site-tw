import { useEffect } from "react";
import { useBaseContext } from "../providers/BaseProvider";
import spacexData from "../test_Data.json";
import ModalSimple from "./shared/modals/ModalCustom";

let alteredData = [];
// NOTE : currently: This component shows up on timeline hover , and onMouseMove it re-renders
export default function TimelineContent() {
  useEffect(() => {
    console.log(spacexData);
    spacexData.data.launchesPast.forEach((mission) => {
      let month = new Date(mission.launch_date_local).getMonth() + 1;
      let year = new Date(mission.launch_date_local).getFullYear();
      alteredData.push({ ...mission, month: month, year: year });
    });

    // return () => {
    //   cleanup;
    // };
  }, []);
  const [showModal, set_showModal] = useBaseContext(useBaseContext);

  const handleContentClick = (e) => {
    console.log(e.target);
    set_showModal(true);
  };
  //   debugger;

  return (
    <>
      <div className="flex flex-row">
        {alteredData?.map(
          (mission) =>
            mission.ships.length > 0 && (
              <div className="flex flex-col" key={mission.mission_name}>
                {mission.ships?.map((ship, index) => (
                  <div
                    key={index}
                    className="bg-blue-400 rounded-md px-[.1rem] hover:bg-red-300 hover:cursor-pointer max-w-[230px]"
                    style={{ margin: "0.2rem" }}
                    onClick={(e) => handleContentClick(e)}
                  >
                    <p>{ship.name}</p>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
      {showModal && <ModalSimple />}
    </>
  );
}
