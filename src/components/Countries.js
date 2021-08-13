import React, { useContext } from "react";
import CoronaContext from "../context/index";
import { Row, Col, Table, Skeleton } from "antd";
import { helper } from "../helpers/common";
import NumberFormat from "react-number-format";

const columns = [
  // dong va cot cua bang
  {
    title: "Country",
    dataIndex: "Country", // phai lay dung tu key api
    key: "Country",
  },
  {
    title: "Country code",
    dataIndex: "CountryCode",
    key: "CountryCode",
  },
  {
    title: "New confirmed",
    dataIndex: "NewConfirmed",
    key: "NewConfirmed",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "Total confirmed",
    dataIndex: "TotalConfirmed",
    key: "TotalConfirmed",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "New deaths",
    dataIndex: "NewDeaths",
    key: "NewDeaths",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "Total deaths",
    dataIndex: "TotalDeaths",
    key: "TotalDeaths",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "New recovered",
    dataIndex: "NewRecovered",
    key: "NewRecovered",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
  {
    title: "Total recovered",
    dataIndex: "TotalRecovered",
    key: "TotalRecovered",
    render: (text) => (
      <NumberFormat
        value={text}
        displayType={"text"}
        thousandSeparator={true}
      />
    ),
  },
];

function CountriesCorona() {
  // thay vi dung consumer thi ta dung hook useContext
  const { loading, virus } = useContext(CoronaContext);
  if (loading || helper.isEmptyObject(virus)) {
    return <Skeleton active />;
  }

  return (
    <Row>
      <Col span={24}>
        <Table dataSource={virus.Countries} columns={columns} />;
      </Col>
    </Row>
  );
}

export default React.memo(CountriesCorona);
