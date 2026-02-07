import React from "react";
import "./Coding.css";

export default function Coding() {
  return (
    <div className="coding-section">
      <h1 className="coding-title">Competitive Coding</h1>

      <div className="coding-stats">
        <div>
          <h2>100+</h2>
          <p>GeeksForGeeks</p>
        </div>

        <div>
          <h2>17+</h2>
          <p>LeetCode</p>
        </div>

        <div>
          <h2>30+</h2>
          <p>HackerRank</p>
        </div>
      </div>

      <div className="coding-cards">
        
        {/* GFG CARD */}
        <a
          href="https://www.geeksforgeeks.org"
          target="_blank"
          className="coding-card"
        >
          <img src="/gfg.png" alt="GFG" />
          <p>Visit my profile</p>
        </a>

        {/* LEETCODE */}
        <a
          href="https://leetcode.com"
          target="_blank"
          className="coding-card"
        >
          <img src="/leetcode.png" alt="LC" />
          <p>Visit my profile</p>
        </a>

        {/* HACKERRANK */}
        <a
          href="https://hackerrank.com"
          target="_blank"
          className="coding-card"
        >
          <img src="/hackerrank.png" alt="HR" />
          <p>Visit my profile</p>
        </a>

      </div>
    </div>
  );
}
