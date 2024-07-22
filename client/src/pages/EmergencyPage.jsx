import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const EmergencyPage = () => {
    
    const bronxPosition = [40.8448, -73.8648];

    const resources = [
        {
            id: 1,
            name: "Bronx Lebanon Hospital",
            position: [40.837049, -73.865429],
            info: "Comprehensive healthcare services."
        },
        {
            id: 2,
            name: "NYPD - 40th Precinct",
            position: [40.810810, -73.926474],
            info: "Local police station."
        },
        {
            id: 3,
            name: "Bronx Fire Station 44",
            position: [40.837631, -73.919632],
            info: "Emergency fire services."
        },
        {
            id: 4,
            name: "Montefiore Medical Center",
            position: [40.880484, -73.879658],
            info: "Leading hospital with emergency and specialty services."
        },
        {
            id: 5,
            name: "NYPD - 52nd Precinct",
            position: [40.869061, -73.879299],
            info: "Provides policing services covering the northwest Bronx."
        },
        {
            id: 6,
            name: "St. Barnabas Hospital",
            position: [40.851201, -73.891190],
            info: "Full-service hospital with 24/7 emergency room."
        },
        {
            id: 7,
            name: "NYPD - 45th Precinct",
            position: [40.830370, -73.827202],
            info: "Covers the northeastern section of the Bronx including Co-op City."
        },
        {
            id: 8,
            name: "Lincoln Medical Center",
            position: [40.817233, -73.924512],
            info: "Major medical facility offering emergency services and Level I trauma center."
        },
        {
            id: 9,
            name: "NYPD - 48th Precinct",
            position: [40.843667, -73.890689],
            info: "Serves the central Bronx area with comprehensive community policing."
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-12 mt-14">
            <MapContainer center={bronxPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {resources.map(resource => (
                    <Marker key={resource.id} position={resource.position}>
                        <Popup>
                            {resource.name}<br />
                            {resource.info}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>    
    );
};

export default EmergencyPage;
