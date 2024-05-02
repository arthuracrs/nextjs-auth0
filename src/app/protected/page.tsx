import { NextPage } from "next";
import React from "react";

const Protected: NextPage = async () => {
  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Protected Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page retrieves a <strong>protected message</strong>.
          </span>
          <span>
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Protected;
