import { NextPage } from "next";
import React from "react";

const Public: NextPage = async () => {
  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Public Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page retrieves a <strong>public message</strong>.
          </span>
          <span>
            <strong>Any visitor can access this page.</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Public;
