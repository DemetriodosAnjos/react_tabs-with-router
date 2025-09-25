import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from './types/Tab';

interface Props {
  tabs: Tab[];
  selectedId?: string;
}

const Tabs: React.FC<Props> = ({ tabs, selectedId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const active = tab.id === selectedId;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={active ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
