import React from "react";

const JourneyTable = ({ route }) => {
  return (
    <>
      <tr>
        <td colSpan={3} className="bg-info">
          <h6>
            You see the travel information from station <b>{route[0].from.location.name}</b> to
            station <b>{route[0].to.location.name}</b>
          </h6>
        </td>
      </tr>
      <tr>
        <td>
          {route[0].from.departure.substr(11, 5)} <br />
          {route[0].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[0].duration.substr(3, 5)} <br /> {route[0].products[0]}
        </td>
        <td>
          {route[0].from.platform} <br /> {route[0].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[1].from.departure.substr(11, 5)} <br />
          {route[1].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[1].duration.substr(3, 5)} <br /> {route[1].products[0]}
        </td>
        <td>
          {route[1].from.platform} <br /> {route[1].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[2].from.departure.substr(11, 5)} <br />
          {route[2].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[2].duration.substr(3, 5)} <br /> {route[2].products[0]}
        </td>
        <td>
          {route[2].from.platform} <br /> {route[2].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[3].from.departure.substr(11, 5)} <br />
          {route[3].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[3].duration.substr(3, 5)} <br /> {route[3].products[0]}
        </td>
        <td>
          {route[3].from.platform} <br /> {route[3].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[4].from.departure.substr(11, 5)} <br />
          {route[4].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[4].duration.substr(3, 5)} <br /> {route[4].products[0]}
        </td>
        <td>
          {route[4].from.platform} <br /> {route[4].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[5].from.departure.substr(11, 5)} <br />
          {route[5].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[5].duration.substr(3, 5)} <br /> {route[5].products[0]}
        </td>
        <td>
          {route[5].from.platform} <br /> {route[5].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[6].from.departure.substr(11, 5)} <br />
          {route[6].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[6].duration.substr(3, 5)} <br /> {route[6].products[0]}
        </td>
        <td>
          {route[6].from.platform} <br /> {route[6].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[7].from.departure.substr(11, 5)} <br />
          {route[7].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[7].duration.substr(3, 5)} <br /> {route[7].products[0]}
        </td>
        <td>
          {route[7].from.platform} <br /> {route[7].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[8].from.departure.substr(11, 5)} <br />
          {route[8].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[8].duration.substr(3, 5)} <br /> {route[8].products[0]}
        </td>
        <td>
          {route[8].from.platform} <br /> {route[8].to.platform}
        </td>
      </tr>
      <tr>
        <td>
          {route[9].from.departure.substr(11, 5)} <br />
          {route[9].to.arrival.substr(11, 5)}
        </td>
        <td>
          {route[9].duration.substr(3, 5)} <br /> {route[9].products[0]}
        </td>
        <td>
          {route[9].from.platform} <br /> {route[9].to.platform}
        </td>
      </tr>
    </>
  );
};

export default JourneyTable;
