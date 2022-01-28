import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Triangle } from "../../Assets/Icons/Triangle.svg";

export default function Sidebar() {
  return (
    <aside>
      <div>
        <a href="https://pinterest.com/">
          Pinterest
          <Triangle className="Triangle" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/">
          Twitter
          <Triangle className="Triangle" />
        </a>
      </div>
      <div>
        <a href="https://facebook.com/">
          Facebook
          <Triangle className="Triangle" />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/">
          Instagram
          <Triangle className="Triangle" />
        </a>
      </div>
    </aside>
  );
}
