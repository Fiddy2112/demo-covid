import React, { useState, useEffect } from "react";
import CoronaContext from "./index";
import { api } from "../services/api";
import { helper } from "../helpers/common";
import PropTypes from "prop-types";

const CoronaProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [virus, setVirus] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataCovid();
      if (!helper.isEmptyObject(data)) {
        setVirus(data);
        setError({});
      } else {
        setVirus({});
        setError({
          cod: 404,
          mess: "Not found data!",
        });
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <CoronaContext.Provider
      value={{ loading: loading, virus: virus, error: error }}
    >
      {props.children}
    </CoronaContext.Provider>
  );
};

CoronaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(CoronaProvider);
