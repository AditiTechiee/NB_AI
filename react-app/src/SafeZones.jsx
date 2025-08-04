import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, useMapEvents } from 'react-leaflet';

const AddSafeZone = ({ onAdd }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onAdd({ lat, lng, radius: 300 });
    },
  });
  return null;
};

const SafeZones = () => {
  const [zones, setZones] = useState([]);

  const handleAddZone = (zone) => {
    setZones((prev) => [...prev, zone]);
  };

  return (
    <div className="min-h-screen pt-28 px-6 md:px-20 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">📍 Safe Zone Setup</h2>
      <p className="text-center text-gray-500 text-sm mb-4">
        Click anywhere on the map to define a Safe Zone (300m radius).
      </p>

      <div className="h-[500px] rounded shadow overflow-hidden">
        <MapContainer center={[28.6139, 77.2090]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <AddSafeZone onAdd={handleAddZone} />
          {zones.map((zone, i) => (
            <Circle
              key={i}
              center={[zone.lat, zone.lng]}
              radius={zone.radius}
              pathOptions={{ color: 'green', fillOpacity: 0.3 }}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SafeZones;