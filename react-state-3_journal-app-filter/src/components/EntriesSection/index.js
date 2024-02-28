import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";
import {useState} from "react";

export default function EntriesSection({ entries, onToggleFavorite }) {
  const [filter, setFilter] = useState(false);

  function handleSetFilter(){
    
  }

  function displayEntries(){
    return filter ? entries.filter((entry) => entry.isFavorite) : entries;
  }

  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>{entries.length}</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>{entries.filter((entry) => entry.isFavorite).length}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {displayEntries().map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
