import {
  Tab as HeadlessTab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import clsx from 'clsx';
import { JSX } from 'react';

interface tabListProps {
  tabTitle: string;
  tabComponent?: JSX.Element;
  tabListClassName?: string;
  tabOnClickEvent?: () => void;
}

interface TabProps {
  tabList: tabListProps[];
  tabPanelList?: JSX.Element[];
  tabPanelClassName?: string;
}

export default function Tab({
  tabList,
  tabPanelList,
  tabPanelClassName,
}: TabProps) {
  return (
    <TabGroup className="h-full">
      <TabList className="h-full">
        <div className="flex items-center h-full">
          {tabList.map((item, index) => {
            return (
              <HeadlessTab
                key={index}
                className={clsx('h-full font-semibold', item.tabListClassName)}
                onClick={item.tabOnClickEvent}
              >
                {item.tabTitle}
                <div className="absolute font-normal mt-4">
                  {item.tabComponent}
                </div>
              </HeadlessTab>
            );
          })}
        </div>
      </TabList>
      <TabPanels>
        {tabPanelList &&
          tabPanelList.map((item, index) => {
            return (
              <TabPanel key={index} className={clsx(``, tabPanelClassName)}>
                {item}
              </TabPanel>
            );
          })}
      </TabPanels>
    </TabGroup>
  );
}
