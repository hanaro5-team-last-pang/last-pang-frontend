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
    <TabGroup>
      <TabList>
        <div className="flex items-center">
          {tabList.map((item, index) => {
            return (
              <HeadlessTab
                key={index}
                className={clsx('py-5 font-semibold', item.tabListClassName)}
                onClick={item.tabOnClickEvent}
              >
                {item.tabTitle}
                <div className="absolute font-normal">{item.tabComponent}</div>
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
