import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";

LayoutCorona.propTypes = {
  children: PropTypes.node.isRequired,
};

function LayoutCorona(props) {
  return (
    <Row>
      <Col span={20} offset={2}>
        {props.children}
      </Col>
    </Row>
  );
}

export default React.memo(LayoutCorona);
