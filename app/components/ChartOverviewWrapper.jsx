"use client";
import dynamic from "next/dynamic";

const ChartOverview = dynamic(() => import("./ChartOverview"), { ssr: false });

export default ChartOverview;
