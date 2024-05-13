"use client";

import { useMemo, useState } from "react";

type Props = {
  items: {
    id: number;
    title: string;
    content: string;
  }[];
};

const TabsTwo = (props: Props) => {
  const [activeTabId, setActiveTab] = useState(props.items[0].id);

  const activeTab = useMemo(
    () => props.items.find((tab) => tab.id === activeTabId),
    [activeTabId, props.items]
  );

  return (
    <div className={`tabs`}>
      <div className="lg:block hidden">
        <Navigation
          tabs={props.items}
          onNavClick={setActiveTab}
          activeTabId={activeTabId}
        />
        <Tab tab={activeTab} />
      </div>
      <div className="lg:hidden">
        <MobileTab
          tabs={props.items}
          onNavClick={setActiveTab}
          activeTabId={activeTabId}
        />
      </div>
    </div>
  );
};

type TabProps = {
  tab: any;
};
const Tab = (props: TabProps) => {
  return (
    <div className={`  bg-brand-gray-25 px-4 md:px-6 py-6 md:py-8`}>
      <article
        className="prose max-w-full prose-img:m-0 prose-p:my-4 prose-base prose-strong:text-gray-600 prose-a:font-semibold prose-img:inline-block  prose-p:w-full hover:prose-a:text-brand-blue  prose-a:text-brand-pink-100 prose-a:inline-block prose-a:no-underline prose-a:m-0 "
        dangerouslySetInnerHTML={{ __html: props.tab.content }}
      />
    </div>
  );
};

type NavigationProps = {
  tabs: {
    id: number;
    title: string;
    content: string;
  }[];
  onNavClick: any;
  activeTabId: any;
};

const Navigation = (props: NavigationProps) => {
  return (
    <ul className={`flex`}>
      {props.tabs.map((item) => (
        <li
          key={item.id}
          className={`group first:-ml-4 -mb-px relative after:absolute after:right-0 after:top-1/2 last:after:opacity-0 after:h-5 after:-translate-y-1/2  after:w-px after:bg-brand-blue ${
            props.activeTabId === item.id ? "active" : ""
          }`}
        >
          <button
            className={`px-4 text-sm xl:text-[15px] py-4 h-full  group-[.active]:text-brand-green-100  font-medium text-brand-blue max-w-[180px] text-left leading-tight `}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
type MobileTabProps = {
  tabs: {
    id: number;
    title: string;
    content: string;
  }[];
  onNavClick: any;
  activeTabId: any;
};

const MobileTab = (props: MobileTabProps) => {
  return (
    <ul className={` `}>
      {props.tabs.map((item) => (
        <li
          key={item.id}
          className={`group -mb-px ${
            props.activeTabId === item.id ? "active" : ""
          }`}
        >
          <button
            className={`px-6 py-4 h-full group-[.active]:text-brand-green-100 border group-[.active]:border-x group-[.active]:border-t group-[.active]:border-brand-gray-20 group-[.active]:bg-brand-gray-25 font-extrabold text-brand-blue-100 w-full text-left leading-tight `}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.title}
          </button>
          <div
            className={`border-brand-gray-20 border bg-brand-gray-25 px-4 md:px-6 py-6 md:py-8 group-[.active]:block hidden`}
          >
            <article
              className="prose max-w-full prose-sm prose-img:m-0 prose-a:font-semibold  prose-img:inline-block  hover:prose-a:text-brand-blue  prose-a:text-brand-pink-100 prose-a:inline-block prose-a:no-underline prose-a:m-0 "
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TabsTwo;
