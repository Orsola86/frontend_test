import React, { useContext } from "react";
import Rating from "../../Rating";
import { SELECTED_FILTER } from "../../actions";
import { AppContext } from "../../App";

function Filter({ filter }) {
  // console.log(filter);
  const [, dispatch] = useContext(AppContext);

  return (
    <div>
      {Object.entries(filter).map(([title, obj], index) => (
        <>
          <h4 key={index}>
            {title.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toUpperCase()}
          </h4>
          {Object.entries(obj).map(([labelFilter, value], index) => {
            return title === "stelle" ? (
              <>
                <label key={index}>
                  <input type="checkbox" name={title} value={labelFilter} />
                  &nbsp;
                  <Rating stelle={5 - index} />
                  &nbsp;({value})
                </label>
                <br />
              </>
            ) : (
              <>
                <label key={index}>
                  <input
                    type="checkbox"
                    name={title}
                    value={labelFilter}
                    onChange={(event) =>
                      dispatch({
                        type: SELECTED_FILTER,
                        payload: event.target,
                      })
                    }
                  />
                  &nbsp;
                  {labelFilter
                    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                    .replace(/^./, labelFilter[0].toUpperCase())}
                  &nbsp;({value})
                </label>
                <br />
              </>
            );
          })}
        </>
      ))}
    </div>
  );
}
export default Filter;
