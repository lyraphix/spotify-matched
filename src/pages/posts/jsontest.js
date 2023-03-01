import Head from "next/head";
import React from "react";
import { getSession, getProviders, useSession } from "next-auth/react";

import Sidebar from "../../../components/Sidebar";
import Login from "../../../components/Login";
import Jsontest from "../../../components/Jsontest";

export default function jsontest({ providers }) {

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Sidebar />
    </div>
  );
}

