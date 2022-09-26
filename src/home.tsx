import React from "react";

import { github } from "./config";

const Home = () => (
  <div>
    <p>
      Select an option from the menu above{" "}
      <i
        className={"fa fa-arrow-up fa-rotate-by"}
        style={{ "--fa-rotate-angle": "45deg" } as any}
      />
    </p>

    <p>
      <a href={github.url}>
        <i className="fa fa-code"></i> Source
      </a>{" "}
      available under MIT license.
    </p>
  </div>
);

export default Home;
