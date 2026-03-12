import React, { Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getLocationHub } from '../data/locationHubData';

const LocationHubTemplate = React.lazy(() => import('./LocationHubTemplate'));

const PageLoader = () => (
    <div className="flex w-full h-screen items-center justify-center bg-background dark:bg-[#111]">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
);

/**
 * Dynamic route handler for /in/:location
 * Checks if the location slug has a full hub page in LOCATION_HUBS data.
 * If yes → renders LocationHubTemplate with that data.
 * If no  → redirects to /service-areas.
 */
export default function LocationHubRouter() {
    const { location } = useParams<{ location: string }>();

    if (!location) {
        return <Navigate to="/service-areas" replace />;
    }

    const hub = getLocationHub(location);

    if (!hub) {
        // No dedicated hub for this location — redirect to service areas page
        return <Navigate to="/service-areas" replace />;
    }

    return (
        <Suspense fallback={<PageLoader />}>
            <LocationHubTemplate location={hub} />
        </Suspense>
    );
}
