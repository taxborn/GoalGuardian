"use client";

import { Tldraw } from "@tldraw/tldraw";
import "./index.css";


export default function app() {
  return (
    <> 
      <div className="h-full">
        <Tldraw />
      </div>
    </>
  );
}
