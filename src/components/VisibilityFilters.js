//VisibilityFilters renders a simple set of filters: all, completed, and incomplete. 
//Clicking on each one of them filters the todos:
//-> It accepts an activeFilter prop from the parent that indicates 
//  which filter is currently selected by the user. 
//  An active filter is rendered with an underscore.
//-> It dispatches the setFilter action to update the selected filter.
import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

// select the active button on all, completed or incomplete
// VISIBILITY_FILTERS = { ALL: "all", COMPLETED: "completed", INCOMPLETE: "incomplete" }
const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]; //value of VISIBILITY_FILTERS
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
    //console.log(state);
  return { activeFilter: state.visibilityFilter };
  // dump the components to state for activeFilter
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,  // map state to store 
  { setFilter } //dispatch to action 
)(VisibilityFilters);
