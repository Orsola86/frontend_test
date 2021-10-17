import React from "react";

function Filter({ filter }) {
  console.log(filter);

  return (
    <div>
      {Object.entries(filter).map(([title, obj], index) => (
        <>
          <h4>{title.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toUpperCase()}</h4>
          {Object.entries(obj).map(([key, value], index) => (
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
          ))}
        </>
      ))}
    </div>
  );
}
export default Filter;
