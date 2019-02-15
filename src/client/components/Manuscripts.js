import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import ViewTabs from './ViewTabs';
import ResultTable from './ResultTable';
import LeafletMap from './LeafletMap';
//import Deck from './Deck';

let Manuscripts = props => {
  return (
    <React.Fragment>
      <ViewTabs
        routeProps={props.routeProps}
        tabs={{
          '/manuscripts/table': {
            label: 'table',
            value: 0,
            icon: 'CalendarViewDay',
          },
          '/manuscripts/production_places': {
            label: 'production places',
            value: 1,
            icon: 'AddLocation',
          },
          // '/manuscripts/migrations': {
          //   label: 'migrations',
          //   value: 2,
          //   icon: 'Redo',
          // }
        }}
      />
      <Route
        exact path='/manuscripts'
        render={() => <Redirect to='manuscripts/table' />}
      />
      <Route
        path={'/manuscripts/table'}
        render={routeProps =>
          <ResultTable
            data={props.manuscripts}
            filters={props.facetData.filters}
            resultClass='manuscripts'
            facetClass='manuscripts'
            fetchResults={props.fetchResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
          />
        }
      />
      <Route
        path={'/manuscripts/production_places'}
        render={() =>
          <LeafletMap
            results={props.places.results}
            resultClass='places'
            facetClass='manuscripts'
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            mapMode={'cluster'}
            variant='productionPlaces'
            showInstanceCountInClusters={true}
          />}
      />
      {/*<Route
        path={'/manuscripts/migrations'}
        render={() =>
          <Deck
            fetchPlaces={props.fetchPlaces}
            fetchingPlaces={props.search.fetchingPlaces}
            data={props.search.places}
          />}
      /> */}
    </React.Fragment>
  );
};

Manuscripts.propTypes = {
  manuscripts: PropTypes.object.isRequired,
  places: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired
};

export default Manuscripts;
