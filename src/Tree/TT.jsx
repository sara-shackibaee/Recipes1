import React from 'react';
import { Tree } from "antd";
import "antd/dist/antd.css";

const TT = () => {

    const treeData = [
        {
          title: "Main file structure",
          key: "MainStructure",
          children: [
            {
              title: "Layouts",
              key: "layoutFolder",
              children: [ //child element
                {
                  title: "MainLayout.js",
                  key: "mainlayout.js"
                }
              ]
            },
            { title: "index.js", key: "index.js" }
          ]
        }
      ];

    return (
        <div>
            <Tree checkable treeData={treeData} />
        </div>
    );
}

export default TT;
