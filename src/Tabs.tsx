import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tab } from './types/Tab';

interface Props {
  tabs: Tab[];
  selectedId?: string;
}

const Tabs: React.FC<Props> = ({ tabs, selectedId: propSelectedId }) => {
  const location = useLocation();
  const urlMatch = location.pathname.match(/^\/tabs\/([^/]+)/);
  const selectedId = propSelectedId ?? (urlMatch ? urlMatch[1] : undefined);

  return (
    <nav className="tabs is-boxed" aria-label="Primary">
      <ul>
        {tabs.map(tab => {
          const active = tab.id === selectedId;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={active ? 'is-active' : ''}
            >
              <Link
                to={`/tabs/${tab.id}`}
                className={active ? 'is-active' : ''}
              >
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Tabs;
