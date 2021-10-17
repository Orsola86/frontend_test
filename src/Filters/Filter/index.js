import React from "react";
import Rating from "../../Rating";

function Filter({ filter }) {
  console.log(filter);

  function convertiStelle(key) {
    switch (key) {
      case "una":
        return 1;
      case "due":
        return 2;
      case "tre":
        return 3;
      case "quattro":
        return 4;
      case "cinque":
        return 5;
      default:
        break;
    }
  }

  return (
    <div>
      {Object.entries(filter).map(([title, obj], index) => (
        <>
          <h4 key={index}>
            {title.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toUpperCase()}
          </h4>
          {Object.entries(obj).map(([key, value], index) => {
            return title === "stelle" ? (
              <>
                <label key={index}>
                  <input type="checkbox" name={title} value={key} />
                  &nbsp;
                  {/* non capisco come inserire la logica nel componente <Rating/> */}
                  {/* {[...Array(5)].map((_, index) =>
                    index < convertiStelle(key) ? (
                      <i key={index} class="fas fa-star fa-xs"></i>
                    ) : (
                      <i key={index} class="far fa-star fa-xs"></i>
                    )
                  )} */}
                  {/* fine logica rating */}
                  &nbsp;({value})
                </label>
                <br />
              </>
            ) : (
              <>
                <label key={index}>
                  <input type="checkbox" name={title} value={key} />
                  &nbsp;
                  {key
                    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                    .replace(/^./, key[0].toUpperCase())}
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
